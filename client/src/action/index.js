import axios from '../API/axios';

export const createUser = user => async dispatch => {
  let response = await axios.post('/users',user);
    dispatch({type: 'CREATE_USER', payload : response.data});
}

export const listUser = () => async dispatch =>{
    let response = await axios.get('/users');
    dispatch({type:'LIST_USER', payload : response.data});
}

export const editUser = (user) =>{
    return({type : 'EDIT_USER', 
             payload : user
        })
}

export const deleteUser = (id) =>{
    return({type : 'DELETE_USER',
            payload : id
        })
}