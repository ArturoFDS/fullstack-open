import { useEffect, useState } from "react";
import Blogs from "./components/Blogs";
import { LoginUser, getBlogs } from "./services/fetching";
import LoginForm from "./components/LoginForm";
const App = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    isLogged: false,
  });
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    getBlogs().then((res) => setBlogs(res));
  }, []);
  const handleOnChange = (e) => {
    e.preventDefault();
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(userData);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const response = await LoginUser(userData.username, userData.password);
    console.log(response)
  };
  return (
    <div>
      <header>
        <h1>Blogs App</h1>
      </header>

      <main>
        {!userData.isLogged && (
          <LoginForm userData={userData} onChangeFunction={handleOnChange} onSubmitFunction={handleOnSubmit} />
        )}
        {blogs && userData.isLogged && <Blogs blogs={blogs.data} />}
      </main>
    </div>
  );
};

export default App;
