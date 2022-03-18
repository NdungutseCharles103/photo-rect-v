import React from 'react';
import "./account.css";

const Follow = ({isUsers, setIsUsers}) => {

  

  const Pfollow = (props) => {
    const {user, isUsers, setIsUsers} = props
    const followHandler = () => {
      setIsUsers(isUsers.map(card => {
        if (card.id === user.id) {
          return {
            ...card, followed: !card.followed
          }
        }
        return card
      }))
    }
    const test = () =>{
      if (user.followed) {
        return 'following'
      } else {
        return 'Follow'
      }
    }
    const tested = test()
    return (
      <div className="fcard flex flex-col items-center">
        <img className="w-[100%] rounded-full"
          src={user.image}
          alt=""
        />
        <p>{user.names}</p>
        <p className="opacity-[0.7]">@{user.username}</p>
        <p onClick={followHandler} isUsers={isUsers} setIsUsers={setIsUsers}
        className={`text-white hover:bg-blue-800 duration-300 px-2 
        rounded-sm bg-blue-600 cursor-pointer ${tested}`}>{tested}</p>
      </div>
    )
  }
  return (
    <div className="fo">
      <h1 className="pl-3 pt-2">People to follow</h1>
      <div className="pt-3 p-2 grid-cols-4 gap-10 grid overflow-x-auto">
        {isUsers.map(user =>(
          <Pfollow user={user} key={user.id} 
           setIsUsers={setIsUsers}
           isUsers={isUsers}/>))}
      </div>
    </div>
  );
 
};

export default Follow;

