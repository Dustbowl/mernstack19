import React, { useState, useEffect } from "react"
export default function TimeNow() {

    var [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setDate(new Date());
        },1000);
    })

    return(<>
        <div>
            {date.toTimeString()}
        </div>
    </>)
}