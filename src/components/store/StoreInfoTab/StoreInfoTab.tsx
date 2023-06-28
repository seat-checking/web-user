import { getStoreDetaill } from 'api/store/storeApi';
import { Spinner } from 'components/layout/Spinner';
import {
  Container,
  Label,
  TextRow,
} from 'components/store/StoreInfoTab/StoreInfoTab.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { StoreDetaillResponse } from 'api/store/storeApi';
import type { VFC } from 'common/utils/types';

/**
 * 가게정보 탭을 클릭했을 때 하단에 보여줄 컴포넌트
 */
export const StoreInfoTab: VFC = () => {
  const { storeId } = useParams<{ storeId: string }>();
  const [storeInfo, setStoreInfo] = useState<StoreDetaillResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getStoreInfo = async () => {
      try {
        if (storeId) {
          setLoading(true);
          const response = await getStoreDetaill({ id: +storeId });
          setStoreInfo(response.result);
          setLoading(false);
        }
      } catch (error) {
        console.error('서버로부터 데이터를 받지 못했습니다.', error);
        setLoading(false);
      }
    };

    getStoreInfo();
  }, [storeId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container>
      <Label>가게정보</Label>
      {storeInfo && (
        <>
          <TextRow>
            <div className='label'>가게위치</div>
            {storeInfo.location}
          </TextRow>
          <TextRow>
            <div className='label'>운영시간</div>
            {storeInfo.monOpenTime} ~ {storeInfo.monCloseTime}
          </TextRow>
          <TextRow>
            <div className='label'>휴무일</div>
            {storeInfo.dayOff.join(', ')}
          </TextRow>
          <TextRow>
            <div className='label'>전화번호</div>
            {storeInfo.telNum}
          </TextRow>
        </>
      )}
    </Container>
  );
};
