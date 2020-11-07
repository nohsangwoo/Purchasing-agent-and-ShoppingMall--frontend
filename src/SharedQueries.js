import { gql } from 'apollo-boost';

// me를 사용할때 반환값은 username
export const ME = gql`
  {
    me {
      username
    }
  }
`;
