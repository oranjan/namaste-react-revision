
const heading = React.createElement(
  "h1", // type of the element
  { id: "heading" }, // props (attributes for the element)
  "react with cdn" // children (content inside the element) 
);

// console.log(heading);
// object

// {
//     key:"",
// type:"h1"
//     props:{
//         "id":1
//         "children":'some text'
//     },
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);// object to h1 tag puts it to dom 

