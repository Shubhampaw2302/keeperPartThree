import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [change, setChange] = React.useState({
    title: "",
    content: ""
  });

  const [expand, setExpand] = React.useState(false)


  function handleChange(event) {
    const { name, value } = event.target;
    setChange(prevVal => {
      if (name === "title") {
        return {
          title: value,
          content: prevVal.content }
        
      } else if (name === "content") {
        return {
          title: prevVal.title,
          content: value
        }
      }
    })
  }

  function handleClick() {
    setExpand(true)
  }

  return (
    <div>
      <form className="create-note">
        {expand && <input onChange={handleChange} name="title" placeholder="Title" value={change.title} autoComplete="off" />}
        <textarea onChange={handleChange} onClick={handleClick} name="content" placeholder="Take a note..." rows={expand ? "3" : "1"} value={change.content} />
      <Zoom in={expand}>
        <Fab onClick={(event) => {
          event.preventDefault();
          props.add(change);
          setChange({title: "", content: ""});
        }}><AddIcon /></Fab>
      </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;










// import React from "react";
// //import Note from "./Note";

// function CreateArea() {
//   const [change, setChange] = React.useState({
//     title: "",
//     content: ""
//   });

//   const [note, setNote] = React.useState([])

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setChange(prevVal => {
//       if (name === "title") {
//         return {
//           title: value,
//           content: prevVal.content }
        
//       } else if (name === "content") {
//         return {
//           title: prevVal.title,
//           content: value
//         }
//       }
//     })
//   }

//   function handleClick(event) {
//     event.preventDefault();
//     setNote(prevVal => {
//       return [...prevVal, {title: change.title, content: change.content}]
//     })
//     console.log(note)
//     setChange({title: "", content: ""})
//   }

//   return (
//     <div>
//       <form>
//         <input onChange={handleChange} name="title" placeholder="Title" value={change.title} autoComplete="off" />
//         <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={change.content} />
//         <button onClick={handleClick}>Add</button>
//       </form>
//     </div>
//   );
// }

// export default CreateArea;
