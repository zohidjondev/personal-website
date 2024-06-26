import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloribus beatae illo possimus aliquid quis reiciendis reprehenderit quidiste?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, libero sint recusandae, veritatis tenetur pariatur ",
      img: "https://plus.unsplash.com/premium_photo-1683535508528-9228dcc8fa4c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloribus beatae illo possimus aliquid quis reiciendis reprehenderit quidiste?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, libero sint recusandae, veritatis tenetur pariatur ",
      img: "https://plus.unsplash.com/premium_photo-1683535508528-9228dcc8fa4c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloribus beatae illo possimus aliquid quis reiciendis reprehenderit quidiste?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, libero sint recusandae, veritatis tenetur pariatur ",
      img: "https://plus.unsplash.com/premium_photo-1683535508528-9228dcc8fa4c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloribus beatae illo possimus aliquid quis reiciendis reprehenderit quidiste?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, libero sint recusandae, veritatis tenetur pariatur ",
      img: "https://plus.unsplash.com/premium_photo-1683535508528-9228dcc8fa4c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloribus beatae illo possimus aliquid quis reiciendis reprehenderit quidiste?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, libero sint recusandae, veritatis tenetur pariatur ",
      img: "https://plus.unsplash.com/premium_photo-1683535508528-9228dcc8fa4c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloribus beatae illo possimus aliquid quis reiciendis reprehenderit quidiste?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, libero sint recusandae, veritatis tenetur pariatur ",
      img: "https://plus.unsplash.com/premium_photo-1683535508528-9228dcc8fa4c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ];
  return (
    <div className="blog">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/blog/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button className="button">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
