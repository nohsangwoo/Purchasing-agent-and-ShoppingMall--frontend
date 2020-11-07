// 로딩중일때 나타나는 효과
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FFSSlogo } from './Icons';

// 투명도를 단계별로 조절함
const loadingAnimation = keyframes`
    0%{
        opacity:0
    }
    50%{
        opacity:1
    }
    100%{
        opacity:0;
    }
`;

// 로딩componenet가 화면의 어디에 표시될지랑
// 몇초동안 어떤식으로 표현될지 설정
// animation은 loadingAnimation 으로 지정하고
// 1초동안모든 애니메이션이 동작하게하고 그것을 linear하게 무한반복
const Loader = styled.div`
  position: fixed;
  top: 40%;
  left: 47%;
  animation: ${loadingAnimation} 1s linear infinite;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  @media (max-width: 460px) {
    width: 100%;
    left: 35%;
  }
`;

export default () => (
  <Loader>
    <FFSSlogo size={7} />
  </Loader>
);
