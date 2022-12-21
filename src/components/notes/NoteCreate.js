
import React from "react";
import { connect } from "react-redux";
import { createNote } from "../../actions";
import withNavigate from "../../utils/history";
import NoteForm from "./NoteForm";

class NoteCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createNote(formValues);
  };
  render() {
    return (
      <div>
        <h3>Note Create</h3>
        <NoteForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createNote: createNote})(
  withNavigate(NoteCreate)
);




// import React, { useState } from "react";


// const NoteCreate = () => {
//   const [formData, setFormData] = useState(new FormData());
//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.id]: [event.target.value] });
//   };
//   const onFormSubmit = (e) => {
//     e.preventDefault();
//     // alert(formData.title);
//     // const data = new FormData(e.target);
//     // data.append('title', )
//     fetch("http://127.0.0.1:8000/api/new/", {
//       method: "POST",
//       body: JSON.stringify({ formData }),
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((res) => res.json())
//       .then((json) => setFormData(json.formData));
//   };

//   return (
//     <form className="ui form" onSubmit={onFormSubmit}>
//       <div className="field">
//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           id="title"
//           value={formData.title}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="field">
//         <label htmlFor="body">Text</label>
//         <textarea
//           id="body"
//           value={formData.body}
//           onChange={handleChange}
//         ></textarea>
//       </div>
//       {/* {formData.errors.name && <p>{formData.errors.name}</p>} */}
//       <button className="ui button" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default NoteCreate;
