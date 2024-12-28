/*document.addEventListener("DOMContentLoaded", () => {
    const chatInput = document.querySelector("#textarea");
    const sendChatBtn = document.querySelector("#send_Btn");
  
    console.log("chatInput:", chatInput);
    console.log("sendChatBtn:", sendChatBtn);
  
    if (chatInput && sendChatBtn) {
      const handleChat = (event) => {
        // Prevent form submission if the button is inside a form
        event.preventDefault();
  
        const userMessage = chatInput.value.trim();
        if (userMessage) { //Prevents sending empty messages
          console.log("User message:", userMessage);
          chatInput.value = ""; //Clears the input field after sending
        }
      };
  
      sendChatBtn.addEventListener("click", handleChat);
  
      chatInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          handleChat(event); // Call the same handler for Enter key
        }
      });
  
      console.log("Event listeners added to chat input and send button");
    } else {
      console.error("Chat input or send button not found");
    }
  }); */

/*document.addEventListener("DOMContentLoaded", () => {
  const chatInput = document.querySelector("#textarea");
  const sendChatBtn = document.querySelector("#send_Btn");

  // Log elements to ensure they are correctly selected
  console.log("chatInput:", chatInput);
  console.log("sendChatBtn:", sendChatBtn);

  // Check if elements exist before adding event listeners
  if (chatInput && sendChatBtn) {
    const handleChat = (event) => {
      // Prevent default behavior (useful if button is in a form)
      event.preventDefault();

      const userMessage = chatInput.value.trim(); // Get trimmed input value
      if (userMessage) {
        console.log("User message:", userMessage); // Log the message to the console
        chatInput.value = ""; // Clear the input field
      } else {
        console.log("Cannot send an empty message.");
      }
    };

    // Event listener for button click
    sendChatBtn.addEventListener("click", handleChat);

    // Event listener for pressing "Enter" key
    chatInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        handleChat(event); // Call the same handler
      }
    });

    console.log("Event listeners added to chat input and send button");
  } else {
    console.error("Chat input or send button not found");
  }
}); */
document.addEventListener("DOMContentLoaded", () => {
  const chatInput = document.querySelector("#textarea");
  const sendChatBtn = document.querySelector("#send_Btn");
  const chatbox = document.querySelector(".chatbox"); // The chat container

  console.log("chatInput:", chatInput);
  console.log("sendChatBtn:", sendChatBtn);
  console.log("chatbox:", chatbox);

  if (chatInput && sendChatBtn && chatbox) {
    const handleChat = (event) => {
      event.preventDefault();

      const userMessage = chatInput.value.trim();
      if (userMessage) {
        // Add user's message to the chatbox
        const userChat = document.createElement("li");
        userChat.classList.add("chat", "outgoing");
        userChat.innerHTML = `<p>${userMessage}</p>`;
        chatbox.appendChild(userChat);

        chatInput.value = ""; // Clear the input field

        // Simulate a chatbot response after a short delay
        setTimeout(() => {
          const botResponse = document.createElement("li");
          botResponse.classList.add("chat", "incoming");
          botResponse.innerHTML = `
            <span class="material-symbols-outlined">smart_toy</span>
            <p>Thanks for your message! How can I assist you further?</p>`;
          chatbox.appendChild(botResponse);

          // Scroll to the bottom of the chatbox
          chatbox.scrollTop = chatbox.scrollHeight;
        }, 1000); // 1-second delay for chatbot response
      } else {
        console.log("Cannot send an empty message.");
      }
    };

    // Add event listeners for the send button and Enter key
    sendChatBtn.addEventListener("click", handleChat);
    chatInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        handleChat(event);
      }
    });

    console.log("Event listeners added to chat input, send button, and chatbox");
  } else {
    console.error("Chat input, send button, or chatbox not found");
  }
});
