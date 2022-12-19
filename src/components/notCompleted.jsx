import React, { Component } from 'react'
import SingleTask from './SingleTask'
class notCompleted extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const isDone = (task) => {
            console.log(task);
            this.props.changeInTask(task);
        }
        const { tasks } = this.props;
        return (
            <>
                {tasks.map((task) => {
                    if (task.isCompleted == false)
                        return <SingleTask isDone={isDone} key={task.id} task={task}></SingleTask>

                })

                }
                {/* {console.log(tasks[0] + ",HeereUn")} */}
            </>
        )
    }
}

export default notCompleted