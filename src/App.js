import React from 'react';
import TextVoiceConverter from './TextVoiceConverter';
import './App.css';
import background from '../src/icons/containerimage.png';

const App = () => {
  return (
    <>
    <div className="App" style={{ backgroundImage: `url(${background})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>>
      <TextVoiceConverter />
    </div>
    <footer>
    <div class="footer-container">
      <div class="footer-icons">
        <ul>
          <li><a href="https://www.linkedin.com/in/nltkaczyk/" target="_blank"><i class="glyphicon glyphicon-cloud"></i></a></li>
          <li><a href="https://www.instagram.com/n.l.tkaczyk/" target="_blank"><i class="glyphicon glyphicon-cloud"></i></a></li>
          <li><a href="https://www.youtube.com/@n.l.tkaczyk/" target="_blank"><i class="glyphicon glyphicon-cloud"></i></a></li>
          <li><a href="https://www.youtube.com/@n.l.tkaczyk/" target="_blank"><i class="glyphicon glyphicon-cloud"></i></a></li>
          <li><a href="https://www.youtube.com/@n.l.tkaczyk/" target="_blank"><i class="glyphicon glyphicon-cloud"></i></a></li>
      </ul>
      </div>
    </div>

  <div class="copyright">
    <p>
      2024 db hackthon cognitive care app copyright
    </p>
  </div>
    </footer>
    </>
  );
};

export default App;
