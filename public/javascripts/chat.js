const chatContainer = document.querySelector('#chat')

const socket = io()
console.log(socket)

function outputMessage(message, isMe=false){
    console.log(message,isMe)
}