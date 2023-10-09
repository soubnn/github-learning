import { useFormik } from "formik";
import "./App.css";
import axios from "axios";

function App() {
  const form = useFormik({
    initialValues: {
      reg_number: "",
      dob: "",
    },
    onSubmit: (values) => {
      console.log(values);
       
    },
  });

  const { values, handleChange, handleSubmit } = form;
  axios.post('http://localhost:3001', values).then(res => {
    alert('saved')
  })

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Reg Number</label>
          <input
            name="reg_number"
            value={values.reg_number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">DOB</label>
          <input name="dob" value={values.dob} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;