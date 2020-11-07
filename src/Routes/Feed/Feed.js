import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@apollo/react-hooks';
import Loader from '../../Components/Loader';
import { FEED_QUERY } from './FeedQueries';
import Goods from './Goods';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import {
  Wrapper,
  PagenationWrapper,
  Pagenation,
  PagenationItems,
  PagenationBTN,
  PagenationItem,
  PagenationItemPageNumber,
  PagenationItemPageNumberCenter,
  PagenationItemPageDot,
} from './Components/StyledComponents';

export default withRouter((props) => {
  const [skipNum, setSkipNum] = useState(0);

  const ctrlPage = (ctrlValue) => {
    if (ctrlValue === 'prev') {
      if (skipNum <= 0) {
        toast.error('This is the first page');
        return;
      } else {
        setSkipNum(skipNum - 1);
      }
    } else if (ctrlValue === 'next') {
      setSkipNum(skipNum + 1);
    }
  };

  const clickPageNum = (num) => {
    if (num < 0) {
      toast.error('This is the first page');
      return;
    }
    setSkipNum(num);
  };

  const { data, loading } = useQuery(FEED_QUERY, {
    variables: {
      num: skipNum,
    },
  });

  useEffect(() => {
    const setSkipPrev = () => {
      setSkipNum(skipNum - 1);
    };

    if (data?.seeGoods?.length === 0) {
      toast.error('No search results, Return to last Page in 3 seconds');
      setTimeout(setSkipPrev, 3000);
    } else {
    }
  }, [data, loading, skipNum]);

  return (
    <Wrapper>
      <Helmet>
        <title>ffss - Shop</title>
      </Helmet>
      {loading && <Loader />}

      {!loading &&
        data?.seeGoods?.map((goods) => (
          <Goods
            key={goods?.id}
            id={goods?.id}
            user={goods?.user}
            files={goods?.files}
            likeCount={goods?.likeCount}
            isLiked={goods?.isLiked}
            comments={goods?.comments}
            createdAt={goods?.createdAt}
            title={goods?.Title}
            Description={goods?.Description}
            price={goods?.price}
            tags={goods?.tags}
            searchTags={goods?.searchTags}
            searchTagsJP={goods?.searchTagsJP}
            searchTagsEng={goods?.searchTagsEng}
            admin={goods?.admin}
            color={goods?.color}
            size={goods?.size || ''}
            productInfo={goods.productInfo || ''}
            sizeInfo={goods.sizeInfo || ''}
            colorAddPrice={goods.colorAddPrice || ''}
            sizeAddPrice={goods.sizeAddPrice || ''}
          />
        ))}

      {!loading && data?.seeGoods?.length !== 0 && (
        <PagenationWrapper>
          <Pagenation>
            <PagenationItems>
              <PagenationBTN
                onClick={() => {
                  return ctrlPage('prev');
                }}
                variant="contained"
                color="secondary"
              >
                prev
              </PagenationBTN>
            </PagenationItems>
            <PagenationItems>
              {skipNum <= 0 ? (
                <PagenationItem>{skipNum + 1}</PagenationItem>
              ) : (
                <PagenationItem>
                  <PagenationItemPageDot>...</PagenationItemPageDot>
                  <PagenationItemPageNumber
                    onClick={() => {
                      return clickPageNum(skipNum - 1);
                    }}
                  >
                    {skipNum}
                  </PagenationItemPageNumber>
                  <PagenationItemPageNumberCenter
                    onClick={() => {
                      return clickPageNum(skipNum);
                    }}
                  >
                    {skipNum + 1}
                  </PagenationItemPageNumberCenter>
                  <PagenationItemPageNumber
                    onClick={() => {
                      return clickPageNum(skipNum + 1);
                    }}
                  >
                    {skipNum + 2}
                  </PagenationItemPageNumber>
                  <PagenationItemPageDot>...</PagenationItemPageDot>
                </PagenationItem>
              )}
            </PagenationItems>
            <PagenationItems>
              <PagenationBTN
                onClick={() => {
                  return ctrlPage('next');
                }}
                variant="contained"
                color="secondary"
              >
                Next
              </PagenationBTN>
            </PagenationItems>
          </Pagenation>
        </PagenationWrapper>
      )}
    </Wrapper>
  );
});
