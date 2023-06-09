import { PATH } from 'common/utils/constants';
import { router } from 'pages/Router';
import { RouterProvider } from 'react-router-dom';
import type { VFC } from 'common/utils/types';

const App: VFC = () => {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
};

export default App;
