import './App.css';
import { useContext, Fragment } from 'react';
import itemsContext from './store/items-context';
import Users from './pages/Users';
import Admin from './pages/Admin';
import Footer from './components/Footer';


function App() {


  const itemsCtx = useContext(itemsContext);
  return (
    <Fragment>
      {itemsCtx.switchPage === 'User' ? <Users /> : <Admin />}
      <Footer />
    </Fragment>
  );
}

export default App;
