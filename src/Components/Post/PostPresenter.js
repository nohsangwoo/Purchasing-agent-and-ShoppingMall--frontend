// 화면에 뿌려주는 역할
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
// 텍스트area를 감싸면 글이 한줄을 다채웠을때 스크롤이 생기는게아니라
// 창의 height가 자동으로 늘어남(인스타그램처럼)
import FatText from '../FatText';
import Avatar from '../Avatar';
import { HeartFull, HeartEmpty, Comment as CommentIcon } from '../Icons';

const Post = styled.div`
  ${(props) => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
  user-select: none;
  /* 선택되지 않게 만듬 */
  margin-bottom: 25px;
  a {
    color: inherit;
  }
`;

const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 10px;
`;

const Location = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Files = styled.div`
  position: relative;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
`;

const File = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  /* 프롭스 showing 값이 있으면 사진을 보여주고 없으면 보여주지 마라 */
  opacity: ${(props) => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Meta = styled.div`
  padding: 15px;
`;

const Buttons = styled.div`
  ${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: ${(props) => props.theme.lightGreyColor} 1px solid;
`;

// Textarea사용시 스크롤바가 안생기고 창의 크기가 늘어남
const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
  /* 가끔 스크롤바가 생겨서 아예 hidden처리함 */
  overflow: hidden;
`;

const Comments = styled.ul`
  margin-top: 10px;
`;

const Comment = styled.li`
  margin-bottom: 7px;
  span {
    margin-right: 5px;
  }
`;
const Caption = styled.div`
  margin: 10px 0px;
`;

export default ({
  user: { username, avatar },
  location,
  files,
  isLiked,
  likeCount,
  createdAt,
  newComment,
  currentItem,
  toggleLike,
  onKeyPress,
  comments,
  selfComments,
  caption,
}) => (
  <Post>
    <Header>
      <Avatar size="sm" url={avatar} />
      <UserColumn>
        <Link to={`/${username}`}>
          <FatText text={username} />
        </Link>
        <Location>{location}</Location>
      </UserColumn>
    </Header>
    <Files onDoubleClick={toggleLike}>
      {files &&
        files.map((file, index) => (
          // showing부분 index랑 currentItem을 비교해서 true of false를 반환할것임
          // false인경우는 opacity가 0 이라서 안보이게됨
          <File key={file.id} src={file.url} showing={index === currentItem} />
        ))}
    </Files>
    <Meta>
      <Buttons>
        <Button onClick={toggleLike}>
          {isLiked ? <HeartFull /> : <HeartEmpty />}
        </Button>
        <Button>
          <CommentIcon />
        </Button>
      </Buttons>
      <FatText text={likeCount === 1 ? '1 like' : `${likeCount} likes`} />
      <Caption>
        <FatText text={username} /> {caption}
      </Caption>
      {comments && (
        <Comments>
          {comments.map((comment) => (
            <Comment key={comment.id}>
              <FatText text={comment.user.username} />
              {comment.text}
            </Comment>
          ))}
          {/* selfComment는 기존 comment뒤에 내가 달은 댓글을 보여주는기능인데 */}
          {/* 이기능은 db에서 끌어오는게 아니라 내가 지금 입력한 댓글을 client에서 끌어오는 것 */}
          {/* db를 굳이 불러올 필요가 없으니 이런 fake로 만들어줌 */}
          {selfComments.map((comment) => (
            <Comment key={comment.id}>
              <FatText text={comment.user.username} />
              {comment.text}
            </Comment>
          ))}
        </Comments>
      )}
      <Timestamp>{createdAt}</Timestamp>
      <Textarea
        onKeyPress={onKeyPress}
        placeholder={'Add a comment...'}
        value={newComment.value}
        onChange={newComment.onChange}
      />
    </Meta>
  </Post>
);
