// search에서 user검색시 나타나는 user목록의 css
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import FatText from './FatText';
import { Link } from 'react-router-dom';
import FollowButton from './FollowButton';

const Card = styled.div`
  ${(props) => props.theme.whiteBox}
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const EAvatar = styled(Avatar)`
  margin-bottom: 15px;
`;

const ELink = styled(Link)`
  color: inherit;
  margin-bottom: 10px;
`;

// 검색결과를 보여주는데, 팔로우 했냐 안했냐에따라 다른작동
const UserCard = ({ id, username, isFollowing, url, isSelf }) => (
  <Card>
    <EAvatar url={url} size={'md'} />
    <ELink to={`/${username}`}>
      <FatText text={username} />
    </ELink>
    {/* 팔로우 언팔로우버튼은 나 자신을 검색했을때(isSelf===false)는 안나옴 */}
    {/* 쿼리실행후 결과값을 불러옴 */}
    {!isSelf && <FollowButton id={id} isFollowing={isFollowing} />}
  </Card>
);

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  isSelf: PropTypes.bool.isRequired,
};

export default UserCard;
