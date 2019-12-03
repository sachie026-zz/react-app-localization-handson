import React from 'react';
import './App.css';
import {IntlProvider} from "react-intl";
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';

import Parent from "./components/parent"

import messages_de from "./translations/de.json";
import messages_en from "./translations/en.json";


const messages = {
    'de': messages_de,
    'en': messages_en
};


let language = navigator.language.split(/[-_]/)[0]; 
language = "de";


function App() {
  return (   
      <IntlProvider locale={language} messages={messages[language]}>
       <div className="App">
          Hello! <br/>
          <FormattedMessage id="app.text"/> <br/><br/>
          <FormattedHTMLMessage id="app.text"/>
          <br/>
          <FormattedMessage id="app.learn-react-link"/> <br/><br/>
          <FormattedHTMLMessage id="app.learn-react-link"/>
          <br/> <br/>
          <Parent/>
       </div>
    </IntlProvider>
  );
}

export default App;
