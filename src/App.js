import './App.css';
import Header from "./components/Header";
import AddForm from "./components/AddForm"
import Item from "./components/Item"
import { useState,useEffect } from "react";

function App() {
  const[task,setTask] = useState(JSON.parse(localStorage.getItem("task")) || [])
  const[title,setTitle]=useState("");
  const[editId,setEditId]=useState(null);
  const[theme,setTheme] = useState("daymode")

  useEffect(()=>{
    localStorage.setItem("task",JSON.stringify(task))
  },[task])
  
  function deleteTask(id){
    const result = task.filter(item=>item.id!==id)
    setTask(result);
  }

  function saveTask(e){
    e.preventDefault(); //ไม่ต้องมีการเคลียข้อมูลในฟอร์ม
    if(!title){
      alert("please enter your task")
    }else if(editId){
      const updateTask = task.map((item)=>{
        //รายการใดมีรหัสตรงกับรหัสแก้ไข
        if(item.id===editId){
          return{...item,title:title}
        }
        return item;
      })
      setTask(updateTask)
      setEditId(null)
      setTitle("")
    }else{
      //เพิ่มรายการใหม่
      const newTask = {
        id:Math.floor(Math.random()*100),
        title:title
      }
      setTask([...task,newTask])
      setTitle("")
    }
  }

  function editTask(id){
    setEditId(id)
    const editTask = task.find((item)=>item.id===id)
    setTitle(editTask.title)
  }

  return (
    <div className={"App "+theme}>
      <Header theme={theme} setTheme={setTheme} />
      <div className='container'>
        <AddForm title={title} setTitle={setTitle} saveTask={saveTask} editId={editId}/>
        <section>
          {
            task.map((data)=>(
              <Item key={data.id} data={data} deleteTask={deleteTask} editTask={editTask}/>
            ))
          }
        </section>
      </div>
    </div>
  );
}

export default App;
