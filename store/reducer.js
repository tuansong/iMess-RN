// import io from 'react-native-socket.io-client';

// // Connect to server 

// const socket = io('http://localhost:4080', {
//     query: `username = ${props.username}`
// }).connect()
// // listen for message from server 
// socket.on('server:message', message => {
//     addMessage(message);
// })

// addMessage = message => {
//     const message = initState;
//     message.push(message);
//     initState = message
// }


const initState = {
    data: [
        {name: 'Song', id: '001'},
        {name: 'Giang', id: '002'},
        {name: 'So', id: '003'}
    ],
    message: null
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        // case 'NEW_MESS': {
        //     const messObject = {
        //         username: action.name,
        //         message: action.message
        //     }
        //     socket.emit('client:message', messObject);
        //     messObject.fromMe = true;
        //     addMessage(messObject);
        //     return {
        //         ...state,
        //         state
        //     }
        // }
    }
    return state
}

export default reducer;