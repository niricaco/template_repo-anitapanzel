import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/auth";
import Home from "./Home";

const Callback = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const loginWithCode = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      if (code) {
        await login(code, "google");
      }
      navigate("/");
    };
    loginWithCode();
    // eslint-disable-next-line
  }, []);

  return <div>Callback</div>;
};

export default Callback;
