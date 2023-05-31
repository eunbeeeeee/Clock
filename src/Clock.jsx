import React, { useEffect, useState } from 'react';

const Clock = () => {
    
    const getClockValues = () => {
        const date = new Date();
        const hour = ( date.getHours() > 12) ? date.getHours() - 12 : date.getHours()
        return {
            "hour" : hour + (date.getMinutes() / 60),
            "minute" : date.getMinutes(),
            "second" : date.getSeconds()
        }
    }
    let [time, setTime] = useState( getClockValues());
  
    useEffect(()=>{
       const timer = setInterval(()=>{
           setTime( getClockValues());
       }, 1000);
       return ()=> {
           clearInterval(timer);
       }
    }, []);

    return (
        <>
           <div className="clock">
               {
                  [...Array(12)].map((e, i)=>
                     <div className="clock_number" style={{ "--rot" : `${(i+1)*30}deg`}} key={i}>
                         <span style={{"--rot" : `${(0 - ((i+1)*30))}deg`}}>{i+1}</span>
                     </div>   
                  )
               }
               <span className="clock_brand">EunBee</span>
               <span className="clock_madeIn">Made In Korea</span>
               <div className="clock_hands">
                   <div className="clock_hour" style={{ "--rot" : `${ time.hour * 30 }deg`}}></div>
                   <div className="clock_minutes" style={{ "--rot" : `${ time.minute * 6 }deg`}}></div>
                   <div className="clock_Black"></div>
                      <div className="clock_second" style={{ "--rot" : `${ time.second * 6 }deg`}}></div>
                   <div className="clock_Red"></div>
               </div>
               <div className="clock_glass"></div>
           </div>
        </>
    );
};

export default Clock;