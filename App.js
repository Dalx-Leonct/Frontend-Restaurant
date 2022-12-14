import Navegation from './navigation/Navegation'
import { ContextProvider } from './components/ContextR';

const App = () => {
  return (
    <ContextProvider>
      <Navegation/>
    </ContextProvider>
  );
};

export default App;
