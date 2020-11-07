import styled, { keyframes } from 'styled-components';
import Input from '../../../Components/Input';

const fadeIn = keyframes`
 from{
   opacity:0;
 }
 to{
  
  opacity:1;
 }
`;
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

export const Blink = styled.div`
  animation: ${loadingAnimation} 1s linear infinite;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 60px;
  padding-left: 20px;
  padding-right: 20px;
  animation: ${fadeIn} 0.25s ease-in-out forwards;
  background-color: #222222;
  min-height: 100vh;
  @media (max-width: 500px) {
    min-height: 0;
  }
`;

export const SubmitBTNWrapper = styled.div`
  position: fixed;
  left: 4rem;
  bottom: 7rem;
  z-index: 20;
  margin: 0 auto;
  background: white;
  border-radius: 3px;
  display: inline-block;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media (max-width: 1500px) {
    left: 2rem;
    bottom: 5rem;
  }
  animation: ${loadingAnimation} 1s linear infinite;
`;

export const SubmitBTNText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px;
  font-size: 40px;
  cursor: pointer;
  width: 100%;
  font-weight: 800;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  @media (max-width: 1500px) {
    padding: 1.3rem;
    font-size: 16px;
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 80px;
  padding-bottom: 80px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: white;

  @media (max-width: 500px) {
    margin-top: 50px;
  }
  border-bottom: 1px solid #393e41;
`;

export const SelectService = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const DropDownStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const DropDownTitleWrapper = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 7px 20px;
  text-align: center;
  background-color: white;
  border-radius: 20px;
`;

export const DropDownListText = styled.span``;
export const DropDownIconWrapper = styled.span``;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 54px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 100%;
  line-height: 90%;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const CountryTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 64px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 100%;
  line-height: 90%;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
export const ArountCountryName = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-weight: 300;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  @media (max-width: 500px) {
    margin-top: 8px;
    justify-content: center;
  }
`;

export const ArountCountryNameInText = styled.div`
  font-size: 16px;
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

export const BoxFormDiv = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  width: 100%;
  @media (max-width: 500px) {
    margin-top: 30px;
  }
`;

export const BoxFormDivLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 100%;
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

export const InputAroundStyled = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  width: 80%;
`;
export const InputStyled = styled(Input)`
  margin: 0 auto;
  width: 100%;
`;

export const FormStyled = styled.form`
  width: 100%;
`;
export const OptionBlock = styled.div``;
export const NoneArea = styled.div`
  display: none;
`;
export const CountBTNWarpper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  width: 100%;
  @media (max-width: 500px) {
    margin-top: 50px;
  }
`;

export const BTNWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 30px;
  padding: 20px 20px;
  height: 100%;
  background: #222222;
  border-radius: 40px;
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const AlignDiv = styled.div`
  text-align: center;
  padding-top: 30px;
  font-size: 20px;
  font-weight: 800;
  @media (max-width: 500px) {
    margin-top: 10px;
  }
`;
