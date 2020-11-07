import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useInput from '../../../Hooks/useInput';
import { useMutation } from '@apollo/react-hooks';
import GoodsPresenter from './GoodsPresenter';
import { GOODS_TOGGLE_LIKE, GOODS_ADD_COMMENT } from './GoodsQueries';
import { toast } from 'react-toastify';
import { BoxWrapper } from '../Components/StyledComponents';

const GoodsContainer = ({
  id,
  title,
  Description,
  price,
  tags,
  searchTags,
  searchTagsJP,
  searchTagsEng,
  files,
  likeCount,
  isLiked,
  comments,
  createdAt,
  admin,
  color,
  size,
  productInfo,
  sizeInfo,
  colorAddPrice,
  sizeAddPrice,
}) => {
  const [isLikedS, setIsLiked] = useState(isLiked);
  const [likeCountS, setLikeCount] = useState(likeCount);
  const [currentItem, setCurrentItem] = useState(0);
  const [state, setState] = useState(true);
  const [selfComments, setSelfComments] = useState([]);
  const comment = useInput('');

  const [goodsToggleLikeMutation] = useMutation(GOODS_TOGGLE_LIKE, {
    variables: { goodsId: id },
  });

  const [goodsAddCommentMutation] = useMutation(GOODS_ADD_COMMENT, {
    variables: { goodsId: id, text: comment.value },
  });

  useEffect(() => {
    const totalFiles = files.length;
    if (state !== false) {
      if (currentItem === totalFiles - 1) {
        setTimeout(() => setCurrentItem(0), 3000);
      } else {
        setTimeout(() => setCurrentItem(currentItem + 1), 3000);
      }
    }
  }, [currentItem, files, state]);

  const toggleLike = async () => {
    if (isLikedS === true) {
      setIsLiked(false);
      setLikeCount(likeCountS - 1);
    } else {
      setIsLiked(true);
      setLikeCount(likeCountS + 1);
    }

    try {
      await goodsToggleLikeMutation();
    } catch {
      setIsLiked(!isLikedS);
      setLikeCount(likeCountS);
      toast.error("Can't register Like/UnLike");
    }
  };

  const onKeyPress = async (event) => {
    const { which } = event;
    if (which === 13) {
      event.preventDefault();
      try {
        const {
          data: { goodsAddComment },
        } = await goodsAddCommentMutation();
        setSelfComments([...selfComments, goodsAddComment]);
        comment.setValue('');
      } catch {
        toast.error('cant send comment');
      }
    }
  };

  return (
    <BoxWrapper>
      <GoodsPresenter
        id={id}
        files={files}
        title={title}
        Description={Description}
        price={price}
        likeCount={likeCountS}
        isLiked={isLikedS}
        comments={comments}
        createdAt={createdAt}
        newComment={comment}
        setIsLiked={setIsLiked}
        setLikeCount={setLikeCount}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        toggleLike={toggleLike}
        onKeyPress={onKeyPress}
        selfComments={selfComments}
        tags={tags}
        searchTags={searchTags}
        searchTagsJP={searchTagsJP}
        searchTagsEng={searchTagsEng}
        admin={admin}
        color={color}
        size={size}
        productInfo={productInfo}
        sizeInfo={sizeInfo}
        setState={setState}
        colorAddPrice={colorAddPrice}
        sizeAddPrice={sizeAddPrice}
      />
    </BoxWrapper>
  );
};

GoodsContainer.propTypes = {
  id: PropTypes.string.isRequired,
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
  title: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  admin: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
  }).isRequired,
  price: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  color: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  size: PropTypes.string.isRequired,
  productInfo: PropTypes.string.isRequired,
  sizeInfo: PropTypes.string.isRequired,
  colorAddPrice: PropTypes.string.isRequired,
  sizeAddPrice: PropTypes.string.isRequired,
};

export default GoodsContainer;
