import React, { useState } from "react"
export default function Hobby() {
    const [user, setUser] = useState({_id:""})
    const [hobbies, setHobbies] = useState([]);

    let handleLogin = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        let user = {
            username: formData.get("username"),
            password: formData.get("password"),
            email: formData.get("email"),
            phone: formData.get("phone")
        }

        console.log("saving user", user);
        const request = new Request("http://localhost:3001/user/api/signup", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        });
        fetch(request)
            .then( async (res) => {
                let user = await res.json();
                setUser(prevUser => {return user;});
            })
            .catch((err) => {
        })

        event.currentTarget.reset();
    }
    const getHobbies = () => {
        console.log("fetching hobbies for user", user)
        fetch(`http://localhost:3001/hobby/api/getHobbies/${user? user._id: ""}`, {})
            .then(async (res) => {
                const hobbies = await res.json();
                setHobbies(prevhobbies => hobbies);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const addHobby = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const hobbies = {
            userId: user._id,
            name: formData.get("name"),
        }
        const request = new Request("http://localhost:3001/hobby/api/saveHobby", {
            method: "POST",
            body: JSON.stringify(hobbies),
            headers: {
                "Content-Type": "application/json"
            }
        })
        fetch(request)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return(<>
        <div>
        <h3>Sign In</h3>
            <form onSubmit={handleLogin} method="POST">
                Username:<input type="username" name="username" id="username" required/><br/>
                Password:<input type="password" name="password" id="password" required/><br/>
                Email:<input type="email" name="email" id="email" /><br/>
                Phone:<input type="phone" name="phone" id="phone" /><br/>
                <button type="submit">sign in</button>
            </form>
        </div>
        <h3>Hobbies</h3>
        <form onSubmit={addHobby} method="POST">
            Name:<input type="name" name="name" id="name" required/><br/>
            <button type="submit">add</button>
        </form>
        
        <div>
            <h3>Hobby List</h3>
            <button onClick={getHobbies}>Get Hobbies</button>
            {hobbies.map((item) => (
                <tr>
                    <td>{item.name}</td>
                </tr>
            ))}
        </div>
    </>)
}