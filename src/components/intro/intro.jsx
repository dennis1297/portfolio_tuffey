import "./intro.css";
import Me from "../../img/me1.png"

const Intro = () => {
    return (
        <div className="i">
          <div className="i-left">
              <div className="i-left-wrapper">
                  <h2 className="i-intro">Hello, My name is</h2>
                  <h1 className="i-name">A Dennis Thomson</h1>
                     <div className="i-title">
                       <div className="i-title-wrapper">
                        <div className="i-title-item">Full Stack Devoloper</div>
                        <div className="i-title-item">Content Creator</div>
                        <div className="i-title-item">Custom Desinged </div>
                        <div className="i-title-item">Altruistic</div> 
                        <div className="i-title-item">Socialist</div>  
              </div> 
             </div> 
             <p className="i-desc">
             I like to create Robust and Scalable Frontend Products which focuses on simplicity and purpose that brings idea's to life with Web technologies.   
             </p>        
           </div>
           
          </div>
         <div className="i-right">
             <div className="i-bg"></div>
             <img src={Me} alt="" className="i-img" />
         </div>
        </div>
    )
}

export default Intro
