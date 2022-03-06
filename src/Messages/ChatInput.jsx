import React from 'react';
import './mess.css';

function Chatinput ({setMessage, message, setSend, inputMessage}) {
 
    const  MessageHandler = (e)=> {
        setMessage(e.target.value);

      }
      const submitMessage = (e) => {
        if (inputMessage==="") {
          // alert("Please enter a message")
        }else {
          e.preventDefault();
        setSend([ 
            ...message, {messagetext: inputMessage, id: Math.ceil(Math.random()*1000)},
        ]);
        setMessage("");
        }
      }
        const handleKeypress = e => {
          //it triggers by pressing the enter key
        if (e.keyCode === 13) {
          this.btn.click();;
        }
      };
      

    
  return (
    <div className="chat-inputs md:container md:mx-auto">
      <form action="" className="messform">
      <div className="inputs-icon">
        <div title="show more options"><i className="bx bxs-plus-circle bl"></i></div>
        
        <label htmlFor="file-input"><i title="attach file" className="bx bxs-file-plus bl" onClick="sendPhoto()"></i></label>
        <input type="file" id="file-input" accept="image/png, image/jpg" />
        <div><i title="send a sticker" className="bx bxs-sticker bl"></i></div>
        <div><i title="add a gif" className="bx bxs-file-gif bl"></i></div>
      </div>
      <div className="input-m container ">
        <input value={inputMessage} onChange={MessageHandler} onKeyPress={handleKeypress} id= "text" type="text" placeholder="Aa" autoComplete="off"
          />
        <div><i className="bx bxs-smile"></i></div>
      </div>
      <div className="send-li">
        <div><i className="fas fa-thumbs-up"></i></div>
        <button onClick={submitMessage}
         id="send" href="index.html"
         type=''>send
            <i title="send" className='bx bxs-send'></i></button>
      </div>
      </form>
  </div>
  );
}

export default Chatinput;
