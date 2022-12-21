import React, { useState } from "react";
import useFetch from "../../utils/useFetch";

const NoteCreate = () => {
  const [formData, setFormData] = useState(new FormData());
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: [event.target.value] });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    // alert(formData.title);
    // const data = new FormData(e.target);
    // data.append('title', )
    fetch("http://127.0.0.1:8000/api/new/", {
      method: "POST",
      body: JSON.stringify({ formData }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => setFormData(json.formData));
  };

  return (
    <form className="ui form" onSubmit={onFormSubmit}>
      <div className="field">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          value={formData.body}
          onChange={handleChange}
        ></textarea>
      </div>
      {/* {formData.errors.name && <p>{formData.errors.name}</p>} */}
      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default NoteCreate;
// const LoginForm = () => {
//   const [form, setForm] = React.useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (event) => {
//     setForm({
//       ...form,
//       [event.target.id]: event.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     alert(form.email + ' ' + form.password);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="email">Email</label>
//         <input
//           id="email"
//           type="text"
//           value={form.email}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password</label>
//         <input
//           id="password"
//           type="password"
//           value={form.password}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };
