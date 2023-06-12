import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { DataAtom } from "../user/dataAtom";
import axios from 'axios';

const UserPage = () => {
  const [userDataStore, setUserDataStore] = useRecoilState(DataAtom);
  const [allLists, setAllLists] = useState();
  const data = {
    username : userDataStore.username
  }
  const api = axios.create({
    baseURL: 'http://localhost:6951'
  });
  api.post("/toDoList", data)
  .then((response) => {
    console.log(response);
    setAllLists(response);
  })
  .catch((error) => {
    console.error(error);
  });

  // useEffect(() => {
  //   console.log(userDataStore);
  // }, [userDataStore]);

  const allList = allLists.map((list) => {
    const cnt = 0
    return (<div key={cnt+1}>
      <span>{list.name}</span>
      <h1>{list.message}</h1>
    </div>)
  })




  return (
    <div>
      {userDataStore ? (
        <div>
          <span>name</span>
          <h4>{userDataStore}</h4>
        </div>
      ) : null}
      {allList}
      
    </div>
  );
};

export default UserPage;
