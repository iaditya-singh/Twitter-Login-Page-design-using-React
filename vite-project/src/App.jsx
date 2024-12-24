import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logo-box">
        <img src="./logo.png" alt="logo" className="logo" />
        <h2>Sing In to Twitter</h2>
        <button>
          <img src="./google.png" alt="" />
          Sign in with Google
        </button>
        <button>
          <img src="./apple.png" alt="" />
          Sign in with Apple
        </button>

        <hr />
        <span>Or</span>
        <form>
          <input type="text" placeholder="Phone email or username" />
          <button>Next</button>
        </form>

        <button>Forget Password</button>
        <p>
          Don't Have an account <a href="">Sing Up</a>
        </p>
      </div>
    </div>
  );
}

export default App;
