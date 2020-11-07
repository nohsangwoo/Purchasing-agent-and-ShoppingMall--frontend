// Auth와관련된 Hooks query state를 관리함
// Router.js에서 이 코드를 불러옴
import React, { useState } from 'react';
import AuthPresenter from './AuthPresenter';
import useInput from '../../Hooks/useInput';
import { useMutation } from '@apollo/react-hooks';
import {
  LOG_IN,
  CREATE_ACCOUNT,
  CONFIRM_SECRET,
  LOCAL_LOG_IN,
} from './AuthQueries';

import { toast } from 'react-toastify';

export default () => {
  // action 의 기본값은 logIn
  const [action, setAction] = useState('logIn');
  const username = useInput('');
  const firstName = useInput('');
  const lastName = useInput('');
  const email = useInput('');
  const secret = useInput('');

  // mutation에 사용되는 인자를 여기서 연결해줌
  const [requestSecretMutation] = useMutation(LOG_IN, {
    variables: { email: email.value },
  });
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value,
    },
  });

  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      email: email.value,
      secret: secret.value,
    },
  });

  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

  const onSubmit = async (e) => {
    // 클릭시 새로고침 안되게preventDefault를 추가
    e.preventDefault();
    if (action === 'logIn') {
      if (email.value !== '') {
        try {
          const {
            data: { requestSecret },
          } = await requestSecretMutation();
          if (!requestSecret) {
            toast.error('You dont have an account yet, create one');
            setTimeout(() => setAction('signUp'), 3000);
          } else {
            toast.success('Check your inbox for your login secret');
            setAction('confirm');
          }
        } catch (e) {
          // console.log(e);
          toast.error("Can't request secret, try again");
        }
      } else {
        toast.error('Email is required');
      }
    } else if (action === 'signUp') {
      if (
        email.value !== '' &&
        username.value !== '' &&
        firstName.value !== '' &&
        lastName.value !== ''
      ) {
        try {
          const {
            data: { createAccount },
          } = await createAccountMutation();
          if (!createAccount) {
            toast.error("Can't create account");
          } else {
            toast.success('Account created! Log In now');
            setTimeout(() => setAction('logIn'), 3000);
          }
        } catch (e) {
          // prisma api server로 부터 오는 에러
          toast.error(e.message);
        }
      } else {
        toast.error('All field are required');
      }
    } else if (action === 'confirm') {
      if (secret.value !== '') {
        try {
          // cinfirmSecret반환값을 token이라 이름붙인 변수를 만들어서 넣어둠
          const {
            data: { confirmSecret: token },
          } = await confirmSecretMutation();
          if (token !== '' && token !== undefined) {
            localLogInMutation({ variables: { token } });
            // e.unbind();
            // 로그인과 동시에 새로고침
            window.location.reload();
          } else {
            throw Error();
          }
        } catch {
          toast.error('Cant confirm secret,check again');
        }
      }
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      secret={secret}
      onSubmit={onSubmit}
    />
  );
};
