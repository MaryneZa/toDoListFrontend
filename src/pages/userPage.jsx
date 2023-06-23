import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { DataAtom } from "../user/dataAtom";
import axios from "axios";

const UserPage = () => {
  const [userDataStore, setUserDataStore] = useRecoilState(DataAtom);
  const [allLists, setAllLists] = useState([]);
  const [message, setMessage] = useState("");
  var currentDate = new Date();
  var newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes());
  const data = {
    date_time: newDate,
    message: message,
    priority : 'Low',
    username: userDataStore.username
  };
  const api = axios.create({
    baseURL: "http://localhost:6951",
  });

  function addToDoList(event) {
    // event.preventDefault();
    api.post('/addToDoList',data).then(response => {
      console.log(response);
    }).catch(error => {
      console.error(error);
    });
  }
  // api.post("/toDoList", data)
  // .then((response) => {
  //   console.log(response.data[0]);
  //   setAllLists(response.data);
  // })
  // .catch((error) => {
  //   console.error(error);
  // });

  // useEffect(() => {
  //   console.log(userDataStore);
  // }, [userDataStore]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.post("/toDoList", data);
        // console.log(response.data);
        setAllLists(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const allList = allLists.map((list, index) => {
    return (
      <div key={index}>
        <span>{list.name}</span>
        <h1>{list.message}</h1>
        <span>{index + 1}</span>
      </div>
    );
  });
      // have not done priority yet

  return (
    <div>
      <label>Add ToDoList : </label>
      <input
        type="text"
        id="message"
        name="message"
        value={message}
        placeholder="what you wanna do"
        onChange={(event) => setMessage(event.target.value)}
      />
      <button type="submit" onClick={(event)=>{addToDoList(event.target.value)}}></button>
      {userDataStore ? (
        <div>
          <span>name</span>
          {/* <h4>{userDataStore}</h4> */}
        </div>
      ) : (
        <span>no name</span>
      )}
      {allList}
    </div>
  );
};

export default UserPage;
