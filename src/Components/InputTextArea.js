import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

const Container = styled(TextareaAutosize)`
  width: 100%;
  border: 0;
  border: ${(props) => props.theme.boxBorder};
  border-radius: 20px;
  background-color: ${(props) => props.theme.bgColor};
  font-size: 0.8rem;
  padding: 0.8rem 0.8rem;
  &:focus {
    outline: none;
  }
  overflow: hidden;
`;

const InputTextArea = ({
  placeholder,
  required = true,
  value,
  onChange,
  type = 'text',
  className,
  minRows,
}) => (
  <Container
    className={className}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    type={type}
    minRows={minRows}
  />
);

InputTextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default InputTextArea;
