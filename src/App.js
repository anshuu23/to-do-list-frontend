
import './App.css';
import Head from './components/Header';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import Home from './components/Home';
import Login from './components/Login';
function App() {
    
    return(
        <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/createAccount" element={<CreateAccount />}/>
                <Route path="/logIn" element={<Login />}/>
              </Routes>
        </BrowserRouter>
    )

}

export default App;
