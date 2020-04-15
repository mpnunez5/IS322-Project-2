import React from 'react';

import ToDo from './TaskItems/ToDo';
import InProgress from './TaskItems/InProgress';
import Review from './TaskItems/Review'
import Done from './TaskItems/Done';

const MOBILE_BREAKPOINT = 768;

class TaskList extends React.Component {
  state = {
    view: '',
    browserWidth: 0,
    breakpoint: 'mobile'
  }

  onViewChange(view) {
    this.setState({ view });
    console.log(this.state.view);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  handleResize = () => {
    const browserWidth = window.innerWidth;
    let breakpoint = 'mobile';

    if (browserWidth > MOBILE_BREAKPOINT ){
      breakpoint = 'desktop';
    }
    else{
      breakpoint = 'mobile';
    }

    this.setState({ breakpoint, browserWidth });
  }

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
      return <ToDo task={task} key={task.id}  markDone={this.markDone} markUndone={this.markUndone}/>
    });

    const InProgressItem = this.props.tasks.filter(task => task.column === 'in-progress').map(task => {
      return <InProgress task={task} key={task.id}  markDone={this.markDone} markUndone={this.markUndone}/>
    });

    const ReviewItem = this.props.tasks.filter(task => task.column === 'review').map(task => {
      return <Review task={task} key={task.id}  markDone={this.markDone} markUndone={this.markUndone}/>
    });
    const DoneItem = this.props.tasks.filter(task => task.column === 'done').map(task => {
      return <Done task={task} key={task.id}  markDone={this.markDone} markUndone={this.markUndone}/>
    });

    if(this.state.breakpoint==='mobile'){
      return(
          <div>
            <ul className="list-group list-group-vertical">
            <li className="list-group-item list-group-item-danger"><h3>To Do</h3>
              <ul className="list-group">
                <li>{ToDoItem}</li>
              </ul>
            </li>

            <li className="list-group-item list-group-item-warning"><h3>In Progress</h3>
              <ul className="list-group">
                <li>{InProgressItem}</li>
              </ul>
            </li>

            <li className="list-group-item list-group-item-primary"><h3>Review</h3>
            <ul className="list-group">
              <li>{ReviewItem}</li>
            </ul>
            </li>

            <li className="list-group-item list-group-item-success"><h3>Done</h3>
              <ul className="list-group">
                <li>{DoneItem}</li>
              </ul>
            </li>
            </ul>
            </div>
          )
        } else{

          return(
            //bootstrap to make the columns horizontal
            <ul className="list-group list-group-horizontal">

              <li className="list-group-item list-group-item-danger"><h3>To Do</h3>
                <ul className="list-group">
                  <li>{ToDoItem}</li>
                </ul>
              </li>

              <li className="list-group-item list-group-item-warning"><h3>In Progress</h3>
                <ul className="list-group">
                  <li>{InProgressItem}</li>
                </ul>
              </li>

              <li className="list-group-item list-group-item-primary"><h3>Review</h3>
                <ul className="list-group">
                  <li>{ReviewItem}</li>
                </ul>
              </li>

              <li className="list-group-item list-group-item-success"><h3>Done</h3>
                <ul className="list-group">
                  <li>{DoneItem}</li>
                </ul>
              </li>
            </ul>
          )
        }
      }
}

export default TaskList;