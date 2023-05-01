import api from "../../api/api";

export const reducer = (state, action) => {
    switch(action.type){
        case 'GET_MESSAGES':
            //payload is array of messages from database which was successful
            const newState = action.payload;
            
            return newState;
        
        default:
            return state;
    }
}

const getMessages = dispatch => {
    return async() => {
        try{ 
            const response = await api.get('/messages')
            console.log(response.data)
            dispatch({type: 'GET_MESSAGES', payload: response.data});
            
        } catch (e){
            console.log(e);
        }
    }
};

const addMessage = dispatch => {
    return (message) => {
        try {
            api.post('/messages', {
                "username": "Platinum",
                "title": "Bruh I need a app",
                "message": message,
                "avatar": 'https://images.unsplash.com/photo-1516224498413-84ecf3a1e7fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
            }).then((response) => {
                console.log(response.data);
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const actions = {
    getMessages,
    addMessage
}


