import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Reviews from './routes/reviews';
import NavBar from './components/NavBar';
import GymBuddy from './routes/gymBuddy';
import Gyms from './routes/gyms';
import AddGym from './routes/addGym';
import SignIn from './routes/signIn';
import Register from './routes/register';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/gyms" element={<Gyms/>}/>
          <Route path="/gyms/reviews/:id" element={<Reviews/>}/>
          <Route path="/gymBuddy" element={<GymBuddy/>} />
          <Route path="/addGym" element={<AddGym/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
