import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { CONFIRM_SECRET, LOCAL_LOG_IN } from './ConfirmSecretQueries';
import { toast } from 'react-toastify';
import ConfirmSecretPresenter from './ConfirmSecretPresenter';
export default withRouter((props) => {
  const {
    history,
    match: {
      params: { loginSecret },
    },
  } = props;

  const [isSubmit, setIsSubmit] = useState(true);

  const Variable = loginSecret.split('=');
  const email = Variable[0];
  let secret = Variable[1];
  //   const RefactoringSercret = loginSecret.split('+');
  secret = secret.replace('+', ' ');

  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      email: email,
      secret: secret,
    },
  });

  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

  const onSubmit = async (e) => {
    // 클릭시 새로고침 안되게preventDefault를 추가
    // e.preventDefault();

    try {
        
      // cinfirmSecret반환값을 token이라 이름붙인 변수를 만들어서 넣어둠
      setIsSubmit(false);
      const {
        data: { confirmSecret: token },
      } = await confirmSecretMutation();
      if (token !== '' && token !== undefined) {
        localLogInMutation({ variables: { token } });
        // e.unbind();
        // 로그인과 동시에 새로고침
        history.push(`/`);
        window.location.reload();
      } else {
        throw Error();
      }
    } catch {
      toast.error('Cant confirm secret,try again');
      setIsSubmit(false);
    }
  };

  return (
    <ConfirmSecretPresenter
      isSubmit={isSubmit}
      setIsSubmit={setIsSubmit}
      email={email}
      secret={secret}
      onSubmit={onSubmit}
    />
  );
});
