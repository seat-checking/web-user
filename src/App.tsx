import { Navigation } from 'components/Navigation';
import { ListTab } from 'components/store/ListTab';
import type { VFC } from 'common/utils/types';

const App: VFC = () => {
  return (
    <div>
      <ListTab />
      <Navigation />
    </div>
  );
};

export default App;
