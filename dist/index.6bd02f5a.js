/**
 * NESTED ELEMENTS
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1> </h1>
 *      </div>
 * </div>
 * 
 */ //CREATEELEMENT - TYPE OF ELEMENT, PROPERTIES, CHILDREN - ARRAY TYPE FOR SIBLING CHILD
//it gets very tedious if we use this approach, because that will have more nexted divs - NOW COMES THE PICUTE OF JSX
const heading = React.createElement("h1", {
    id: "heading",
    xyz: "abc"
}, "Hello world from h1");
//<h1 id="heading" xyz="abc">Hello world from React</h1> - adding attribute 
// these are the props - 
// children : "Hello world from React"
// id: "heading"
// xyz: "abc"
const heading2 = React.createElement("h2", {
    id: "heading",
    xyz: "abc",
    key: "hbsdj"
}, "Hello world from h2");
const childDiv = React.createElement("div", {
    id: "child"
}, [
    heading,
    heading2
]);
const parent = React.createElement("div", {
    id: "parent"
}, [
    childDiv,
    childDiv
]);
/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1 id="heading" xyz="abc">Hello world from React</h1>
 *      </div>
 * </div>
 * 
 * {
    "id": "parent",
    "children": {
        "type": "div",
        "key": null,
        "ref": null,
        "props": {
            "id": "child",
            "children": {
                "type": "h1",
                "key": null,
                "ref": null,
                "props": {
                    "id": "heading",
                    "xyz": "abc",
                    "children": "Hello world from React"
                },
                "_owner": null,
                "_store": {}
            }
        },
        "_owner": null,
        "_store": {}
    }
}
 * ReactELement(Object) => HTML (Browser Understands)
 */ console.log(heading); //this will return an object, heading is an object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //WHY React is a library ?
 /** React can work independently as a library in smaller section of the code 
 * like if we need it only for the footer or header - it is a library
 * React comes with  helper function to develop our app this is not the case with other framworks, 
 * the other FW can only be applied to whole app while React can be applied to small piece of code
 * by using CDN links we can just add it for onle element of HTML of app - sidebar, page
 * ALSO Order of files matters a lot
 * */ 

//# sourceMappingURL=index.6bd02f5a.js.map
