import React, { useEffect, useState } from "react";
import Loading from './Loading';
import Display from "./Display";


const GithubUsers = () => {
    // useState is used to re-render the component, then useEffect will be called
  const [users, setUsers] = useState([]); // users, current value will be an empty array
  const [loading, setLoading] = useState(false); // to show loading status

  const getUsers = async () => {
    try{
      
      const response = await fetch(
      "https://api.github.com/users"
    );
    setLoading(false);
    setUsers(await response.json()); // passing json array data in setUsers
  } catch(error){
    setLoading(false); // we don't want to show loading here
    console.log("the error is" + error);
  }
  };

  useEffect(() => {// it will run, call gitUsers function as soon as the page will load
    getUsers();
  }, []); // useEffect will be called, when the page load first time only
 
 if(loading){
   return <Loading />
 }
 
  return (
    <>
      <Display users={users}/>
    </>
  );
};

export default GithubUsers;
