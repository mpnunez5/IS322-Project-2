import React from 'react';

class AddTask extends React.Component {
  state = { newTask: '',
            newTaskType: ''}

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.newTask, this.state.newTaskType);
    this.setState({ newTask: '' , newTaskType: ''})
  }

  render() {
    return (
      <div className="card border-dark mb-3">
        <div className="card-body" style={{padding: 10}}>
          <h5 className="card-title text-md-center">Task Manager</h5>

          <form className="task-input form-group" onSubmit={this.onFormSubmit}>

            <label htmlFor="newTask">Enter New Task Name</label>
            <input type="text" className="form-control"
                   name="newTask"
                   value={this.state.newTask}
                   onChange={(e) => this.setState({ newTask: e.target.value })} />


            <label htmlFor="type">Type of Task</label>
            <select id="type" className="form-control"
                    value={this.state.newTaskType}
                    onChange={(e) => this.setState({ newTaskType: e.target.value })}>
              <option selected>Choose...</option>
              <option value="Task">Task</option>
              <option value="Feature">Feature</option>
              <option value="Bug">Bug</option>
            </select>

            <button type="submit" className="btn-sm btn-primary">Add Task</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddTask;