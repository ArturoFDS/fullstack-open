import { useState } from "react";
import { LoginUser, getAllBlogs } from "./services/fetching";
import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorageHook";
import BlogsContainer from "./components/Blogs";
import LoginForm from "./components/LoginForm";
const App = () => {
  const localStorage = new useLocalStorage();
  const [blogs, setBlogs] = useState();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    isLogged: false,
  });

  const fetchBlogs = async () => {
    const response = await getAllBlogs();
    setBlogs(response);
  };

  const handleOnChange = (event) => {
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

  const handleLogout = (event) => {
    event.preventDefault();
    setUserData({ isLogged: false });
    localStorage.removeLocalStorage("isLogged");
  };

  useEffect(() => {
    fetchBlogs();
    const setIsLogged = localStorage.getLocalStorage("isLogged");
    setIsLogged
      ? setUserData({
          isLogged: JSON.stringify(setIsLogged),
        })
      : setUserData({
          isLogged: userData.isLogged,
        });
  }, []);

  return (
    <div>
      <header>
        <h1>Blogs Frontend</h1>
      </header>
      <main>
        {!userData.isLogged && (
          <LoginForm
            FOnSubmit={handleOnSubmit}
            FOnChange={handleOnChange}
            value={userData}
          />
        )}
        {blogs && userData.isLogged && <BlogsContainer blogs={blogs} />}
      </main>
      <footer>
        {userData.isLogged && (
          <button onClick={(e) => handleLogout(e)}>Logout</button>
        )}
      </footer>
    </div>
  );
};

export default App;
