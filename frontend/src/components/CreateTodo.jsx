import React, { useState } from "react";

export function CreateTodo() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return <div>
        <input
            type="text"
            className="m-4 p-4"
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)
            }
        /> <br />

        <input
            type="text"
            className="m-4 p-4"
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)
            } 
        /> <br />

        <button 
        onClick={() => {
            fetch("http://localhost:3000/todos", {
                method: "POST",
                body: {
                    title: title,
                    description: description
                },
                headers: {
                    "Content-Type ": "application/json"
                }
            })
                .then(async function (res) {
                    const json = await res.json()
                    alert("Todo added successfully")
                })
        }}>Add a Todo</button>
    </div>
}