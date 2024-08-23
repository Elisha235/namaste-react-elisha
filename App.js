import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 💻 🚀"
);

//React 
const jsxHeading = (
    <span className="elemy" tabIndex="1">
      React Element 😈
    </span>
  );


const Title = () => (
  <h1 id="heading" className="head" tabIndex="1">
    JSX Heading 😈
  </h1>
);

// React Components => Two Types of Components
// Class Based COmponent - old practice
// Functional Component - new way

//React Functional Component - simple JS function - Capital Letter Class is must
//it can return bunch of React Element
const HeadingComponent = () => {
  return (
    <div id="container">
      {jsxHeading} <h2>{500}</h2>
      {console.log("Arre! Ye kis line mein aagye hai aap!")}
      <Title />
      {Title()}
      <h1 className="heading">Functional Component</h1>
    </div>
  );
};

//whatever happens in React app it will render inside React app
const root = ReactDOM.createRoot(document.getElementById("root"));

//we render React Element like this 
//root.render(jsxHeading);

//render React Component
root.render(<HeadingComponent />)
