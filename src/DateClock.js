import React, {useState, useEffect} from "react";



export default function DateClock(props) {
    const [date, setDate] = useState(new Date());
    const theDate = date.toDateString();
    //const theTime = (date.getHours()<10?'0':'') + date.getHours() + ':' + (date.getMinutes()<10?'0':'') + date.getMinutes();
    
    useEffect(() => {
       const interval =  setInterval(() => {
            setDate(new Date());
        }, 1000);
       return () => clearInterval(interval)
    }, [])
    
    //<p className="time">{theTime}</p>
    return (
    <div className="date-time">
        <p className="date">{theDate}</p>
        
    </div>
    )
}