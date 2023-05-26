import { StoreDetail } from 'components/storeDetail/templates/StoreDetail';
import type { VFC } from 'common/utils/types';

const App: VFC = () => {
  return (
    <div style={{ fontSize: 23 }}>
      {/* 실시간 좌석 확인 */}
      {/* <Example /> */}
      <StoreDetail />
    </div>
  );
};

export default App;
