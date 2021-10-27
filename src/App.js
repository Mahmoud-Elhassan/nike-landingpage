import React from "react";
// components
import Content from "./components/Content";
import Header from "./components/Header";

// styles
import "./styles/App.scss";

function App() {
    return (
        <div className="App">
            <div className="main">
                <Header />
                <Content />
                {/* <div className="shape"></div> */}
            </div>
        </div>
    );
}

export default App;
