import { useState } from 'react';

export default (defaultValue) => {
  // 기본값은 호출시 넘겨받은 값으로 기본값을 지정
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    //   onChange로 넘겨받은 e args에서 target안의 value를 뽑아온다
    const {
      target: { value },
    } = e;
    // 뽑아온 value를 useState의 value에 넣어줌
    setValue(value);
  };
  //   onChange함수와 value값을 반환
  return { value, onChange, setValue };
};
