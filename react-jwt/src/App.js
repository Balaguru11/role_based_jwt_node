import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Modal } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

//importing created components here
// import Post from "./components/Post";
import MainNavigation from "./components/layouts/MainNavigation";

//importing pages here
import AllPostsPage from "./pages/AllPosts";
import MyPostsPage from "./pages/MyPosts";
import NewPostsPage from "./pages/NewPost";

function App() {
  return (
    <div className="App container-fluid mb-3">
      <MainNavigation />
      <div className="m-5">
        <Routes>
          <Route path="/" element={<AllPostsPage />} />
          <Route path="/my-posts" element={<MyPostsPage />} />
          <Route path="/create-post" element={<NewPostsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
