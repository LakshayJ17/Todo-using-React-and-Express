export function CreateTodo(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    return <div>
        <input type="text" id="title" className="m-4 p-4" placeholder="Enter title" /> <br />
        <input type="text" id="desc" className="m-4 p-4" placeholder="Enter description" /> <br />

        <button onClick={()=>{
            fetch("http://localhost:3000/todos",{
                method : "POST",
                body: { 
                    title : title,
                    description : description
                }
            })
            .then(async function(res){
                const json = await res.json()
                alert("Todo added successfully")
            })
        }}>Add a Todo</button>
    </div>
}