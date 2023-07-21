import React from "react";
import ReactDOM from "react-dom";
const HeadingComponent = () => (<h1>
    Hello from react using jsx 
    </h1>);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
