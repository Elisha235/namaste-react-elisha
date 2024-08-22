import React from "react";
import ReactDOM from "react-dom/client";

//React Element - as it is React.createElement => Object => renders on DOM then it becomes HTML
const heading = React.createElement("h1", {id:"heading"}, "Namaste React 💻 🚀");

//JSX - it not pure Javascript (JS engine won't understand this, it understand only ECMAScript)
//it is working because of Parcel
//JSX code is transpiled (converted to a code that React can understand)
const jsxHeading = <h1 id="heading" className="head">JSX Heading 😈</h1>;

//whatever happens in React app it will render inside React app
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
