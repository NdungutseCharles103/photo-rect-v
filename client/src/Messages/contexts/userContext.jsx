import React, { useContext, useState, useEffect } from "react";
import { getUserById } from "../../contexts/AuthContext";
import { getCookie } from "../../contexts/RequireAuth";

const UsersContext = React.createContext();
const UserContext = React.createContext();

export function useUsers() {
  return useContext(UsersContext);
}

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [suggested, setSuggested] = useState([]);

  const getUsers = async() => {
    const res = await fetch("https://photocorner33.herokuapp.com/user/all",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + getCookie("token"),
      }
    });
    const data = await res.json();
    setUsers(data.data);
  };

  const getSuggestedUsers = async() => {
    const res = await fetch("https://photocorner33.herokuapp.com/user/suggestedUsers",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + getCookie("token"),
      }
    });
    const data = await res.json();
    setSuggested(data.users);
  }

  const updatePhoto = async(datas) => {
    console.log(datas);
    const res = await fetch("https://photocorner33.herokuapp.com/user/updateProfilePicture",{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + getCookie("token"),
      },
      body: JSON.stringify(
        {imageStr: datas.imageStr}
      ) 
    });
    const data = await res.json();
    const user = await getUserById(datas.user);
    return {done: true, user: user}
  }

  useEffect(() => {
    getUsers();
  }, []);

 useEffect(() => {
    getSuggestedUsers();
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ users, setUsers, 
    isLoggedIn, setIsLoggedIn, suggested, updatePhoto}}>
        {children}
    </UsersContext.Provider>
  );
}
