import { useState, useEffect } from "react";
import socket from '../utils/socketManager'

export const TextInput = ({setMessagesList}) => {
    const [message,setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage('');
        if (message.length > 0) socket.emit('newMessage', {newMessage: message})
    }

    useEffect(() => {
        const handleMessage = (data) => {
            console.log(data);
        }
        socket.on('newMessage', handleMessage)

        return(() => {
            socket.off('newMessage',handleMessage)
        })
    },[])

    return (
            <form onSubmit={handleSubmit}>
                  <input onChange={(e) => setMessage(e.target.value) } value={message}/>
            </form>
    )
}

