import React, {useState, useEffect} from "react";



export default function DateClock(props) {
    const [date, setDate] = useState(new Date());
    const theDate = date.toDateString();
    const theTime = date.getHours() + ':' + (date.getMinutes()<10?'0':'') + date.getMinutes()  + ':' +( date.getSeconds()<10?"0":"") + date.getSeconds();
    
    useEffect(() => {
       const interval =  setInterval(() => {
            setDate(new Date());
        }, 1000);
       return () => clearInterval(interval)
    }, [])
    
    
    return (
    <div className="date-time">
        <p className="date">{theDate}</p>
        <p className="time">{theTime}</p>
    </div>
    )
}