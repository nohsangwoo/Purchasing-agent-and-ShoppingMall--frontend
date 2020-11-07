
import { gql } from 'apollo-boost';



// 로그인 상태일때를 유지해주는 쿼리
// 토큰에 의한 세션관리
export const CONFIRM_SECRET = gql`
  mutation confirmSecret($secret: String!, $email: String!) {
    confirmSecret(secret: $secret, email: $email)
  }
`;

// LocalState.js에서 만들어놓은 client쪽 graphql문법
// 그래서 @client라는건 client 변수에 저장하라는것
// prisma api server가 아님
export const LOCAL_LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;
