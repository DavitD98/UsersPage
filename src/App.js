
import './App.css';
import Home from "./pages/Home/Home";
import React from "react"
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import UsersPage from "./pages/usersPage/usersPage";
import UserProfile from "./pages/userProfile/userProfile";
import UserComment from "./pages/userComment/userComment";
import Header from "./pages/header/header";




function App() {
  return (
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/users" element={<UsersPage />}/>
              <Route path="/users/userProfile/:id" element={<UserProfile />}/>
              <Route path="/users/userComment/:id" element={<UserComment />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
