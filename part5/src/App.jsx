import { useEffect, useState } from "react";
import Blogs from "./components/Blogs";
import { getBlogs } from "./services/fetching";
const App = () => {
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    getBlogs().then((res) => setBlogs(res));
  }, []);
  return (
    <div>
      <header>
        <h1>Blogs App</h1>
      </header>
      <main>{blogs && <Blogs blogs={blogs.data} />}</main>
    </div>
  );
};

export default App;
