import { gql } from 'apollo-boost';

// 좋아요
export const TOGGLE_LIKE = gql`
  mutation toggelLike($postId: String!) {
    toggleLike(postId: $postId)
  }
`;

export const GOODS_TOGGLE_LIKE = gql`
  mutation goodsToggleLike($goodsId: String!) {
    goodsToggleLike(goodsId: $goodsId)
  }
`;

// comment작성 반환값은 id text, user의 username이다
export const ADD_COMMENT = gql`
  mutation addComment($postId: String!, $text: String!) {
    addComment(postId: $postId, text: $text) {
      id
      text
      user {
        username
      }
    }
  }
`;

export const GOODS_ADD_COMMENT = gql`
  mutation goodsAddComment($goodsId: String!, $text: String!) {
    goodsAddComment(goodsId: $goodsId, text: $text) {
      id
      text
      user {
        username
      }
    }
  }
`;

export const CREATE_CART = gql`
  mutation createCart(
    $goodsId: String!
    $color: String!
    $size: String!
    $quantity: String!
  ) {
    createCart(
      goodsId: $goodsId
      color: $color
      size: $size
      quantity: $quantity
    )
  }
`;

// mutation {
//   createCart(
//     goodsId: "ckb6qhniyopd30a42h9gru7i0"
//     color: "red"
//     size: "XL"
//     quantity:4
//   )
// }
