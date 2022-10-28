import React from "react";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form action=""  onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter the Email"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password here"
        />
        <button>submit</button>
      </form>
    </>
  );
};

export default Login;
