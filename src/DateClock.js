import React, {useState, useEffect} from "react";



export default function DateClock() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
       const interval =  setInterval(() => {
            setDate(new Date());
        }, 1000);
       return () => clearInterval(interval)
    }, [])
    
    
    return (
    <div>
        <p>{date.toDateString()}</p>
        <p>{date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()}</p>
    </div>
    )
}