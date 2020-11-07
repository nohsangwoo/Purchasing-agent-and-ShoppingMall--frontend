import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
 from{
   opacity:0;
 }
 to{
  
  opacity:1;
 }
`;

export const DivStyled = styled.div`
  animation: ${fadeIn} 0.25s ease-in-out forwards;
`;

export const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 12px;
  font-size: 100;
  @media (max-width: 500px) {
    font-size: 9px;
  }
`;

export const ShippingNumber = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-size: 100;
  padding-top: 5px;
  padding-right: 7px;
  padding-bottom: 5px;
  padding-left: 7px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    background-color: #393e41;
  }
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
`;

export const BoxShopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 80px;
  border-radius: 20px;
  padding: 5px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: white;
  cursor: pointer;
  border: ${(props) =>
    props.waiting === true
      ? '1px solid #e74c3c'
      : props.pending === true
      ? '1px solid #1abc9c'
      : '1px solid #2980b9'};
  @media (max-width: 500px) {
    margin-top: 50px;
  }
  &:hover {
    color: ${(props) =>
      props.waiting === true
        ? '#e74c3c'
        : props.pending === true
        ? '#1abc9c'
        : '#2980b9'};
  }
`;

export const MenuItemTitleWrapper = styled.span`
  margin: 0 auto;
  margin-right: 1rem;
  margin-left: 1rem;
  font-size: 1rem;
  min-width: 8rem;
`;

export const MenuItemWrapper = styled.div`
  margin-top: 0.3rem;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
`;

export const BoxTitle = styled.div`
  width: 100%;
  font-size: 1.3rem;
  font-weight: 800;
  padding: 1.5rem;
  margin-bottom: 2rem;
  background: #eaceae;
  border-radius: 0.4rem;
  @media (max-width: 980px) {
    font-size: 0.8rem;
  }
`;

export const OrderImageWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const OrderImage = styled.img`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  @media (max-width: 500px) {
    font-size: 12px;
    width: 40px;
    height: 40px;
  }
`;

export const ShopImageWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ShopImage = styled.img`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  @media (max-width: 500px) {
    font-size: 12px;
    width: 40px;
    height: 40px;
  }
`;

export const OrderTitle = styled.div`
  flex: 9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const ShopTitle = styled.div`
  flex: 9;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
  width: 100%;
  font-size: 16px;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const BoxContentText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  margin-bottom: 2rem;
  background: #f2efe4;
  padding: 1rem;
  border-radius: 0.4rem;
  min-height: 10rem;
  align-items: center;
  width: 100%;
`;

export const BoxState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 20px;
  width: 100%;
`;

export const BoxIMGWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 2rem;
  background: #f2efe4;
  padding: 1rem;
  border-radius: 0.4rem;
  min-height: 5rem;
  width: 100%;
  max-width: 10rem;
`;

export const BoxImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const BoxShopItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const BoxOrderItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  font-size: 20px;
`;

export const BoxShopItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 5px;
`;

export const BoxShopItemTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 1rem;
  padding: 0.5rem;
  font-weight: 800;
  width: 100%;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const PaymentBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: ${(props) =>
    props.waiting === true
      ? '1px solid #e74c3c'
      : props.completed === true
      ? '1px solid #2980b9'
      : '1px solid #1abc9c'};
  color: white;
  border-radius: 20px;
  margin-left: 20px;
  margin-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    background-color: ${(props) =>
      props.waiting === true
        ? '#e74c3c'
        : props.completed === true
        ? '#2980b9'
        : '#1abc9c'};
  }
  @media (max-width: 500px) {
    margin-left: 3px;
    margin-right: 3px;
  }
`;

export const PaymentBoxText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  font-size: 16px;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const BoxTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 0.4rem;
  background: #eaceae;
  font-weight: 500;
  color: #81665c;
  border: 5px solid #c8a88c;
`;

export const TableTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const TableTitleItem = styled.div`
  flex: ${(props) => props.flexIndex || 1};
  text-align: center;
`;

export const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const TableRowItem = styled.div`
  flex: ${(props) => props.flexIndex || 1};
  text-align: center;
  border: 1px solid #c8a88c;
`;

export const BoxEmptyWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const BoxBTNWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #393e41;
  &:hover {
    background-color: #393e41;
  }
  cursor: pointer;
`;

export const BoxBTN = styled.div`
  color: white;
`;

export const StrongStyled = styled.strong``;

export const BRStyled = styled.br``;

export const HRStyled = styled.hr``;

export const ShopObjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const ShopObjectPaypalPrice = styled.div`
  width: 5rem;
  height: auto;
  white-space: nowrap;
`;
