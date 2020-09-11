import React, { Component } from 'react';
import {createUser} from '../action';
import {connect} from 'react-redux'

class CreateUser extends Component {
    state = {
        name: '', 
        email : ''
    }

    handleOnChange = e => {
        this.setState({ [e.target.name] : e.target.value })
    }

    handleOnSubmit = (e) => {
       e.preventDefault();
       this.props.createUser(this.state);
    }

    render() { 
        return (
        <div className='container my-5'>

            <h3>Create User Form</h3>
            <form onSubmit={e =>this.handleOnSubmit(e)} className='form-group'>
                <div className='form-group'>
                    <input 
                        type='text' 
                        name= 'name'
                        placeholder = 'Enter Your Name'
                        className='form-control' 
                        value={this.state.name}  
                        onChange={e => this.handleOnChange(e)}  />
                </div>
                <div className='form-group'>
                    <input 
                        type='text'
                        name= 'email'
                        placeholder = 'Enter your Email Id'
                        className='form-control' 
                        value={this.state.email} 
                        onChange={e => this.handleOnChange(e)}  />
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>  );
    }
}
 
export default connect(null, {createUser})(CreateUser);