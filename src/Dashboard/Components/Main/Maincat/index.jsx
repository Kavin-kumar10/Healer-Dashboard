import React,{useState} from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'chart.js/auto';
import './Maincat.scss'

const Maincat = () =>{
    const [cats,setcats] = useState([
      {
        type:'Ortho',
        val:80
      },
      {
        type:'Dental',
        val:90
      },
      {
        type:'Cardio',
        val:70
      },
      {
        type:'opthalmo',
        val:90
      },
      {
        type:'Psychology',
        val:80
      }
    ]);
    
    return(
        <div className="Maincat">
            <div className="Chart">
                <div className="content">
                  {
                    cats.map((cat,index)=>{
                      return(
                        <div className="cat" key={index}>
                            <p>{cat.type}</p>
                            <div id="progress">
                              <ProgressBar now={cat.val} style={{width:"300px",margin:"0px 30px"}} variant="MYVARIENT"/>
                            </div>
                        </div>
                      )
                    })
                  }
                </div>
            </div>
            <div className="chat">
                  <div className="update">
                      <p>Latest Updates</p>
                  </div>
                  <div className="broadcast">
                    <p>BroadCast: </p>
                    <div className="message">
                      <form>
                          <input placeholder="Message" type="text" />
                          <button id="send">Send</button>
                          <button id="reset" type="reset">Reset</button>
                      </form>
                    </div>
                  </div>
            </div>
        </div>
    )
}


export default Maincat