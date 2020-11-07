import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.showing ? 1 : 0)};
  border-radius: 3px;
  transition: opacity 0.5s linear;
`;

const File = ({ src, showing }) => {
  return <Container src={src} showing={showing} />;
};

File.propTypes = {
  src: PropTypes.string.isRequired,
  showing: PropTypes.bool.isRequired,
};

export default File;
