import React from "react"
export default function SuccessStory(props) {
    let sendDataBack = ()=>{
        props.callBackEvent("not Nothing")
    }
    return(<>
        <div>
        Everyone gets a little down in the dumps sometimes. 
        Rather than searching the internet for cat pictures or drowning your sorrows in junk, check out these motivational short stories
            <button onClick={()=>sendDataBack()} >Send To Parent</button>
        </div>
    </>)
}