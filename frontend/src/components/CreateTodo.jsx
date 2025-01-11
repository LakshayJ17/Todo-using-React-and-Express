import React, { useState } from "react";

export function CreateTodo() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return <div>
        <input
            type="text"
            className="m-2 p-2 border border-gray-300 rounded"
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
        />
        <br />

        <input
            type="text"
            className="m-2 p-2 border border-gray-300 rounded"
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
        />
        <br />

        <button
            className="m-2 p-2 bg-blue-500 text-white rounded"
            onClick={() => {
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(async function (res) {
                        const json = await res.json()
                        alert("Todo added successfully")
                    })
            }}>Add a Todo</button>
    </div>
}