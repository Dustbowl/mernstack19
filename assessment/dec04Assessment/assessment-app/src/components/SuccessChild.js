import React from "react"
export default function SuccessChild(props) {
    return(<>
        <div>
            <b>{props.name}</b>
            <br></br>
            <b>{props.address}</b>
            {props.comp}
        </div>
    </>)
}