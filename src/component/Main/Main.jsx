import React, { useContext } from 'react'
import './Main.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context'
function Main() {


const {onSent,recentPrompt,showResult,loading,resultData,setInput,Input} =useContext(Context);


  return (
    <div className='main'>
    <div className="nav">
    <div className="glitch-wrapper">
   <div className="glitch" data-text="Chat-box AI">Chat-box AI</div>
</div>
      <img src={assets.my_pic3} alt="" />
    </div>
<div className="main-container">

{!showResult 
   ?<>

  <div className="greet">
  <p><span>Hello, Dev.</span></p>
  <p>Welcome to chat-box AI</p>
  <p>How can i help you today</p>
  </div>
  <div className="cards">
    <div className="card">
        <ul className='trip'>
      <p>suggest beautiful place to on upcoming road trip ,
          <li>Delhi to jaipur...</li>
          <li>Jaipur to Jaisalmer...</li>
          <li>Bangalore to Coorg...</li>
          </p>
          </ul> 
      <img src={assets.compass_icon} alt="" />
    </div>
    <div className="card">
      <p>Briefly summarize the concepts : planning , start-up , team management and other  </p>
      <img src={assets.bulb_icon} alt="" />
    </div>  <div className="card">
      <p> can help you improve your coding skills, learn new concepts, and build a network of fellow coders </p>
      <img src={assets.message_icon} alt="" />
    </div>  <div className="card">
      <p>improve your readability , express the following code  <marquee> <p>&lt;h2&gt; hello &lt;/h1&gt;</p></marquee>  </p>
      <img src={assets.code_icon} alt="" />
    </div>
   </div>
   </>
   :<div className='result'>
    <div className="result-title">
      <img src={assets.user_icon} alt="" />
      <p>{recentPrompt}</p>
    </div>
    <div className="result-data">
      <img src={assets.gemini_icon} alt="" />

      {loading
      ?
      <div className='pulse'>
      <span style={{ '--i': 1 }}></span>
      <span style={{ '--i': 2 }}></span>
      <span style={{ '--i': 3 }}></span>
      <span style={{ '--i': 4 }}></span>
      <span style={{ '--i': 5 }}></span>
      <span style={{ '--i': 6 }}></span>
      <span style={{ '--i': 7 }}></span>
      


    </div>
      : 
      <p dangerouslySetInnerHTML={{__html:resultData}}></p>
      }



    </div>


   </div>
   }



   <div className="main-bottom">
   <div className="search-box">
  <input
    onChange={(e) => setInput(e.target.value)}
    value={Input}
    type="text"
    placeholder="Enter a prompt here"
    id="myInput"
    onKeyPress={(e) => {
      if (e.key === 'Enter') {
        onSent();
      }
    }}
  />
  <div>
    <img src={assets.gallery_icon} alt="" />
    <img src={assets.mic_icon} alt="" />
    {Input ? (
      <img
        className='send-icon'
        onClick={() => onSent()}
        src={assets.send_icon}
        alt=""
      />
    ) : null}
  </div>
</div>
   <p className="buttom-info">
    This chat-box have generated by Md Shakil! using this you may display accurate or inaccurate info , so double check its responses , can make mistakes , your privacy & security!
   </p>
   </div>
</div>

</div>
  )
}

export default Main
