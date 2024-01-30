
const LoginForm = ({ userData, onChangeFunction, onSubmitFunction }) => {
  return (
    <div>
      <header>
        <h1>Log into your account</h1>
      </header>
      <main>
        <form action="">
          <section>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={userData.username}
              placeholder="John Doe"
              name="username"
              onChange={(e) => onChangeFunction(e)}
            />
          </section>
          <section>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="*********"
              value={userData.password}
              name="password"
              onChange={(e) => onChangeFunction(e)}
            />
          </section>
          <button onClick={(e) => onSubmitFunction(e)}>Login</button>
        </form>
      </main>
    </div>
  );
};

export default LoginForm;
