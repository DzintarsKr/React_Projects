import axios from "axios";
import { useEffect, useState } from "react";

import Header from "./assets/components/header";
import PostList from "./assets/components/postList";
import PostForm from "./assets/components/postForm";

import "./App.css";

const BASE_URL = "https://6a4be281f5eab0bb6b639e34.mockapi.io";

function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createPost = async (newPost) => {
    try {
      const response = await axios.post(`${BASE_URL}/posts`, newPost);
      setPosts([response.data, ...posts]);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Header />

      <main className="main">
        <PostList posts={posts} deletePost={deletePost} />
        <PostForm createPost={createPost} />
      </main>
    </>
  );
}

export default App;