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
*JSX - it not pure Javascript (JS engine won't understand this, it understand only ECMAScript)*
const jsxHeading = <h1>JSX Heading 😈</h1>;

#7
//JSX - it not pure Javascript (JS engine won't understand this, it understand only ECMAScript)
//it is working because of Parcel
//JSX code is transpiled (converted to a code that React can understand)
const jsxHeading = <h1 id="heading">JSX Heading 😈</h1>;

-Parcel is doing that for us.
Parcel is manager and it depends on Babel to that 

#8
why className and not class?
As class is a reserved keyword in JavaScript

#9
JSX 

- You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.
-By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.



