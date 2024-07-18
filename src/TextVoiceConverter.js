import React, { useState, useEffect } from "react";
import "./App.css";
import recordingGif from "./test.gif";
import botIcon from "./icons/bot.png";
import humanIcon from "./icons/human.png";
import background from "../src/icons/background1.png";
import AccordionFAQ from "./AccordianFAQ";
/*<button className="button" onClick={handleSpeak}>Convert Text to Voice</button>*/
// {text && <button className="button" onClick={handleSpeak}>Listen entered query</button>}
const TextVoiceConverter = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [speechRecognition, setSpeechRecognition] = useState(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.interimResults = true;
      recognition.onresult = (event) => {
        setText(event.results[0][0].transcript);
      };
      recognition.onerror = (event) => {
        console.log(event);
        alert(event.error);
      };
      setSpeechRecognition(recognition);
    } else {
      alert("Speech Recognition not supported in this browser.");
    }
  }, []);

  const handleSpeak = (inputText) => {
    const utterance = new SpeechSynthesisUtterance(inputText);
    window.speechSynthesis.speak(utterance);
  };

  const handleListen = () => {
    if (speechRecognition) {
      setIsListening(true);
      speechRecognition.start();
    }
  };

  const handleStopListening = () => {
    if (speechRecognition) {
      setIsListening(false);
      speechRecognition.stop();
    }
  };
  const clearText = () => {
    setText("");
  };

  const sendMessage = async () => {
    const message = text;
    if (message) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, from: "You" },
      ]);
      setText("");

      //const response = await axios.post('http://localhost:8080/messages', { message });
      const response = { data: { reply: "Hello from db hackathon" } };

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.data.reply, from: "bot" },
      ]);
      handleSpeak(response.data.reply);
    }
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };
  return (
    <div className="grid-container">
      <div className="container">
        <h1 className="title" style={{ textAlign: `center` }}>
          How can I help you?
        </h1>

        {messages.length ? (
          <div style={{ height: "50vh", overflowY: "scroll", padding: "10px" }}>
            {messages.map((msg, index) => {
              console.log("msg is..", msg);
              return (
                <div
                  key={index}
                  style={{
                    margin: "10px 0",
                    textAlign: msg.from === "You" ? "right" : "left",
                  }}
                >
                  {msg.from === "bot" ? (
                    <div className="message bot-message">
                      {" "}
                      <img src={botIcon} alt="Bot" />
                      <p
                        style={{
                          backgroundColor: "#e0e0e0",
                          padding: "10px",
                          overflow: "auto",
                          borderRadius: "5px",
                        }}
                      >{` ${msg.text}`}</p>
                    </div>
                  ) : (
                    <div className="human-message">
                      <img src={humanIcon} alt="Human" />
                      <p
                        style={{
                          marginRight: "0.5rem",
                          backgroundColor: "#e1e9f9",
                          padding: "10px",
                          overflow: "auto",
                          borderRadius: "5px",
                        }}
                      >{` ${msg.text}  `}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : null}

        <div class="container-text">
          <input
            type="text"
            id="textArea"
            className="text-area"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyUp={(e) => {
              handleEnter(e);
            }}
            placeholder="Type your query here..."
          />
          <div class="submit-container">
            <button class="button" onClick={sendMessage}>
              Submit
            </button>
          </div>
        </div>

        <div
          className={
            isListening ? "button-container-listening" : "button-container"
          }
        >
          {isListening && (
            <img src={recordingGif} style={{ width: "8%", height: "8%" }} />
          )}
          <button
            className="button btn btn-green"
            onClick={isListening ? handleStopListening : handleListen}
          >
            {isListening ? "Stop Recording" : "Start recording your query"}
          </button>
        </div>
      </div>
      <div className="faq">
            <AccordionFAQ />
      </div>
    </div>
  );
};

export default TextVoiceConverter;
