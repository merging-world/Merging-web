import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '../../atoms/auth';
import Card from 'components/layouts/Card';
import { useDarkMode } from 'hooks/useDarkMode';
import { ISeason, IUserTree, stepName } from 'types/Tree';
import { getCurrentSeason, getMyCurrentTree } from 'utils/apis';

export interface ITreeCardData {
  isLoading: boolean;
  userTree: IUserTree | null;
  season: ISeason | null;
}

const TreeCard = () => {
  const { theme, isDarkMode } = useDarkMode();
  const [auth, setAuth] = useRecoilState(authState);
  const [value, setValue] = useState<ITreeCardData>({
    isLoading: true,
    userTree: null,
    season: null,
  });
  const [remain, setRemain] = useState({
    percent: 0,
    count: 0,
  });

  async function getData() {
    const season = await getCurrentSeason();
    const userTree = await getMyCurrentTree(auth.accessToken ?? '');
    setValue({ isLoading: false, season: season, userTree: userTree });

    let percent = 0;
    let count = 0;
    let tmp = 0;
    switch (userTree.currentStep) {
      case 'seed':
        count = season.growthStep.sprout - userTree.commitCount;
        percent = (userTree.commitCount / season.growthStep.sprout) * 100;
        break;
      case 'sprout':
        count = season.growthStep.baby - userTree.commitCount;
        tmp = season.growthStep.baby - season.growthStep.sprout;
        percent = ((tmp - count) / tmp) * 100;
        break;
      case 'baby':
        count = season.growthStep.adult - userTree.commitCount;
        tmp = season.growthStep.adult - season.growthStep.baby;
        percent = ((tmp - count) / tmp) * 100;
        break;
      case 'adult':
        count = season.growthStep.special - userTree.commitCount;
        tmp = season.growthStep.special - season.growthStep.adult;
        percent = ((tmp - count) / tmp) * 100;
        break;
      case 'special':
        count = userTree.commitCount;
        percent = 100;
        break;
    }
    setRemain({ percent: percent, count: count });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card>
      {value.isLoading ? (
        <>불러오는 중...</> // TODO: 로딩 중 화면
      ) : (
        <>
          {value.userTree ? (
            <>
              <Wrap>
                <div>
                  <TreeTitle theme={theme}>
                    {value.userTree.tree[value.userTree.currentStep].name.kr}
                  </TreeTitle>
                  <TreeStep theme={theme}>{stepName[value.userTree.currentStep]}</TreeStep>
                </div>
                <ImageBox>
                  <img width="100%" src={value.userTree.tree[value.userTree.currentStep].good[0]} />
                </ImageBox>
              </Wrap>
              <ProgressBar theme={theme}>
                <Progress theme={theme} style={{ width: `${remain.percent}%` }} />
              </ProgressBar>
              <GrowBox>
                <img width="24px" height="24px" src="/assets/icons/commit-water.svg" />
                <GrowText>
                  {value.userTree.currentStep === 'special' ? (
                    <>
                      모두 성장했어요! 지금까지{' '}
                      <span style={{ color: theme.colors.PRIMARY }}>{remain.count}커밋</span>
                    </>
                  ) : (
                    <>
                      다음 성장까지{' '}
                      <span style={{ color: theme.colors.PRIMARY }}>{remain.count}커밋</span>{' '}
                      남았어요!
                    </>
                  )}
                </GrowText>
              </GrowBox>
            </>
          ) : (
            <>트리를 생성해주세요.</> // TODO: 나무 생성 요청 화면, 나무 업데이트 화면
          )}
        </>
      )}
    </Card>
  );
};

const Wrap = styled.article`
  display: flex;
  justify-content: space-between;
`;

const ImageBox = styled.div`
  flex-grow: 1;
  max-width: 200px;
  min-height: 100px;
`;

const TreeTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.FONT_H1};
  font-weight: bold;
  color: ${props => props.theme.colors.TEXT_HIGH};
  margin-bottom: 16px;
`;

const TreeStep = styled.p`
  font-size: ${props => props.theme.fontSize.FONT_BODY1};
  color: ${props => props.theme.colors.TEXT_MEDIUM};
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.GRAY_1};
`;

const Progress = styled.div`
  height: 10px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.PRIMARY};
`;

const GrowBox = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const GrowText = styled.p`
  font-size: ${props => props.theme.fontSize.FONT_BODY1};
  color: ${props => props.theme.colors.TEXT_HIGH};
`;
export default TreeCard;
