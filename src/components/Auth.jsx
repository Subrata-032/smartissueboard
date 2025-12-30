import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import "../styles/Auth.css";

export default function Auth({ onAuthSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      onAuthSuccess();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="ai-auth-root">
      <div className="ai-auth-card">

        {/* Left Section */}
        <div className="ai-auth-visual">
          <h1 className="ai-auth-brand">Smart Issue Board</h1>
          <p className="ai-auth-tagline">
            AI-powered issue tracking made simple
          </p>
        </div>

        {/* Right Section */}
        <div className="ai-auth-form">
          <h2 className="ai-auth-heading">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>

          <input
            className="ai-auth-input"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="ai-auth-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <div className="ai-auth-error">{error}</div>}

          <button className="ai-auth-button" onClick={handleSubmit}>
            {isLogin ? "Login" : "Sign Up"}
          </button>

          <p
            className="ai-auth-switch"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin
              ? "New here? Create an account"
              : "Already have an account? Login"}
          </p>
        </div>
      </div>
    </div>
  );
}
