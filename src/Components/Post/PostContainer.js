// 여기선 Feed창에서 나타나는 Post의 정보들을 받는 역할
// 화면에 보기좋게 꾸며주는건 PostPresenter.js에서 실행됨
import React, { useState, useEffect } from 'react';
// useEffect reactHooks의 componentDidMount 같은거임
import PropTypes from 'prop-types';
import useInput from '../../Hooks/useInput';
import PostPresenter from './PostPresenter';
import { useMutation } from '@apollo/react-hooks';
import { TOGGLE_LIKE, ADD_COMMENT } from './PostQueries';
import { toast } from 'react-toastify';

const PostContainer = ({
  id,
  user,
  files,
  likeCount,
  isLiked,
  comments,
  createdAt,
  caption,
  location,
}) => {
  const [isLikedS, setIsLiked] = useState(isLiked);
  const [likeCountS, setLikeCount] = useState(likeCount);
  const [currentItem, setCurrentItem] = useState(0);
  const [selfComments, setSelfComments] = useState([]);
  const comment = useInput('');
  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
    variables: { postId: id },
  });

  const [addCommentMutation] = useMutation(ADD_COMMENT, {
    variables: { postId: id, text: comment.value },
  });

  // post를 불러올시 자동으로 가장 먼저 실행됨
  // 해당 컴포넌트의 다른 작업들과 별개로 작동함
  useEffect(() => {
    const totalFiles = files.length;
    if (currentItem === totalFiles - 1) {
      setTimeout(() => setCurrentItem(0), 3000);
    } else {
      setTimeout(() => setCurrentItem(currentItem + 1), 3000);
    }
  }, [currentItem, files]);

  // 이렇게 작성하면 비동기 특성상 에러가 발생해도 catch에서 작동함
  const toggleLike = async () => {
    // 이부분은 먼저 화면에 렌더링하는 부분은 굳이 prisma DB를 기다릴필요없이
    // 실시간으로 보여지는것처럼 느껴지게 하기위해 설정
    // 클라이언트를 먼저 렌더링하고 db는 그이후 mutation을 실행
    if (isLikedS === true) {
      // client의 좋아요가  true라면 false로 바꿔주고 카운트 -1 해줌
      setIsLiked(false);
      setLikeCount(likeCountS - 1);
    } else {
      // client의 좋아요가 false라면 true로 바꿔주고 카운트 +1 해줌
      setIsLiked(true);
      setLikeCount(likeCountS + 1);
    }

    // 이제 db mutation 실행
    try {
      // throw Error( );
      await toggleLikeMutation();
    } catch {
      // 문제가 생기면 위에서 했던 client작업을 되돌리기위한 작업
      // 좋아요 상태 원래대로 만들고, 좋아요 갯수 원래대로 돌려줌
      setIsLiked(!isLikedS);
      setLikeCount(likeCountS);
      // 그리고 에러 메시지 출력
      toast.error("Can't register Like/UnLike");
    }
  };

  // addComment를 위한 이벤트 함수
  const onKeyPress = async (event) => {
    // event에서 wich를 빼옴(입력된 글자의 keycode를 뽑아와줌)
    const { which } = event;
    // enter를 입력하면 (13은 enter의 keycode임)
    if (which === 13) {
      // 새로고침을 중지함( form이니깐)
      event.preventDefault();
      // addCommentMutation 속의 data 안의 addComment 값을 뽑아와줌
      try {
        const {
          data: { addComment },
        } = await addCommentMutation();
        // 커멘트 작성시 만약 이전에 내가 댓글을 달았다면(새로고침안하고) 기존 내가 달았던 addComment가 selfComment(client)에 저장되니깐
        // 기존 selfComment를 스프레드 문법으로 내용을 뿌려주고 새로운 addComment를 배열에 추가해줌
        // 중요한건 mutation이 실행되길 기다린다음에 화면에 렌더링 해준다는것임
        /* selfComment는 기존 comment뒤에 내가 달은 댓글을 보여주는기능인데 */
        /* 이기능은 db에서 끌어오는게 아니라 내가 지금 입력한 댓글을 client에서 끌어오는 것 */
        /* db를 굳이 불러올 필요가 없으니 이런 fake로 만들어줌 */

        // addComment는 이렇게 selfComments에 포함된다.
        setSelfComments([...selfComments, addComment]);
        // 그리고 입력창은 빈공간으로 돌려줌
        comment.setValue('');
      } catch {
        // 에러나면 표시
        toast.error('cant send comment');
      }
    }
  };

  return (
    <PostPresenter
      user={user}
      files={files}
      likeCount={likeCountS}
      location={location}
      caption={caption}
      isLiked={isLikedS}
      comments={comments}
      createdAt={createdAt}
      newComment={comment}
      setIsLiked={setIsLiked}
      setLikeCount={setLikeCount}
      currentItem={currentItem}
      toggleLike={toggleLike}
      onKeyPress={onKeyPress}
      selfComments={selfComments}
    />
  );
};

// feed.js에서 post component로 넘겨받는 props의 type 및 필수요소인지 설정
PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
  }).isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  likeCount: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  caption: PropTypes.string.isRequired,
  location: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
};

export default PostContainer;
