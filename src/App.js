import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import TopBar from './pages/Home/TopBar/TopBar';
import Footer from './pages/Home/Footer/Footer';
import Register from './pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import JoinDonor from './pages/JoinDonor/JoinDonor';
import { Bloods } from './pages/Bloods/Bloods';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <TopBar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/bloods/:group' element={<Bloods />}></Route>
            <Route path='/joinAsDonor' element={<PrivateRoute><JoinDonor /></PrivateRoute>}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
