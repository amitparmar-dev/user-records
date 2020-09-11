import _ from 'lodash';

export const UserReducer = (state = {}, action ) =>{

    switch(action.type){
        case 'CREATE_USER':
            return {...state,[action.payload.id]: action.payload};

        case 'LIST_USER':
                return {...state,..._.mapKeys(action.payload, 'id') };
        default : 
            return state; 
    }

}
