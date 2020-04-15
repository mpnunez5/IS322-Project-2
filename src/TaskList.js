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
    const ToDoItem = this.props.tasks.filter(task => task.column === 'todo').map(task => {
      return <TaskItem task={task} key={task.id}  markUp={this.markUp} markDown={this.markDown}/>
    });

    const InProgressItem = this.props.tasks.filter(task => task.column === 'in-progress').map(task => {
      return <TaskItem task={task} key={task.id}  markUp={this.markUp} markDown={this.markDown}/>
    });

    const ReviewItem = this.props.tasks.filter(task => task.column === 'review').map(task => {
      return <TaskItem task={task} key={task.id}  markUp={this.markUp} markDown={this.markDown}/>
    });
    const DoneItem = this.props.tasks.filter(task => task.column === 'done').map(task => {
      return <TaskItem task={task} key={task.id}  markUp={this.markUp} markDown={this.markDown}/>
    });

    return (
      //bootstrap to make the columns horizontal
      <ul className="list-group list-group-horizontal">

        <li className="list-group-item list-group-item-danger"><h3>To Do</h3>
          <ul className="list-group"> <li>{ ToDoItem }</li></ul>
        </li>

        <li className="list-group-item list-group-item-warning"><h3>In Progress</h3>
          <ul className="list-group"> <li>{ InProgressItem }</li></ul>
        </li>

        <li className="list-group-item list-group-item-primary"><h3>Review</h3>
          <ul className="list-group"> <li>{ ReviewItem }</li></ul>
        </li>

        <li className="list-group-item list-group-item-success"><h3>Done</h3>
          <ul className="list-group"> <li>{ DoneItem }</li></ul>
        </li>

      </ul>

    )
  }
}

export default TaskList;