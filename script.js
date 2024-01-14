const chatInput=document.getElementById('chat-input');
const sendButton = document.getElementById('send-btn');
const chatContainer=document.querySelector('.chat-container');
const API_KEY ="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";

let userText=null;

const createElement=(html,className)=>{
    // create new div and apply chat, specified class and set html content of div
    const chatDiv=document.createElement("div");
    chatDiv.classList.add("chat", className);
    chatDiv.innerHTML=html;
    return chatDiv;//return the chatdiv that you have created
}

const showTypingAnimation = ()=>{
    // same like outgoing chat div add dotanimation div
    const html=` <div class="chat-content">
                     <div class="chat-details">
                        <img src="./images/chatbot.jpg" alt="">
                        <div class="typing-animation">
                            <div class="typing-dot" style="animation-delay: 0.2s;"></div>
                            <div class="typing-dot" style="animation-delay: 0.3s;"></div>
                            <div class="typing-dot" style="animation-delay: 0.4s;"></div>
                        </div>
                     </div>
                     <span class="material-symbols-rounded">content_copy</span>
                </div>`
// created an ougoing chat div and added userText in it
const outgoingChatDiv=createElement(html,"outgoing");
chatContainer.appendChild(outgoingChatDiv);
}

const getChatResponse = async()=>{
    // const API_URL="https://api.openai.com/v1/chat/completions"

    // const requestOptions={
    //     method: "POST",
    //     headers:{
    //         "Content-Type":"application/json",
    //         "Authorization":`Bearer ${API_KEY}`
    //     },
    //     body: JSON.stringify(
    //         {
    //             model: "text-davinci-003",
    //             prompt:userText,
    //             max_tokens:2048,
    //             temperature:0.2,
    //             n:1,
    //             stop:null
    //         }
    //     )
    // }
    // try{
    //     const response = (await fetch(API_URL,requestOptions));
    //     const data = await(response.json());
    //     console.log(data);
    // }
    // catch(error){
    //     console.log(error);
    // }
     
}
handleOutgoingChat=()=>{
    userText=chatInput.value.trim();
    console.log(userText);
    const html=`<div class="chat-content">
                    <div class="chat-details">
                        <img src="./images/user.jpg" alt="">
                        <p>${userText}</p>
                    </div>
                </div>`
    // created an ougoing chat div and added userText in it
    const outgoingChatDiv=createElement(html,"outgoing");
    chatContainer.appendChild(outgoingChatDiv);
    setTimeout(showTypingAnimation,500);
    getChatResponse()
}




sendButton.addEventListener('click',handleOutgoingChat);