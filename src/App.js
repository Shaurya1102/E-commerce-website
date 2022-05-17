import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from './Payment';
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import {loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe('pk_test_51KrPCUSJNhtosum27vg9freJAKT9mAy1aJpsgBi25rhs7xAQfBs7nJMNY7bH4smTpeopqk6vb40w64zo4FwwLvx000YSSbynFd')

function App() {
  const [{ basket }, dispatch] = useStateValue();
  useEffect(() =>{
     auth.onAuthStateChanged(authUser => {
       console.log('THE USER IS >>>', authUser);

       if (authUser) {
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
       } else{
          dispatch({
            type: 'SET_USER',
            user: null
          })
       }
     })
  }, [])
  return (
    // BEM
    <Router>
      <div className="app">
      
      <Routes>
          <Route path = "/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/payment" element={[<Header />, <Payment />]} >
            
          </Route>
          <Route path = "/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;