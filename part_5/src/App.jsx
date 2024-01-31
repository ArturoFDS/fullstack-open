import Blogs from "./components/Blogs";
import { useState } from "react";
import { LoginUser, getAllBlogs } from "./services/fetching";
import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorageHook";
const App = () => {
  const localStorage = new useLocalStorage();
  const [blogs, setBlogs] = useState();
  const [userData, setUserData] = useState({
    username: "Frodo",
    password: "Frodo",
    isLogged: false,
  });

  const fetchBlogs = async () => {
    const response = await getAllBlogs();
    setBlogs(response);
  };

  const handleInputOnChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const response = await LoginUser(userData);
    if (response.ok) {
      setUserData({
        isLogged: true,
      });
      localStorage.setLocalStorage("isLogged", (userData.isLogged = true));
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <header>
        <h1>Blogs Frontend</h1>
      </header>
      <button onClick={(e) => handleOnSubmit(e)}>Submit Data</button>
      {blogs && <Blogs blogs={blogs} />}
    </div>
  );
};

export default App;
