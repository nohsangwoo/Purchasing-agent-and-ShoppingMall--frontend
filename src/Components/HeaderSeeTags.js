import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled, { keyframes } from 'styled-components';
import { withRouter } from 'react-router-dom';
import TagCover from './TagCover';

const fadeIn = keyframes`
 from{
   opacity:0;
 }
 to{
  
  opacity:1;
 }
`;

const TagWrapper = styled.div`
  animation: ${fadeIn} 0.3s ease-in-out forwards;
  max-width: 40rem;
  height: 100%;
  background-color: #222222;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const SEE_TAGS = gql`
  query seeTags($num: Int!) {
    seeTags(num: $num) {
      id
      tagName
      tagNameJp
      tagNameEng
      createdAt
    }
  }
`;

export default withRouter((props) => {
  const skipNum = 0;

  const { lang, setSearchState } = props;

  const { data, loading } = useQuery(SEE_TAGS, {
    variables: {
      num: skipNum,
    },
  });

  return (
    <>
      {!loading && (
        <TagWrapper>
          {data?.seeTags.map((Tag, index) => {
            return (
              <TagCover
                key={index}
                searchTagNeme={Tag.tagName}
                tag={lang === 'jp' ? Tag.tagNameJp : Tag.tagNameEng}
                setSearchState={setSearchState}
              ></TagCover>
            );
          })}
        </TagWrapper>
      )}
    </>
  );
});
