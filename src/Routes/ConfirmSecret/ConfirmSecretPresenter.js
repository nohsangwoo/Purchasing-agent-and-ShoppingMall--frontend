import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
// import Input from '../../Components/Input';
import Button from '../../Components/Button';
// import useInput from '../../Hooks/useInput';

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  ${(props) => props.theme.whiteBox}
  border-radius:0px;
  width: 100%;
  max-width: 350px;
`;

// const StateChanger = styled(Box)`
//   text-align: center;
//   padding: 20px 0px;
// `;

// const Link = styled.span`
//   color: ${(props) => props.theme.blueColor};
//   cursor: pointer;
// `;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

export default ({
  // AuthContainer로 부터 받아올 props 정의
  onSubmit,
  isSubmit,
  setIsSubmit,
}) => {
  // const secretInputValue = useInput('');
  // console.log(onSubmit);
  // console.log(secret);

  // console.log(document.getElementById('SubmitBTN'));
  // console.log(document.getElementsByClassName(`txt`).click());
  useEffect(() => {
    if (isSubmit === true) {
      onSubmit();
      return;
    }
    // console.log('asdfasdf');
    // document.getElementById(`SubmitBTN`).click();
  }, [isSubmit, onSubmit]);

  return (
    <Wrapper>
      <Form>
        <>
          <Helmet>
            <title>Confirm Secret | Prismagram</title>
          </Helmet>
          <form onSubmit={onSubmit} id={'SubmitBTN'}>
            {/* <Input placeholder="Paste your secret" required /> */}
            <Button text={'Confirm'} />
          </form>
        </>
      </Form>
    </Wrapper>
  );
};
