import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      <div className="white-container">
        <div id="upper-container">
          <div id="header-container">
            <h1 className="header">HI !</h1>
            <div id="verification-container">
            <h2 className="sub-header">Your Account is Verified</h2>
            </div>
          </div>
          <div id="avatar-container">
            <div className="circle">
              <div id="avatar-head"></div>
              <div id="avatar-body"></div>
            </div>
          </div>
        </div>
        <div id="lower-container">
          <div id="paragraph-container">
          <p id="paragraph">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
