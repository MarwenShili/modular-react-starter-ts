import './App.scss';
import ReduxProvider from '../providers/ReduxProvider';
import Main from '../components/Main/Main';
import { IAppProps } from '../types/types';

const App = ({ options, functions, routes }: IAppProps) => {
  return (
    <ReduxProvider>
      <Main options={options} functions={functions} routes={routes} />
    </ReduxProvider>
  );
};

export default App;
