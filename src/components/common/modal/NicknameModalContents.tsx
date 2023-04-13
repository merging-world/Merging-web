import styled from '@emotion/styled';
import { debounce } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '../../../atoms/auth';
import { InformationIcon } from 'assets/icons';
import { useDarkMode } from 'hooks/useDarkMode';
import { nicknameCheck, updateNickname } from 'utils/apis';

const NicknameModalContents = () => {
  const { theme, isDarkMode } = useDarkMode();
  const [auth, setAuth] = useRecoilState(authState);
  const [isSuccess, setSuccess] = useState(false);
  const [isAvailable, setAvailable] = useState(true);
  const [isSearching, setSearching] = useState(false);
  const [query, setQuery] = useState('');
  const [nickname, setNickname] = useState('');

  const registerNickname = async () => {
    if (!isAvailable) return;
    const res = await updateNickname(auth.accessToken ?? '', nickname);
    if (res.nickname === nickname.trim()) {
      setSuccess(true);
    }
  };

  const debouncedNicknameCheck = useMemo(
    () =>
      debounce(async query => {
        setQuery(query);
        if (await nicknameCheck(auth.accessToken ?? '', query)) setAvailable(true);
        else setAvailable(false);
        setSearching(false);
      }, 500),
    [query],
  );

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    setAvailable(false);
    setSearching(true);
    if (e.target.value !== '') {
      debouncedNicknameCheck(e.target.value.trim());
    }
  };

  return (
    <NicknameModal theme={theme}>
      <ModalLayout>
        <ModalContent>
          <ContentTitle>
            {isSuccess ? '가입이 완료되었어요' : '머징에서 사용할'}
            <br />
            {isSuccess ? '머징에 오신 것을 환영해요' : '닉네임을 알려주세요'}
          </ContentTitle>
          {!isSuccess && (
            <NicknameInput
              theme={theme}
              placeholder="닉네임을 정확히 적어주세요"
              onChange={handleChange}
              maxLength={10}
            />
          )}
        </ModalContent>
        <ModalContent>
          {nickname != '' && !isAvailable && !isSearching && (
            <ErrorBox>
              <InformationIcon color={theme.colors.ALERT} width={20} height={20} />
              <AlreadyUsedText theme={theme}>이미 사용 중인 닉네임이에요</AlreadyUsedText>
            </ErrorBox>
          )}
          <Button
            theme={theme}
            style={{
              background:
                (nickname != '' && isAvailable) || isSuccess
                  ? theme.colors.PRIMARY
                  : theme.colors.GRAY_2,
            }}
            onClick={() => {
              if (isSuccess) {
                setAuth({
                  ...auth,
                  isValid: true,
                  user: {
                    uuid: auth.user!.uuid,
                    githubName: auth.user!.githubName,
                    nickname: nickname.trim(),
                    intro: auth.user!.intro,
                  },
                });
              } else registerNickname();
            }}
          >
            {isSuccess ? '확인' : '다음으로'}
          </Button>
        </ModalContent>
      </ModalLayout>
    </NicknameModal>
  );
};

const NicknameModal = styled.ul`
  width: 100%;
  max-width: 500px;
  min-height: 400px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.BACKGROUND_SECONDARY};
  margin: 32px;
`;

const ModalLayout = styled.ul`
  height: calc(100% - 64px);
  align-items: start;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ModalContent = styled.li`
  width: 100%;
`;

const ContentTitle = styled.h2`
  font-size: ${props => props.theme.fontSize.FONT_H2};
  line-height: 1.5em;
  font-weight: bold;
  color: ${props => props.theme.colors.TEXT_HIGH};
`;

const Button = styled.button`
  width: 100%;
  height: 52px;
  border-radius: 14px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.colors.BACKGROUND_SECONDARY};
  font-size: ${props => props.theme.fontSize.FONT_BODY1};
  &:hover {
    cursor: pointer;
  }
  gap: 8px;
`;

const NicknameInput = styled.input`
  width: calc(100% - 32px);
  height: 52px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.GRAY_1};
  margin: 32px 0;
  padding: 0 16px;
  font-size: ${props => props.theme.fontSize.FONT_BODY1};
  color: ${props => props.theme.colors.TEXT_MEDIUM};
  outline: none;
  border: none;
`;

const ErrorBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 16px 0;
`;

const AlreadyUsedText = styled.div`
  font-size: ${props => props.theme.fontSize.FONT_BODY1};
  color: ${props => props.theme.colors.TEXT_MEDIUM};
`;

export default NicknameModalContents;
