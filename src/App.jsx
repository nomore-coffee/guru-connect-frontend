import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/auth/Login';

function App() {
  return (
    <BrowserRouter>
    <Login />
   {/* <Routes>
    <Route exact path='/login' component={Login}></Route>
   </Routes> */}
   </BrowserRouter>
  );
}

export default App;
