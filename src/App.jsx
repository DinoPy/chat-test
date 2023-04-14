import { useState,useEffect } from 'react'
import './App.css'
import {TextInput} from './components/TextInput';
import {MessagesList} from './components/MessagesList';
import socket from './utils/socketManager.js';

function App() {
    const [messagesList, setMessagesList] = useState([]);

    useEffect(() => {
        const handleNewMessage = (data) => {
            setMessagesList(prev => [...prev, data.newMessage])
        }
        socket.on('newMessage',handleNewMessage )

        return (() => {
        socket.off('newMessage', handleNewMessage)

        })
    }, [])


  return (
      <>
            <TextInput setMessagesList={setMessagesList} />
            <MessagesList messagesList={messagesList} />
      </>
  )

}

export default App
