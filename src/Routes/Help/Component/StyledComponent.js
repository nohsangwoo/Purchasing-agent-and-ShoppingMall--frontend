import styled, { keyframes } from 'styled-components';

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

export const AgnecyWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  animation: ${fadeIn} 0.25s ease-in-out forwards;
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

export const BoxTitle = styled.div`
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

export const BoxContentText = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 16px;
  padding: 1rem;
`;

export const BoxTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  color: white;
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid white;
`;

export const TableTitle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const TableTitleItem = styled.div`
  flex: ${(props) => props.flexIndex || 1};
  text-align: center;
  padding: 10px 3px;
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
  flex: ${(props) => props.flexIndex || 1};
  text-align: center;
`;

export const BoxEmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  width: 50%;
  min-height: 50px;
  border-radius: 20px;
  border: 1px solid #393e41;
  &:hover {
    background-color: #393e41;
  }

  cursor: pointer;

  @media (max-width: 500px) {
    margin-top: 50px;
    width: 100%;
  }
`;

export const BoxBTNWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #0c90ad;
  min-height: 4rem;
  width: 100%;

  @media (max-width: 1500px) {
    width: 100%;
  }
`;

export const BoxBTN = styled.div``;

export const BRStyled = styled.br``;

export const BoxTableDescription = styled.div`
  display: flex;
  align-items: center;
`;
export const DivStyled = styled.div`
  animation: ${fadeIn} 0.25s ease-in-out forwards;
`;

export const HRStyled = styled.hr``;

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
export const StrongStyled = styled.strong`
  font-weight: 500;
  color: white;
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

export const ShippingWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  animation: ${fadeIn} 0.25s ease-in-out forwards;
`;
export const PayInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  animation: ${fadeIn} 0.25s ease-in-out forwards;
`;

export const PagenationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const PagenationItems = styled.div`
  display: flex;
  justify-content: center;
  margin: auto auto;
  text-align: center;
`;

export const PagenationBTN = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 3rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 10rem;
  border-radius: 4px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media (max-width: 1030px) {
    width: 4rem;
  }
`;

export const PagenationItem = styled.div`
  display: flex;
  justify-content: center;
  margin: auto auto;
`;

export const PagenationItemPageNumber = styled.div`
  text-align: center;
  padding: 1rem;
  cursor: pointer;
  @media only screen and (max-width: 500px) {
    padding: 0.5rem;
  }
`;

export const PagenationItemPageNumberCenter = styled.div`
  cursor: pointer;
  text-align: center;
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 16px;
  font-weight: 800;
  color: blue;
  @media only screen and (max-width: 768px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const PagenationItemPageDot = styled.div`
  text-align: center;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const ShopContents = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.whiteBox};
  width: 100%;
  user-select: none;
  border-radius: 0.3rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-bottom: 25px;
  a {
    color: inherit;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;

export const UserColumn = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const FilesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Files = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  position: relative;
  padding-bottom: 50%;
  flex-shrink: 0;
  @media (max-width: 500px) {
    padding-left: 0;

    width: 100%;
    padding-bottom: 100%;
  }
`;

export const CarouselControlBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 500px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
export const CarouselCountBox = styled.div``;

export const ButtonIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 3rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 20%;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media (max-width: 500px) {
    width: 30%;
  }
`;

export const Meta = styled.div`
  padding: 20px;
  padding-top: 10px;
  @media (max-width: 500px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Buttons = styled.div`
  ${ButtonIcon} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;

export const BoxDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

export const DetailsDESC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #7f8c8d;
`;

export const InfoDESC = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  justify-content: space-around;
  color: #7f8c8d;
`;

export const SelectOptionBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  overflow: hidden;
`;

export const BoxPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 20px;
  font-weight: 800;
`;

export const SelectOptionBoxItemWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const SelectOptionBoxItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-around;
`;

export const FirstOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FirstOPTIMG = styled.img`
  flex: 1;
  width: 70%;
  border-radius: 3px;
  display: inline-block;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  cursor: pointer;
`;

export const Addprice = styled.div`
  font-size: 16px;
  color: #7f8c8d;
`;

export const SecondOPTIMG = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  width: 70%;
`;

export const CheckSelectedOPT = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 14px;
  margin-top: 10px;
  color: ${(props) => (!props.check ? '#ff7675' : 'black')};
`;

export const ShowOptionSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  animation: ${fadeIn} 0.25s ease-in-out forwards;
`;

export const ShowOptionRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const ShowOptionTitle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  font-size: 16px;
  padding-top: 7px;
  padding-left: 7px;
  margin-bottom: 10px;
  height: 100%;
`;

export const ShowOptionItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  height: 100%;
`;

export const CountNumWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

export const SizeBTNWrapper = styled.div`
  flex: 1;
  padding: 0.5rem;
  width: 90%;
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  cursor: pointer;
  @media (max-width: 980px) {
    display: ${(props) => (props.flexIndex === 1 ? 'none' : 'show')};
    width: 90%;
    flex: 1;
  }
`;

export const SelectOption = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SelectOptionItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
`;

export const WrapCoutBTN = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CountButtons = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  cursor: pointer;
  min-height: 35px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const EmptyCountDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  cursor: pointer;
  min-height: 20px;
`;

export const WrapDELdBTN = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const DELdBTN = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 65px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media (max-width: 980px) {
    width: 40%;
    height: 40px;
  }
  cursor: pointer;
`;

export const DividerLine = styled.div`
  height: 1.5px;
  width: 100%;
  background-color: #b2bec3;
  cursor: pointer;
`;

export const TotalStyled = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 800;
`;

export const SeeTotal = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  min-height: 3rem;
`;

export const SeeTotalItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  cursor: pointer;
`;

export const Timestamp = styled.span`
  font-weight: 400;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin: 12px 0px;
  border-bottom: ${(props) => props.theme.lightGreyColor} 1px solid;
`;
