import React from 'react';

const Done = props => {
    return (
        //display tasks in a card like UI, using bootstrap cards
        <div className="card border-dark mb-3">
            <div className="card-body">
                <h5 className="card-title"> {props.task.title} </h5>
                <h6 className="card-subtitle mb-2 text-muted"> ID:{props.task.id} </h6>
                <h6 className="card-subtitle mb-2 text-muted"> Type: {props.task.type} </h6>

                <button type="button"
                        onClick={() => props.markUndone(props.task)}
                        className="btn btn-primary btn-sm btn-block" style={{ float: 'left', padding: 0}}>
                    &lt; Request Re-Review
                </button>

                <button type="button"
                        onClick={() => props.markDone(props.task)}
                        className="btn btn-secondary btn-sm btn-block" style={{ float: 'right', padding: 0}}>
                    Delete
                </button>
            </div>
        </div>
    )
};

export default Done;