import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.input`
  border: ${(props) => props.theme.boxBorder};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.bgColor};
  height: 3rem;
  font-size: 3rem;
  padding: 0px 15px;
`;

const Input = ({
  // 넘겨받는 props 설정
  placeholder,
  required = true,
  value,
  onChange,
  type = 'text',
  className,
}) => {
  return (
    <Container
      className={className}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
};

// 넘겨받는 props에대한 타입및 필수항목인지 설정
Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Input;
