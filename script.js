document.getElementById("submit-btn").addEventListener("click", function () {
  sendToChatGPT();
});

function sendToChatGPT() {
  let value = document.getElementById("word-input").value;

  let body = {
  model: "openai/gpt-3.5-turbo", 
  messages: [{ role: "user", content: value }],
  temperature: 1,
};


  
  axios
    .post("http://localhost:3000/chat", body)
    .then((response) => {
      let reply = response.data.reply;
      document.getElementById("reply-container").textContent = reply;
    })
    .catch((err) => {
      document.getElementById("reply-container").textContent =
        "Error getting response.";
      console.error(err);
    });
}
