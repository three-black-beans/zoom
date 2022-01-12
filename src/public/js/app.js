const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");
const frontsocket = new WebSocket(`ws://${window.location.host}`);

frontsocket.addEventListener("open", () => {
  console.log("Connected to Server ✅");
});

frontsocket.addEventListener("message", (message) => {
  console.log("New message: ", message.data);
});

frontsocket.addEventListener("close", () => {
  console.log("Disconnected from Server ❌");
});

function handleSubmit(event) {
    event.preventDefault();
    const input = messageForm.querySelector("input");
    console.log(input.value);
}

messageForm.addEventListener("submit", handleSubmit);