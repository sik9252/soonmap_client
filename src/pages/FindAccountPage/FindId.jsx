import React, { useState, useEffect, useMemo } from 'react';
import { SquareInput } from '../../components/Input';
import { Button } from '../../components/Button';
import { InputBox, Result, Domain, TimerSection } from './style';
import Timer from '../../utils/timer';
import toast from 'react-hot-toast';

function FindId() {
  const [isEmailValidate, setIsEmailValidate] = useState(false);
  const [isCertificated, setIsCertificated] = useState(false);

  const [isTimeUp, setTimeUp] = useState(false);

  const timerComponent = useMemo(() => {
    return <Timer isStart={isEmailValidate} setTimeUp={setTimeUp} />;
  }, [isEmailValidate]);

  useEffect(() => {
    if (isTimeUp) {
      toast.error('인증번호가 만료되었습니다. 다시 받아주세요.');
      setIsEmailValidate(false);
    }

    setTimeout(() => {
      setTimeUp(false);
    }, 500);
  }, [isTimeUp]);

  return (
    <>
      {isCertificated ? (
        <Result>
          <div>아이디:</div>
          <div>abcd1234</div>
        </Result>
      ) : (
        <>
          <InputBox>
            <div>
              <SquareInput placeholder="가입하신 이메일을 입력해주세요. ex) abcd123" />
              <Domain>@sch.ac.kr</Domain>
            </div>
            <Button height={48} bgColor={'#4B7CC4'}>
              인증번호 받기
            </Button>
          </InputBox>
          {isEmailValidate ? (
            <InputBox>
              <div>
                <SquareInput placeholder="인증번호를 입력해주세요." />
                <TimerSection>{timerComponent}</TimerSection>
              </div>
              <Button height={48}>인증하기</Button>
            </InputBox>
          ) : (
            ''
          )}
        </>
      )}
    </>
  );
}

export default FindId;
