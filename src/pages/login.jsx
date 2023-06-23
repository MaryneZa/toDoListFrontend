import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DataAtom } from "../user/dataAtom";
import { useRecoilState} from "recoil";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [navigateButton, setNavigateButton] = useState(false);
  //   const setData = useSetRecoilState(DataAtom);
  const [userDataStore, setUserDataStore] = useRecoilState(DataAtom);

  const navigate = useNavigate();

  const api = axios.create({
    baseURL: "http://localhost:6951",
  });

  const LoginData = () => {
    const data = {
      username: username,
      password: password,
    };

    api.post("/login", data)
      .then((response) => {
        console.log(response);
        if (response) {
          //navigate with data
          setUserDataStore(response.data);
          setNavigateButton(true);
        } else {
          console.log(
            "This Username Haven't Register yet or Your Password Wrong"
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(data);
  };

  useEffect(() => {
    if (navigateButton) {
      navigate("/userPage");
    }
  }, [navigateButton, navigate]);

  return (
    <div>
      <div>
      <span>login</span>
      <label>username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        placeholder="username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <label>password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        placeholder="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit" onClick={LoginData}>
        submit
      </button>
      </div>
    </div>
  );
};

export default LogIn;
