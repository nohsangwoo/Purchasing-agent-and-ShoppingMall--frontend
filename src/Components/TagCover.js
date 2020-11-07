import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const SearchTagCover = styled.div`
  font-size: 16px;
  color: ${(props) => (props.RN < 70 ? '#2d50ff' : '#0faac8')};
  margin: 0 auto;
  padding: 4px 7px 4px 7px;
  margin: 2px 5px 2px 5px;
  background-color: ${(props) => (props.RN < 70 ? '#eff1ff' : '#e7f6f9')};
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    background-color: ${(props) => (props.RN < 70 ? '#d5dcff' : '#cfeef4')};
  }
  @media (max-width: 980px) {
    font-size: 16px;
    margin-left: 0.3rem;
    margin-bottom: 0.3rem;
  }
`;

export default withRouter((props) => {
  const { tag, searchTagNeme, history, setSearchState } = props;

  const activateSearch = (keyword) => {
    history.push(`/search?term=${encodeURI(keyword)}`);
  };
  const randomNumber = Math.ceil(Math.random() * 100);

  return (
    <SearchTagCover
      RN={randomNumber}
      onClick={() => {
        setSearchState && setSearchState(false);
        return activateSearch(searchTagNeme);
      }}
    >{`#${tag}`}</SearchTagCover>
  );
});
