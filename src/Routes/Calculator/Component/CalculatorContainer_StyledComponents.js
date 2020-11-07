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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  padding-top: 60px;
  padding-left: 20px;
  padding-right: 20px;
  animation: ${fadeIn} 0.25s ease-in-out forwards;
  background-color: #222222;
  @media (max-width: 500px) {
    min-height: 0;
  }
`;
export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  padding-bottom: 80px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: white;
  @media (max-width: 500px) {
    margin-top: 50px;
  }
  border-bottom: 1px solid #393e41;
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

export const SpanStyled = styled.span`
  text-align: center;
`;

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

export const InputValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InputValueField = styled.div`
  margin: 0 auto;
  flex: 1;
  padding: 20px;

  margin-bottom: 40px;
`;

export const InputValueText = styled(Input)`
  text-align: center;
  font-size: 16px;
  width: 100%;
`;

export const InputValueLabel = styled.label`
  font-size: 16px;
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

export const BoxPriceTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  width: 100%;
  animation: ${fadeIn} 0.25s ease-in-out forwards;
`;

export const AroundLinkStyled = styled.div`
  font-size: 1rem;
`;
export const BoxWeightTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  width: 100%;
  animation: ${fadeIn} 0.25s ease-in-out forwards;
`;
export const TableStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: #222222;
  color: white;
  width: 80%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 20px;
  border: 1px solid white;
`;

export const TableRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const TableRowItem = styled.div`
  flex: 1;
`;
export const PaypalFeeInfoText = styled.div`
  flex: 1;
  font-size: 12px;
  margin-bottom: 20px;
`;

export const StrongStyled = styled.div`
  font-weight: 500;
`;

export const TableTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  font-size: 64px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 100%;

  @media (max-width: 500px) {
    font-size: 20px;
    padding-top: 50px;
  }
`;

export const ShippingTableTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  font-size: 64px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 100%;

  @media (max-width: 500px) {
    font-size: 20px;
    padding-top: 50px;
  }
`;
