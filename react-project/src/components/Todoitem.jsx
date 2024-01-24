import './Todoitem.css'
import MaterialIcon from 'material-icons-react'

export default function Todoitem ({title,onDelete,onComplete, isCompleted}) {
    function OnDeleteCLick(_event){
        onDelete(title);
    }
    function OnCompleteClick(_event){
        onComplete(title);
    }

    return (
        <div className="todo-item">
            <div className='todo-title'>{title}</div>
            <div className='icons-group'>
               {!isCompleted && <div className="todo-complete" onClick={OnCompleteClick}>
                    <MaterialIcon icon='task_alt' color='#fff' />
                </div>}
                <div className="todo-delete" onClick={OnDeleteCLick}>
                    <MaterialIcon icon='delete' color='#fff' />
                </div>
            </div>
           
        </div>
    )
}