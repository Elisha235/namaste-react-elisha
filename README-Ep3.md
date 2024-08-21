#1
We can create our own script to build our prod ready app
package.json - we add our script to run our dev command 
this can be used 

- npm run start or npm start (only for start keyword)
"start": "parcel index.html"
- npm run build
 "build": "parcel build index.html"

#2
React.createElement(tag, id, string);

it will be rendered in root and will be rendered by ReactDOM

const root = ReactDOM.createElement(document.getElementById("root"));
root.render(heading)

#3
  <div id="root">
        <h1>Not Rendered</h1> 
    </div>

it is good to keep this as a fallback when there is any issue in App

#4
when React was build we used createElement to create h1, divs and span tags
soon devs realise this is not developer friendly, for nested structure

Facebook developers created JSX
It is a JAvascript Syntax

React and JSX are different.
We can write React without JSX also
but JSX makes coding easy.

#5
const jsxHeading = <h1>JSX Heading 😈</h1>;

JSX is not HTML inside Javascript.
*It is HTML LIKE SYNTAX or XLM LIKE.*

#6


