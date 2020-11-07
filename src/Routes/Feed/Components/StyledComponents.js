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
  padding-top: 60px;
  padding-left: 10px;
  padding-right: 10px;
  animation: ${fadeIn} 0.25s ease-in-out forwards;
  background-color: #222222;
  min-height: 100vh;
  @media (max-width: 500px) {
    min-height: 0;
  }
`;
export const PagenationWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding-left: 20px;
  padding-right: 20px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: white;
`;

export const Pagenation = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 80px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  @media (max-width: 1030px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
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

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const CollapseBox = styled.span`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ShopSummaryContents = styled.div`
  display: ${(props) => (props.collapseState ? 'none' : 'flex')};
  flex-direction: row;
  background-color: #222222;
  color: #fff;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

export const SummaryFilesWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SummaryFiles = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  padding-bottom: 90%;
  flex-shrink: 0;
`;

export const SummaryTitle = styled.div`
  flex: 8;
  font-size: 14px;
  font-weight: 500;
  padding-left: 5px;
  padding-right: 5px;
`;

export const ArrowDownWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

export const ArrowDown = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 50%;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  cursor: pointer;
`;

export const ShopContents = styled.div`
  display: ${(props) => (props.collapseState ? 'flex' : 'none')};
  flex-direction: column;
  background-color: #222222;
  width: 100%;
  user-select: none;
  border-radius: 0.3rem;

  a {
    color: inherit;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const UserColumnItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const ArrowUpWrapper = styled.div`
  flex: 8;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ArrowUp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 50%;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  cursor: pointer;
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const FilesTWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  width: 100%;
  @media (max-width: 500px) {
    margin-top: 50px;
  }
`;

export const FilesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Files = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  padding-bottom: 100%;
  flex-shrink: 0;
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

export const BoxTitle = styled.div`
  font-size: 16px;
  font-weight: 800;
  margin-top: 80px;
  width: 100%;
  color: #fff;
  @media (max-width: 500px) {
    margin-top: 50px;
  }
`;

export const BoxDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  font-size: 14px;
  color: #7f8c8d;
  line-height: 20px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailsDESC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const InfoDESC = styled.div`
  display: flex;
  margin-top: 5px;
  flex-direction: column;
  justify-content: space-around;
`;

export const SelectOptionBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 80px;
  overflow: hidden;
  @media (max-width: 500px) {
    margin-top: 50px;
  }
`;

export const BoxPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 20px;
  font-weight: 800;
`;

export const SelectOptionBoxItemWrapper = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    margin-top: 50px;
  }
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
  max-width: 300px;
  width: 70%;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  cursor: pointer;
  @media (max-width: 500px) {
    width: 70%;
  }
`;

export const Addprice = styled.div`
  flex: 1;
  font-size: 10px;
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
  margin-top: 5px;
  margin-bottom: 80px;
  color: ${(props) => (!props.check ? '#ff7675' : 'black')};
  @media (max-width: 500px) {
    margin-bottom: 50px;
  }
`;

export const ShowOptionSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.5rem;
  width: 90%;
  background: #fff;
  min-height: 50px;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  cursor: pointer;
`;

export const SizeBTNText = styled.div``;

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
  margin-top: 80px;
  font-size: 18px;
  font-weight: 800;
  @media (max-width: 500px) {
    margin-top: 50px;
  }
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
  border-bottom: 1px solid #393e41;
`;
