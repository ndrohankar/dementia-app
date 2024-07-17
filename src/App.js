import React from 'react';
import TextVoiceConverter from './TextVoiceConverter';
import './App.css';
import background from '../src/icons/containerimage.png';

const App = () => {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>>
      <TextVoiceConverter />
    </div>
  );
};

export default App;
