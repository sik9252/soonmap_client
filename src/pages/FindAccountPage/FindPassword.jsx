import React, { useState, useMemo, useEffect } from 'react';
import { SquareInput } from '../../components/Input';
import { Button } from '../../components/Button';
import { InputBox, Domain, TimerSection } from './style';
import Timer from '../../utils/timer';

function FindPassword() {
  const [isEmailValidate, setIsEmailValidate] = useState(false);
  const [isCertificated, setIsCertificated] = useState(false);

  const [isTimeUp, setTimeUp] = useState(false);

  const timerComponent = useMemo(() => {
    return <Timer isStart={isEmailValidate} setTimeUp={setTimeUp} />;
  }, [isEmailValidate]);

  useEffect(() => {
    if (isTimeUp) {
      alert('인증번호가 만료되었습니다. 다시 받아주세요.');
      setIsEmailValidate(false);
    }

    setTimeout(() => {
      setTimeUp(false);
    }, 500);
  }, [isTimeUp]);

  return (
    <>
      <InputBox>
        <div>
          <SquareInput placeholder="가입하신 이메일을 입력해주세요. ex) abcd123" />
          <Domain>@sch.ac.kr</Domain>
        </div>
        <SquareInput placeholder="가입하신 아이디를 입력해주세요." />
        <Button height={48} bgColor={'#4B7CC4'}>
          인증번호 받기
        </Button>
      </InputBox>
      {isEmailValidate ? (
        <InputBox>
          <div>
            <SquareInput placeholder="인증번호를 입력해주세요." />
            {isCertificated ? <TimerSection>인증완료</TimerSection> : <TimerSection>{timerComponent}</TimerSection>}
          </div>
          <Button height={48} bgColor={'#4B7CC4'}>
            인증하기
          </Button>
        </InputBox>
      ) : (
        ''
      )}
      {isCertificated ? (
        <InputBox>
          <SquareInput placeholder="새로운 비밀번호를 입력해주세요." />
          <SquareInput placeholder="새로운 비밀번호를 다시 입력해주세요." />
          <Button height={48}>비밀번호 변경하기</Button>
        </InputBox>
      ) : (
        ''
      )}
    </>
  );
}

export default FindPassword;
