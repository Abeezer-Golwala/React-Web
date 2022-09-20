import logo from './logo.svg';
import './App.css';
import clevertap from 'clevertap-web-sdk';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBxlcYq8Sp7zuE6J5E1tbprdFtUV-DXbUA",
  authDomain: "androidclevertaptest.firebaseapp.com",
  projectId: "androidclevertaptest",
  storageBucket: "androidclevertaptest.appspot.com",
  messagingSenderId: "540192587568",
  appId: "1:540192587568:web:3eb5fea21d2364ddc3d2f5",
  measurementId: "G-2K896CT56J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
clevertap.init('TEST-468-W87-546Z')
clevertap.setLogLevel(3)

function App() {
  
  clevertap.event.push('Product Viewed', {
    "Product name": "Casio Chronograph Watch",
    "Category": "Mens Accessories",
    "Price": 59.99,
    "Date": new Date()
  });
  clevertap.notifications.push({
    "titleText":'Would you like to receive Push Notifications?',
    "bodyText":'We promise to only send you relevant content and give you updates on your transactions',
    "okButtonText":'Sign me up!',
    "rejectButtonText":'No thanks',
    "askAgainTimeInSeconds":10,
    "okButtonColor":'#f28046'}
    );
    clevertap.event.push("AbWebpop1");
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
      </header>
    </div>
  );
}

export default App;
