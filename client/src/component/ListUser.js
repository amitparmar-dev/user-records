import React, { Component } from 'react';
import {connect} from 'react-redux'

import {listUser} from '../action/'

class ListUser extends Component {  

    componentDidMount(){
        this.props.listUser();
    }

    renderUsers(){
                    return this.props.users.map(user => {       
                                                return <tr key={user.id}>
                                                        <td>{user.name}</td> 
                                                        <td>{user.email}</td>
                                                        </tr>
                                    });
                }
    render(){ 
        return (<div className='container my-5'>
                    <h3>User List Page</h3>
                        <table className='table table-bordered table-hover'>
                            <thead>
                                <tr> <th>User Name </th><th>User Email </th></tr>
                            </thead>
                            <tbody>
                                {this.renderUsers()}
                            </tbody>
                        </table>         
                </div>);}
}

const mapStateToProps = (state) =>{  
     return({users : Object.values(state.users)})
 }
export default connect(mapStateToProps,{listUser})(ListUser);