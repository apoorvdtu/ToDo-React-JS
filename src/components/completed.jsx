import React, { Component } from 'react'
import SingleTask from './SingleTask';
class completed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isDelete = (task) => {
      this.props.deleteTask(task);
    }
    const { tasks } = this.props;
    return (
      <>
        {tasks.map((task) => {
          if (task.isCompleted) {
            console.log(task.content);
            return <SingleTask isDelete={isDelete} key={task.id} task={task}></SingleTask>
          }
        })

        }
      </>
    )
  }
}

export default completed