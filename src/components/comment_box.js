import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * grabs the entire import file
import * as actions from '../actions';

class Comment_Box extends Component {
    constructor(props) {
        super(props);

        this.state = { comment: '' };
    }
    
    handleChange(event) {
        this.setState({ comment: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
                <textarea value={this.state.comment} onChange={this.handleChange.bind(this)}/>
                <div>
                    <button action="submit">Submit Comment</button>
                </div>
            </form>
        )
    }
}

export default connect(null, actions)(Comment_Box);