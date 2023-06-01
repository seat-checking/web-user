import { ListTab } from 'components/ListTab';
import { Navigation } from 'components/Navigation';
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
