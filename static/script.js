async function sendMessage() {

    const input = document.getElementById("message");
    const chat = document.getElementById("chat-box");

    const message = input.value.trim();

    if (!message) return;

    chat.innerHTML += `<div class="user">You: ${message}</div>`;

    input.value = "";

    const res = await fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: message
        })
    });

    const data = await res.json();

    chat.innerHTML += `<div class="bot">Bot: ${data.response}</div>`;

    chat.scrollTop = chat.scrollHeight;
}

document.getElementById("message").addEventListener("keydown", e => {
    if (e.key === "Enter") sendMessage();
});