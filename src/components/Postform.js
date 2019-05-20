import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createPost} from '../actions/postActions';

class PostForm extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            title:'',
            content:''
        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit(e)
    {
        e.preventDefault();
        const post={
            title: this.state.title,
            content:this.state.content
        };

        this.props.createPost(post);

    }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
                <br/>
            </div>
            <br/>
            <div>
                <label>Body:</label>
                <textarea name="content" value={this.state.content} onChange={this.onChange} />
                <br/>
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
    createPost : PropTypes.func.isRequired
}

export default connect(null,{createPost}) (PostForm);