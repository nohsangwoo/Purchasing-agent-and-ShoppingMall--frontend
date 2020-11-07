import { gql } from 'apollo-boost';

// 한번에 두개의 쿼리를 합쳐서 실행

export const SEARCH = gql`
  query search($term: String!, $num: Int!) {
    searchGoods(keyword: $term, num: $num) {
      id
      Title
      Description
      price
      productInfo
      sizeInfo
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
        tagNameJp
        tagNameEng
        createdAt
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
