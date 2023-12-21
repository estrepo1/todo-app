import { useState } from "react";



const  Todo =()=> {
    const [currentTodo, setCurrentTodo] = useState("")
    const [allTodos, setAllTodos] = useState([]);
    const [editIndex, setEditIndex] = useState(undefined)
    const handleOnChange = (event) => {
        // console.log("called",event.target.value);
        setCurrentTodo(event.target.value)
    }
    const handleSubmit = () => {
        // console.log("submit clicked")
        if (editIndex != undefined) {
            const newTodos = allTodos.map((todo, index) => {
                if (index == editIndex) return currentTodo;
                return todo;
            })
            setAllTodos(newTodos)
            setCurrentTodo("")
        } else {

            if (currentTodo.length > 0) {
                setAllTodos([...allTodos, currentTodo]);
                setCurrentTodo("")
            }
        }
    }
    const handleEdit = (eIndex) => {
        // console.log("called")
        // console.log(alltodos[eIndex])
        setCurrentTodo(allTodos[eIndex])
        setEditIndex(eIndex)
    }
    function delTodo(todoIndex){
        setAllTodos((allTodos)=>
          allTodos.filter((allTodos,prevTodoIndex)=> {
            return prevTodoIndex != todoIndex
          })
        )
    }
    return (
        <div >
            <h1>todo</h1>
            <input type="text" onChange={handleOnChange} value={currentTodo} style={{ marginRight: 20 }} />
            <button onClick={handleSubmit}  >Submit</button>


            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">sl no</th>
                        <th scope="col">Data</th>
                        <th scope="col">modify</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allTodos.map((todo, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{todo}</td>
                                    <td>
                                        <button onClick={() => { handleEdit(index) }}>Edit</button>
                                        <button onClick={()=>delTodo(index)}>delete</button>
                                    </td>

                                </tr>

                            )

                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
export default Todo;