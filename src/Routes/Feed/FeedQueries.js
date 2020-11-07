import { gql } from 'apollo-boost';

export const FEED_QUERY = gql`
  query seeGoods($num: Int!) {
    seeGoods(num: $num) {
      id
      Title
      Description
      price
      productInfo
      sizeInfo
      searchTags
      searchTagsJP
      searchTagsEng
      color {
        id
        url
        color
      }
      colorAddPrice
      size
      sizeAddPrice
      files {
        id
        url
      }
      tags {
        tagName
        tagNameEng
        tagNameJp
      }
      comments {
        id
        text
        user {
          id
          username
        }
      }
      likeCount
      isLiked
      admin {
        avatar
        username
      }
      createdAt
    }
  }
`;
