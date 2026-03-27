
const chatBox = document.getElementById("chatBox");
const input = document.getElementById("messageInput");


function addMessage(text, type) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", type);

    const message = document.createElement("div");
    message.textContent = text;

    const time = document.createElement("div");
    time.classList.add("timestamp");
    const now = new Date();
    let hours = now.getHours();     
    
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    
    time.textContent = `${hours}:${now.getMinutes()} ${ampm}`;

    messageDiv.appendChild(message);
    messageDiv.appendChild(time);

    chatBox.appendChild(messageDiv);
}

function sendMessage() {
    addMessage(input.value, "sent");
    input.value = "";
    sendReply();
}

function sendReply() {
    setTimeout(() => {
        addMessage("Hello", "received");
    }, Math.random() * 2000 + 1000);
}

const sendButton = document.getElementById("send").addEventListener("click", sendMessage);