import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import Article from "./Article";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  const {name, image, about, posts} = blogData
  return (

    <div className="App">
      <Header title={name}/>
      <About img={image} text={about}/>
      <ArticleList posts={posts}/>
    </div>
  );
}

export default App;
