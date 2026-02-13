/* "use strict";

const container = document.querySelector(".js-container");

const ChatInput = () => {
  return (
    <>
      <input placeholder="Send a message to Chatbot" />
      <button>Send</button>
    </>
  );
};

function ChatMessage({ message, sender }) {
  return (
    <div>
      {sender === "robot" && <img src="../Images/robot.png" width="50" />}
      {message}
      {sender === "user" && <img src="../Images/user.png" width="50" />}
    </div>
  );
}

function ChatMessages() {
  const array = React.useState([
    {
      message: "hello chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello! How can I help you?",
      sender: "robot",
      id: "id2",
    },
    {
      message: "can tell me todays date?",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today is October 3",
      sender: "robot",
      id: "id4",
    },
  ]);

  const chatMessage = array[0];
  const setChatMessage = array[1];

  function sendMessage() {
    setChatMessage([
      ...chatMessage,
      {
        message: "testing",
        sender: "user",
        id: crypto.randomUUID()
      }
    ])
  }

  return (
    <>
      <button onClick={sendMessage}>Send a Message</button>

      {chatMessage.map((cm) => {
        return (
          <ChatMessage message={cm.message} sender={cm.sender} key={cm.id} />
        );
      })}
    </>
  );
}

function App() {
  return (
    <>
      <ChatInput />
      <ChatMessages />
    </>
  );
}

ReactDOM.createRoot(container).render(<App />);
 */

// Component ported from https://codepen.io/JuanFuentes/full/rgXKGQ
// Font used - https://compressa.preusstype.com/
  
import TextPressure from './TextPressure';

// Note:
// Make sure the font you're using supports all the variable properties. 
// React Bits does not take responsibility for the fonts used

<div style={{position: 'relative', height: '300px'}}>
  <TextPressure
    text="Hello!"
    flex
    alpha={false}
    stroke={false}
    width
    weight
    italic
    textColor="#ffffff"
    strokeColor="#5227FF"
    minFontSize={36}
  />
</div>