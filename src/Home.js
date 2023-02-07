import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "my website",
      body: "lorem ipsum...",
      author: "Jack",
      id: 1,
    },
    {
      title: "Welcome Party!",
      body: "lorem ipsum...",
      author: "Lana",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "Jack",
      id: 3,
    },
    {
        title: "Web dev top tips",
        body: "lorem ipsum...",
        author: "Lana",
        id: 4,
      }
  ]);  
 
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
      <BlogList blogs={blogs.filter((blog) => blog.author === 'Jack')} title="Jack's Blogs" handleDelete={handleDelete}/>
      <BlogList blogs={blogs.filter((blog) => blog.author === 'Lana')} title="Lana's Blogs" handleDelete={handleDelete}/>
    </div>
  );
};

export default Home;
