import React, { useState, useEffect } from "react"
export default function TimeNow() {

    var [date, setDate] = useState(new Date());

    useEffect(() => {
        const time = setInterval(() => {
            setDate(new Date());
        },1000);
        return () => {
            clearInterval(time);
        }
    }, [date])

    return(<>
        <div>
            {date.toLocaleString()}
        </div>
    </>)
}