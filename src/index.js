import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages
import Home from './layouts/home';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp'
import PasswordReset from './components/auth/PasswordReset';
import PasswordResetConfirm from './components/auth/PasswordResetConfirm';

const router = createBrowserRouter([
  {
    path : "/",
    element : (<Home />),
  },
  {
    path : "/login",
    element : (<SignIn />)
  },
  {
    path : "/sign-up",
    element : (<SignUp />)
  },
  {
    path : "/reset-password",
    element : (<PasswordReset />)
  },
  {
    path : "/password/reset/confirm/:uid/:token",
    element : (<PasswordResetConfirm />)
  },
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals