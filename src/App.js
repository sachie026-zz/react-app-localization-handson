import React from 'react';
import './App.css';
import {IntlProvider} from "react-intl";
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';

function App() {
  return (   
      <IntlProvider locale='en'>
       <div className="App">
         Hello!
         <p>
    <FormattedHTMLMessage id="app.text"
                      defaultMessage="Hello!<br/>"
                      description="Welcome header on app main page"
                      values={{ what: 'react-intl' }}/>
</p>
<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    <FormattedMessage id="app.learn-react-link"
                      defaultMessage="Learn React"
                      description="Link on react page"/>
</a>
       </div>
    </IntlProvider>
  );
}

export default App;
