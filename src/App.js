import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './Components/redux/store';
import Weatheropen from './Weatheropen';



function App() {
  return (
    
      <Provider store={store}>
          <div>
            <Weatheropen/>
          </div>

      </Provider>
   
  );
}

export default App;
