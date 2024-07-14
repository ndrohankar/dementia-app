import React, { useState, useEffect } from 'react';
import './App.css';
import recordingGif from './test.gif';
    /*<button className="button" onClick={handleSpeak}>Convert Text to Voice</button>*/
 // {text && <button className="button" onClick={handleSpeak}>Listen entered query</button>}
const TextVoiceConverter = () => {
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [speechRecognition, setSpeechRecognition] = useState(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.onresult = (event) => {
        setText(event.results[0][0].transcript);
      };
      setSpeechRecognition(recognition);
    } else {
      alert('Speech Recognition not supported in this browser.');
    }
  }, []);

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
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
  const clearText=()=> {
              setText('');
          }
 return (
     <div className="container">
       <h1 className="title" style={{textAlign:`center`}}>How can I help you?</h1>
       <div className={`avatar`}></div>
<div class="container-text">
       <textarea
       id="textArea"
         className="text-area"
         rows="6"
         value={text}
         onChange={(e) => setText(e.target.value)}
         placeholder="Type your query here..."
       />
       <button class="clear-btn" onClick={clearText}>Clear</button>
       </div>
         <div> <h5 style={{textAlign:`center`}}>{`OR`}</h5></div>
       <div className={isListening? "button-container-listening":"button-container"}>

{isListening && <img src={recordingGif} style={{width:'8%',height:'8%'}}/>}
         <button className="button btn btn-green" onClick={isListening ? handleStopListening : handleListen}>


           {isListening ? 'Stop Recording' : 'Start recording your query'}

         </button>
       </div>
     </div>
   );
};

export default TextVoiceConverter;
