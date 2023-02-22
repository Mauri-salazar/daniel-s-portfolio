import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Wrapper from './Components/Wrapper';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Wrapper>
      <App />
    </Wrapper>
);

