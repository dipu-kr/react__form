import { useState } from "react";
import "./App.css";

function App() {
  const [userLogin, setUserLogin] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [record, setRecord] = useState([]);
  const [userErr, setUserErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserLogin({ ...userLogin, [name]: value });

    if (e.target.name == "username") {
      if (userLogin.username.length < 2) {
        setUserErr(true);
      } else {
        setUserErr(false);
      }
    }
    if (e.target.name == "password") {
      if (userLogin.password.length < 5) {
        setPassErr(true);
      } else {
        setPassErr(false);
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...userLogin, id: new Date().getTime().toString() };

    setRecord([...record, newRecord]);
    setUserLogin({ username: "", email: "", password: "" });
  };
  return (
    <div className="container">
      <div className="data">
        {record.map((data) => {
          const { username, email, password, id } = data;
          return (
            <div className="data_div" key={id}>
              <span>{username}</span>
              <span>{email}</span>
              <span>{password}</span>
              <span>{id}</span>
            </div>
          );
        })}
      </div>
      <div className="container-div">
        <form onSubmit={handleSubmit}>
          <h1>SignUp Form</h1>
          <div className="form_div">
            <div className="input_div">
              <label>Username</label>
              <input
                type="text"
                name="username"
                autoComplete="off"
                placeholder="Username"
                value={userLogin.username}
                onChange={handleInput}
                required
              />
              {userErr ? (
                <div className="err_div">
                  <span className="input__error">
                    enter more than 2 characters
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="input_div">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                value={userLogin.email}
                onChange={handleInput}
                required
              />
            </div>
            <div className="input_div">
              <label>Password</label>
              <input
                type="password"
                name="password"
                autoComplete="off"
                placeholder="Password"
                value={userLogin.password}
                onChange={handleInput}
                required
              />
              {passErr ? (
                <div className="err_div">
                  <span className="input__error">
                    give strong password, more than 5 characters
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
