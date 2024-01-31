const LoginForm = ({ FOnSubmit, FOnChange }) => {
  return (
    <div>
      <section>
        <h1>Login</h1>
      </section>
      <form onSubmit={(e) => FOnSubmit(e)}>
        <section>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            placeholder="John Doe"
            onChange={FOnChange}
          />
        </section>
        <section>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="********"
            onChange={FOnChange}
          />
        </section>
        <section>
          <button type="submit">Login</button>
        </section>
      </form>
    </div>
  );
};

export default LoginForm;
