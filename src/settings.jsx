import React, {useState} from 'react';
import './settings/settings.css';
import Nav from './Home/Nav';
import Sleft from './settings/sleft'

const Settings = ({toggleDark,toggleIco}) => {
  const [showDel, setShowDel] = useState("delete");

  const showDeletion = () => {
    setShowDel("del");
  }
  const hideDeletion = () => {
    setShowDel("delete");
  }
 
  return (
    <div className='settings w-full flex'>
      <Nav />
      <div className={`${showDel} bg-black/70 flex 
      items-center w-full absolute h-screen justify-center`}>
          <form action="" className="delform py-5 ">
          <h1 className="text-center">Confirm deletion of your account</h1>
          <p className="text-center">This action cannot be undone.</p>
            <div className="labels">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="labels">
              <label>Password</label>
              <input placeholder="Enter your password" required />
            </div>
            <div className="labels">
            <input className="bg-red-300 hover:bg-red-400 dele duration-300 cursor-pointer" type="submit"  value="Delete" />
            </div>
            <div className="labels">
            <input onClick={hideDeletion}
             type="button" className='cursor-pointer hover:bg-slate-400 duration-300 '  value="Cancel" />
            </div>
          </form>
      </div>
      <div className='w-[95%]'>
        <h1 className='text-center'>Settings</h1>
        <div className='flex'>
          <div className='s-left flex flex-col w-[50%]'>
            <div className='pl-1'>
              <li>Prefferences: </li>
              <div className='p-cont flex items-center'>
                <p>Dark mode:</p>
                <div className='flex items-center pl-7'>
                  <div className='flex items-center pl-7'>
                  <label>Off</label><i onClick={toggleDark} className={toggleIco}></i><label>On</label>
                  </div>
                </div>
              </div>
            </div>
            <div className='pl-1'>
              <li>Account Settings: </li>
                <div className='p-cont pt-2 flex items-center'>
                  <p className=''>Account delete:</p>
                  <button onClick={showDeletion}
                   className='flex items-center px-1 rounded-[5px] ml-7 bg-red-400'>Delete Account
                  </button>
                </div>
            </div>
          </div>
          <Sleft />
        </div>
        <p className='text-center pt-2'>©️ 2022 Photo Corner. All rights reserved</p>
      </div>
    </div>
  )
}

export default Settings

