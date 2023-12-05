import "./Item.css";
import { GoTrash } from "react-icons/go";
import { GoPencil } from "react-icons/go";
export default function Item(props){
    const{data,deleteTask,editTask} = props
    return(
        <div className="list-item">
            <p className="title">{data.title}</p>
            <div className="btn-container">
                <GoTrash className="btn" onClick={()=>deleteTask(data.id)}/>
                <GoPencil className="btn" onClick={()=>editTask(data.id)}/>
                
            </div>
        </div>
    );
}