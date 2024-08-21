import React from "react";
import ReactDOM from "react-dom/client";

//React Element - as it is React.createElement => Object => renders on DOM then it becomes HTML
const heading = React.createElement("h1", {id:"heading"}, "Namaste React 💻 🚀");

//JSX
const jsxHeading = <h1>JSX Heading 😈</h1>;

//whatever happens in React app it will render inside React app
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
