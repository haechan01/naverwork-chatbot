import logo from './logo.svg';
import './App.css';
import {useState, useEffect } from 'react'

function App() {
  const [result,setResult] = useState([])
  const myHeaders = new Headers();

  const myRequest = new Request('https://auth.worksmobile.com/oauth2/v2.0/authorize', {
    method: 'GET',
    headers: myHeaders,
    mode: 'no-cors',
    client_id:'https://auth.worksmobile.com/oauth2/v2.0/authorize',
    redirect_url: 'http://localhost:3000/',
    scope: 'bot',
    response_type: "code",
    state:'test'
  });
  useEffect(()=> {
    setResult(fetch(myRequest))
    console.log(result,'---------')
  },[])
  console.log(result,'-----77----')
  const test = () => {
    setResult(fetch(myRequest))

  }

  // fetch('https://auth.worksmobile.com/oauth2/v2.0/token', {
  //   method: POST,
  //   headers: {
  //     'Content-Type': 'Content-Type: application/x-www-form-urlencoded'
  //   },
  //   body: {
  //     code: ,
  //     grant_type: ,
  //     client_id:
  //     client_secret: 
  //   }
  //})


  // fetch('https://www.worksapis.com/v1.0/bots', {
  //   method: 'POST',
  //   headers: {
  //     'Authorization': 'Bearer '+token,
  //     'Content-Type': 'application/json'
  //   },
  //   body: {
  //     "botName": "OBC bot",
  //     "photoUrl": "https://example.com/favicon.png",
  //     "description": "OBC alarm bot that sends messages",
  //     "administrators": [
  //       "d191e339-3299-44e6-7a44-04d9cb01a5e0"
  //     ],
  //     "subadministrators": [
  //       "e417a131-a56d-44a4-5304-033e16fca8d1"
  //     ],
  //     "allowDomains": [
  //       10000001
  //     ],
  //     "enableCallback": true,
  //     "callbackEvents": [
  //       "text",
  //       "location",
  //       "sticker",
  //       "image",
  //       "file"
  //     ],
  //     "callbackUrl": "https://example.com/callback",
  //     "enableGroupJoin": true,
  //     "defaultRichmenuId": "40001",
  //     "i18nBotNames": [
  //       {
  //         "language": "en_US",
  //         "botName": "Example bot"
  //       }
  //     ],
  //     "i18nDescriptions": [
  //       {
  //         "language": "en_US",
  //         "description": "Example description"
  //       }
  //     ],
  //     "i18nPhotoUrls": [
  //       {
  //         "language": "en_US",
  //         "photoUrl": "https://example.com/favicon.png"
  //       }
  //     ]
  //   }
  // })
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div onClick={()=> test()}>
          click
        </div>
      </header>
    </div>
  );
  
}

export default App;
