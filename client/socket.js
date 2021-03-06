import io from 'socket.io-client';
import store, {} from './store';

const socket = io(window.location.origin);

socket.on('connect', () => {
  console.log('I am now connected to the server!')

  socket.on('new-message', message => {
    console.log('emitted message', message)
    // store.dispatch(sendMessageThunk(message))
  })
})

export default socket
