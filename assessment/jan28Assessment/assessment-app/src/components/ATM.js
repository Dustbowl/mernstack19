import React, { useState, useCallback } from "react"
export default function ATM() {
    const [deno, setDeno] = useState(0)
    const [denominations, update] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

    const calcDeno = useCallback(() => {
        let x = deno;
        let d1, d2, d5, d10, d20, d50, d100, d200, d500, d1000, d2000
        d1=d2=d5=d10=d20=d50=d100=d200=d500=d1000=d2000=0;
        d2000 = Math.floor(x / 2000);
        x = x % 2000
        d1000 = Math.floor(x / 1000);
        x = x % 1000
        d500 = Math.floor(x / 500);
        x = x % 500
        d200 = Math.floor(x / 200);
        x = x % 200
        d100 = Math.floor(x / 100);
        x = x % 100
        d50 = Math.floor(x / 50);
        x = x % 50
        d20 = Math.floor(x / 20);
        x = x % 20
        d10 = Math.floor(x / 10);
        x = x % 10
        d5 = Math.floor(x / 5);
        x = x % 5
        d2 = Math.floor(x / 2);
        x = x % 2
        d1 = Math.floor(x / 1);
        x = x % 1
        update([d1, d2, d5, d10, d20, d50, d100, d200, d500, d1000, d2000])},
    [deno])
    return(<>
        <div>
            <h3>ATM</h3>
                <input type='number' onChange={(e) => {setDeno(e.target.value)}}/>
                <button onClick={calcDeno}>Calculate</button>
        </div>
        <div>
            <tr>{deno}</tr>
            <tr>1 Notes: {denominations[0]}</tr>
            <tr>2 Notes: {denominations[1]}</tr>
            <tr>5 Notes: {denominations[2]}</tr>
            <tr>10 Notes: {denominations[3]}</tr>
            <tr>20 Notes: {denominations[4]}</tr>
            <tr>50 Notes: {denominations[5]}</tr>
            <tr>100 Notes: {denominations[6]}</tr>
            <tr>200 Notes: {denominations[7]}</tr>
            <tr>500 Notes: {denominations[8]}</tr>
            <tr>1000 Notes: {denominations[9]}</tr>
            <tr>2000 Notes: {denominations[10]}</tr>
        </div>
    </>)
}