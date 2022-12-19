import React from 'react'
import style from '../App.module.css'
function SingleTask({ task, isDone, isDelete }) {

    return (
        <>
            <div className={style.singleTask}>
                <span className={style.content}>
                    {task.task}
                    {console.log(task.isCompleted)}
                </span>
                <input className={style.selection} onClick={() => { task.isCompleted == false ? isDone(task) : isDelete(task) }} type={"radio"} />
            </div>
        </>
    )
}
// v788957699 
// v777777
export default SingleTask