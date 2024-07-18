import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import recordingGif from "./test.gif";
import botIcon from "./icons/bot.png";
import humanIcon from "./icons/human.png";
import AccordionFAQ from "./AccordianFAQ";

const TextVoiceConverter = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [speechRecognition, setSpeechRecognition] = useState(null);
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null); // Ref for scrolling to bottom

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

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Scroll to bottom whenever messages change

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
      handleStopListening();
    }
  };
  return (
    <div className="grid-container">
      <div className="container">
        <h1 className="title" style={{ textAlign: `center` }}>
          How can I help you?
        </h1>

        {messages.length ? (
          <div style={{ height: "73%", overflowY: "scroll", padding: "10px" }}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  margin: "10px 0",
                  textAlign: msg.from === "You" ? "right" : "left",
                }}
              >
                {msg.from === "bot" ? (
                  <div className="message bot-message">
                    <img src={botIcon} alt="Bot" />
                    <p
                      style={{
                        backgroundColor: "#e0e0e0",
                        padding: "10px",
                        overflow: "auto",
                        borderRadius: "5px",
                      }}
                    >
                      {` ${msg.text}`}
                    </p>
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
                    >
                      {` ${msg.text} `}
                    </p>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} /> {/* Scroll to bottom ref */}
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
          <div className={isListening ? "button-container-listening" : "button-container"}>
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
      </div>
      <div className="faq">
            <AccordionFAQ />
      </div>
    </div>
  );
};

export default TextVoiceConverter;
