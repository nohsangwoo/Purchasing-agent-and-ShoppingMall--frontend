// prisma api에있는 db제어문 사용시 불러오는 방법
import { gql } from 'apollo-boost';

// # $email : 클라이언트에서 받아온 email변수
// # email : prisma api에서 받아지는 email변수
// # mutation으로 호출되는 호출명을 정해주고
// # 클라이언트에서 받아온 $email의 type을 정의해준다
// # 그다음 실제 api쪽 requstSecret을 불러온다음 클라이언트의 $email변수와
// # api쪽 email변수를 연결해준다
export const LOG_IN = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;

// gql에서 코드설명
// 쿼리를 불러온다음(필수여부 설정 및 변수 type 설정)

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $firstName: String
    $lastName: String
  ) {
    createAccount(
      username: $username
      email: $email
      firstName: $firstName
      lastName: $lastName
    )
  }
`;

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
