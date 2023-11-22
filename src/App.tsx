import React from "react";
import LoginImage from "./components/Login/LoginImage";
import LoginForm from "./components/Login/LoginForm";
function App() {
  return (
    <div className="font-lato flex w-screen h-screen flex-col md:flex-row">
      <LoginForm />
      <LoginImage />
    </div>
  );
}

export default App;
