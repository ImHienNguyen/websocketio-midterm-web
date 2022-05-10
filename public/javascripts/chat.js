const chatContainer = document.querySelector('.chat-messages')
const chat = document.querySelector('#chat')
const currentEmail = document.querySelector('#currentUserEmail').dataset.currentid
const currentRoom = document.querySelector('#idRoom').dataset.idroom
const chatForm = document.querySelector('#chat-form')
const myMsg = document.querySelector('#msg')

const socket = io()
console.log(socket)

socket.emit('join', { email: currentEmail, room: currentRoom })


socket.on("message", (messageInfo) => {
    console.log(messageInfo)
    printMessage(messageInfo)
    chatContainer.scrollTop = chatContainer.scrollHeight;
})


function printMessage(message) {
    console.log(message)
    const messageClass = message.email === currentEmail ? "hoder me" : "hoder"
    const messageBox = `
        <div class="${messageClass}">
            <div class="content">${message.msg}</div>
        </div>
    `
    chat.insertAdjacentHTML('beforeend', messageBox)
}

chatForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    socket.emit('chat', myMsg.value)
    myMsg.value = ""
})


