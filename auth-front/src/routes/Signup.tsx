import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";
import { API_URL } from "../auth/constants";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const auth = useAuth();

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          password,
        }),
      });

      if (response.ok) {
        console.log("Usuario creado con éxito");
      } else {
        console.log("Algo salió mal");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <DefaultLayout>
        <form className="form" onSubmit={handleSubmit}>
          <h1>Signup</h1>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Create Account</button>
        </form>
      </DefaultLayout>
    </>
  );
};

export default Signup;
