import React from 'react';

import TaskItem from './TaskItem';

class TaskList extends React.Component {

  markDone = (task) => {
    const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
    let taskList = this.props.tasks;

    if(task.column==='todo')
      task.column='in-progress';
    else if(task.column==='in-progress')
      task.column='review';
    else if(task.column==='review')
      task.column='done';
    else if (task.column==='done') {
      taskList.splice(taskIndex, 1);
    }
    console.log(this.props);
    this.props.onUpdateTaskList(taskList);
  }

  markUndone = (task) => {
    const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
    let taskList = this.props.tasks;

    if(task.column==='todo')
      taskList.splice(taskIndex,1);
    else if(task.column==='in-progress')
      task.column='todo';
    else if(task.column==='review')
      task.column='in-progress';
    else if (task.column==='done'){
      task.column='review';
    }
    console.log(task,task.column);
    this.props.onUpdateTaskList(taskList);
  }

  render() {
    const ToDoList = this.props.tasks.filter(task => task.column === 'todo').map(task => {
      return <TaskItem task={task} key={task.id}  markUp={this.markUp} markDown={this.markDown}/>
    });

    const InProgressList = this.props.tasks.filter(task => task.column === 'in-progress').map(task => {
      return <TaskItem task={task} key={task.id}  markUp={this.markUp} markDown={this.markDown}/>
    });

    const ReviewList = this.props.tasks.filter(task => task.column === 'review').map(task => {
      return <TaskItem task={task} key={task.id}  markUp={this.markUp} markDown={this.markDown}/>
    });
    const DoneList = this.props.tasks.filter(task => task.column === 'done').map(task => {
      return <TaskItem task={task} key={task.id}  markUp={this.markUp} markDown={this.markDown}/>
    });

    return (
        <div>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item list-group-item-secondary"><h3>To Do</h3> <ul className="list-group"> <li>{ ToDoList }</li></ul> </li>

            <li className="list-group-item list-group-item"><h3>In Progress</h3> <ul className="list-group"> <li>{ InProgressList }</li></ul> </li>
            <li className="list-group-item list-group-item-secondary"><h3>Review</h3> <ul className="list-group"> <li>{ ReviewList }</li></ul> </li>
            <li className="list-group-item list-group-item"><h3>Done</h3> <ul className="list-group"> <li>{ DoneList }</li></ul> </li>
          </ul>
        </div>
    )
  }
}

export default TaskList;