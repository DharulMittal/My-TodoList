import React from 'react'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const MainTodo = () => {

    const [todo, setTodo] = useState("")
    const [TodoList, setTodoList] = useState([])
    const [showcompleted, setShowcompleted] = useState(true)

    useEffect(() => {
        let data = localStorage.getItem("taskList")
        if (data) {
            data = JSON.parse(localStorage.getItem("taskList"))
            setTodoList(data)
        }
    }, [])
    

    const saveList = () => {
        localStorage.setItem("taskList", JSON.stringify(TodoList))
    }

    const saveTodo = () => {
        setTodoList([...TodoList, { id: uuidv4(), todo, isCompleted: false }])
        setTodo("")
        saveList()
    }

    const editTodo = (e, id) => {
        let tsk = TodoList.filter((i) => {
            return i.id == id
        })
        setTodo(tsk[0].todo)
        let newlst = TodoList.filter((i) => {
            return i.id !== id
        })
        setTodoList(newlst)
        saveList()
    }

    const deleteTodo = (e, id) => {
        let newlst = TodoList.filter((i) => {
            return i.id !== id
        })
        setTodoList(newlst)
        saveList()
    }

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const taskcheckbox = (e) => {
        let id = e.target.name;
        let newtodo = [...TodoList]
        for (let i = 0; i < newtodo.length; i++) {
            const e = newtodo[i];
            if (e.id == id) {
                newtodo[i].isCompleted = !newtodo[i].isCompleted
            }
        }
        setTodoList(newtodo);
        saveList()
    }

    const toggleshowcomp = () => {
        setShowcompleted(!showcompleted)
    }

    return (
        <>
            <div className='bg-[#ffff0026] pt-[20px] min-h-[95vh]'>
                <div className="container border-[1px] md:w-[60%] lg:w-[40%] m-auto min-h-[80vh] bg-[#ffff0071] p-[15px] rounded-2xl">

                    <h1 className='text-center text-xl font-bold'>
                        My TodoList
                    </h1>

                    <h2 className='text-lg font-bold ' >
                        Add Task
                    </h2>
                    <div className="flex justify-around my-[5px]">
                        <input type="text" onChange={handleChange} autoFocus value={todo} className='rounded-[15px] w-[75%] px-[10px] text-sm' />
                        <button onClick={saveTodo} className='bg-[#a54e4eac] rounded-[15px] w-[15%] hover:bg-[#a54e4e] '>Save</button>
                    </div>


                    <input type="checkbox" name="Show Completed" id="showcompleted" checked={showcompleted} onChange={toggleshowcomp} className='mt-[10px]' />
                    <label htmlFor="showcompleted" className='mx-[5px]'>Show Completed Tasks</label>


                    <h2 className='text-lg font-bold mt-2 ' >
                        Your Tasks
                    </h2>

                    <div className="tasks">

                        {TodoList.map(item => {

                            return (showcompleted || !item.isCompleted ) && <div key={item.id} className="flex gap-[5px] justify-between px-[15px]">
                                <div className='flex gap-[20px] items-center w-[75%]'>
                                    <input type="checkbox" onChange={taskcheckbox} name={item.id} id={item.id} checked={item.isCompleted}/>
                                    <div className={item.isCompleted ? "line-through w-[75%] overflow-hidden" : "w-[75%] overflow-hidden"} >{item.todo}</div>
                                </div>

                                <div className="flex btns gap-2 items-center">
                                    <button onClick={(e) => editTodo(e, item.id)} className='bg-[#a54e4eac] hover:bg-[#a54e4e] rounded-[12px] py-[1px] px-[10px] my-[3px]' >Edit</button>
                                    <button onClick={(e) => deleteTodo(e, item.id)} className='bg-[#a54e4eac] hover:bg-[#a54e4e] rounded-[12px] py-[1px] px-[10px] my-[3px]' >Delete</button>
                                </div>
                            </div>



                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainTodo
