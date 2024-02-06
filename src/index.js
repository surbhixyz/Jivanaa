import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './components/App.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import Home from './components/Home.jsx';
import GetInvolved from './components/getInvolved.jsx';
import AskExpert from './components/AskExpert.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/ask-expert" element={<AskExpert />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(
    <React.StrictMode>
      <AppRouter />
      <ToastContainer/>
    </React.StrictMode>,
    document.getElementById('root')
  );
