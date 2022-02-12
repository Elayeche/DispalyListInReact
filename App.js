import { useState } from "react";
import "./App.css";

function App() {

  /*const listItems = ["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"];*/
  const [blogs, setBlogs]= useState([
    {title: "My new website", body:"Lorem ipsum...",author:"Elayeche", id: 1},
    {title: "Happy birth day", body:"Lorem ipsum...",author:"Ahmed", id: 2},
    {title: "The computer technologie", body:"Lorem ipsum...",author:"Lotfi", id: 3}]);
  
    
return <div className="App">
  {
    /* Using simple listItems.map((item)=>({item};)) */
    
    blogs.map((blog) =>(
      <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
      </div>
  ))
  }
  
  
</div>
  
}

export default App;
