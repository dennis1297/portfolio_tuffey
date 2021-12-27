import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";


const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e)=>{
    e.preventDefault()
     emailjs.sendForm(
       'service_vx2xb3p', 
       'template_3mcqd7m', 
       formRef.current, 
       'user_EF9drruGUv3CDOHfvWfhg'
       )
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, 
      (error) => {
          console.log(error.text);
      });
  }
    return (
        <div className="c" >
            <div className="c-bg"></div>
            <div className="c-wrapper">
            <div className="c-left">
             <h1 className="c-title">Let's Discuss Your Project</h1>
            <div className="c-info">
            <div className="c-info-item">
             <img 
             src={Phone} 
             alt="" 
             className="c-icon" 
             />
             +91 9094839243
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              dennis1297@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              16/31 Gopalapuram, Chennai - 600086 India
               </div>
              </div>
             </div>
            <div className="c-right">
            <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
              <input style={{backgroundColor:darkMode && "lightgrey"}} type="text" placeholder="Name" name="user_name" />
              <input style={{backgroundColor:darkMode && "lightgrey"}}type="text" placeholder="Subject" name="user_subject" />
              <input style={{backgroundColor:darkMode && "lightgrey"}}type="text" placeholder="Email" name="user_email" />
              <textarea style={{backgroundColor:darkMode && "lightgrey"}}rows="5" placeholder="Message" name="message"/>
                  <button>Submit</button>
                  {done &&"Thank You..."}
           </form>
          </div>
         </div>
        </div>
    )
}

export default Contact;
