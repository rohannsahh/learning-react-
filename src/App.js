
//import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Dashboard } from './modules/notes/pages/Dashboard';
import { Provider } from 'react-redux';
import store from './shared/store/store'
function App() {
  return (
    <Provider store ={store}>
    
          <Dashboard/>
    
    </Provider>
    
  );
}

export default App;
