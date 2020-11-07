import styled, { keyframes } from 'styled-components';

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

export const DivStyled = styled.div`
  animation: ${fadeIn} 0.25s ease-in-out forwards;
`;

export const HeightCenter = styled.div`
  display: flex;
  align-items: center;
  min-height: 10rem;
  animation: ${fadeIn} 0.25s ease-in-out forwards;
`;

export const HeightCenterTwo = styled.div`
  display: flex;
  align-items: center;
  min-height: 10rem;
  animation: ${fadeIn} 0.25s ease-in-out forwards;
`;

export const BoxTableDescription = styled.div`
  display: flex;
  align-items: center;
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

export const BTNWrapper = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1.5rem;
  background: #fff;
  border-radius: 3px;
  display: inline-block;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media (max-width: 1500px) {
    padding: 0.3rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

export const EmptyDiv = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  width: 100%;
  color: white;
`;

export const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  align-items: center;
  margin: 1.5rem;
  border-top: 1px solid #393e41;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 5rem;
`;

export const PurchaseButton = styled.div`
  display: flex;
  width: 10rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
`;

export const EmptyContents = styled.div`
  font-size: 20px;
  font-weight: 600;
  position: fixed;
  top: 50%;
  animation: ${loadingAnimation} 1s linear infinite;
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 80px;
  padding: 20px;
  border-radius: 20px;
  padding-top: 10px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: white;
  @media (max-width: 500px) {
    margin-top: 50px;
  }
  border: 1px solid white;
  color: white;
`;

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const BoxTitleTextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
  font-size: 24px;
  font-weight: 800;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  @media (max-width: 980px) {
    font-size: 20px;
  }
`;

export const BoxTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 16px;
  margin-top: 10px;
  color: white;
`;

export const TableTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
`;

export const TableTitleItem = styled.div`
  flex: 1;
  font-size: 16px;
  text-align: center;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  @media (max-width: 730px) {
    display: ${(props) => (props.OPT ? 'none' : 'show')};
  }
`;

export const TableRow = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const TableRowItem = styled.div`
  flex: ${(props) => props.flexIndex || 1};
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 730px) {
    display: ${(props) => (props.OPT ? 'none' : 'show')};
  }
  border-bottom: ${(props) =>
    props.flexIndex === 8 ? '1px solid #393e41' : ''};
`;

export const BoxTotalPriceWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-weight: 500;
`;

export const BoxTitleDelWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  margin-top: 20px;
`;

export const DeleteAllButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  height: 3rem;
  padding: 0.4rem;
  border-radius: 20px;
  border: 1px solid #393e41;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media (max-width: 350px) {
    font-size: 12px;
  }
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

export const SpanStyled = styled.span`
  text-align: center;
`;
