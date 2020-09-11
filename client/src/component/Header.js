import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const appTitle =  {textDecoration: "none", fontSize : "30px" , display : "inline", color: "white"}
const navLink =  {textDecoration: "none", fontSize : "20px" , display : "inline", marginLeft:"50px", color : "white" }

class Header extends Component {
        state = {  }
    render() { 
        return (
        <nav>
                <Link to ='/' style={appTitle} >User Records</Link>
                <Link to='/createUser' style={navLink}>Create User</Link>
        </nav>  );
    }
}
 
export default Header;