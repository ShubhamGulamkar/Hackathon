import React, { useState } from "react";
import "../css/Form.css";
import axios from "axios";
import swal from "sweetalert";
function Form() {
  const [userInput, setUserInput] = useState({
    age: 0,

    gender: "",

    height: 0,

    weight: 0,

    familyHistory: "",

    workInterfere: "",

    remoteWork: "",

    benefits: "",

    careOption: "",

    wellnessProgram: "",

    seekHelp: "",

    anonymity: "",

    mentalHealthConsequence: "",

    physicalHealthConsequence: "",

    coworkers: "",

    supervisor: "",

    mentalHealthInterview: "",

    physicalHealthInterview: "",

    mentalVsPhysical: "",

    obsConsequence: "",
  });

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Perform any necessary logic or API calls with the user input here

  //   console.log(userInput);
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserInput((prevInput) => ({
      ...prevInput,

      [name]: value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const obj = {
      age: userInput.age,

      gender: userInput.gender,

      height: userInput.height,

      weight: userInput.weight,

      familyHistory: userInput.familyHistory,

      workInterfere: userInput.workInterfere,

      remoteWork: userInput.remoteWork,

      benefits: userInput.benefits,

      careOption: userInput.careOption,

      wellnessProgram: userInput.wellnessProgram,

      seekHelp: userInput.seekHelp,

      anonymity: userInput.anonymity,

      mentalHealthConsequence: userInput.mentalHealthConsequence,

      physicalHealthConsequence: userInput.physicalHealthConsequence,

      coworkers: userInput.coworkers,

      supervisor: userInput.supervisor,

      mentalHealthInterview: userInput.mentalHealthInterview,

      physicalHealthInterview: userInput.physicalHealthInterview,

      mentalVsPhysical: userInput.mentalVsPhysical,

      obsConsequence: userInput.obsConsequence,
    };

    console.log(obj);

    let resp;

    try {
      resp = await axios.post("https://localhost:7136/api/User/signup", obj);

      console.log(resp.data);

      console.log(resp.status);

      swal("Data Added ");

      //navigate("/");
    } catch (error) {
      console.log(error);

      if (error.code === "ERR_BAD_RESPONSE") {
        swal("Data not added");

        return;
      }

      //console.log("maybe problem in Signin page data");
    }
  };
  return (
    <div className="App">
      <div className="auth-form-container">
        <h1>Employee Mental Health Data</h1>

        <form className="login-form" onSubmit={submitHandler}>
          <label className="label-text">Age:</label>
          <input
            className="input-text"
            type="number"
            name="age"
            min="18"
            max="100"
            value={userInput.age}
            onChange={handleChange}
          />
          <br />
          <label className="label-text">Gender</label>
          <select
            className="input-text"
            name="gender"
            value={userInput.gender}
            onChange={handleChange}
          >
            <option value="">- Select -</option>

            <option value="Yes">Male</option>

            <option value="No">Female</option>
            <option value="No">Other</option>
          </select>
          <br />
          <label className="label-text">Height (in cm):</label>
          <input
            className="input-text"
            type="number"
            name="height"
            min="100"
            max="300"
            value={userInput.height}
            onChange={handleChange}
          />
          <br />
          <label className="label-text">Weight (in kg):</label>
          <input
            className="input-text"
            type="number"
            name="weight"
            min="10"
            max="500"
            value={userInput.weight}
            onChange={handleChange}
          />
          <br />
          <label className="label-text">
            Do you have a family history of mental illness?
          </label>
          <select
            className="input-text"
            name="familyHistory"
            value={userInput.familyHistory}
            onChange={handleChange}
          >
            <option value="">- Select -</option>

            <option value="Yes">Yes</option>

            <option value="No">No</option>
          </select>

          {/* Render the rest of the input fields here */}
          <br />
          <label className="label-text">
            If you have a mental health condition, do you feel that it interfers
            with your work?
          </label>
          <select
            className="input-text"
            name="workInterfere"
            value={userInput.workInterfere}
            onChange={handleChange}
          >
            <option value="">- Select -</option>

            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          {/* Render the rest of the input fields here */}
          <br />
          <label className="label-text">
            Do you work remotely (outside of an office) at least 50% of the
            time?
          </label>
          <select
            className="input-text"
            name="remoteWork"
            value={userInput.remoteWork}
            onChange={handleChange}
          >
            <option value="">- Select -</option>

            <option value="Yes">Yes</option>

            <option value="No">No</option>
          </select>

          <br />
          <label className="label-text">
            Does Employer provide Mental Health Benefit?
          </label>
          <select
            className="input-text"
            name="benefits"
            value={userInput.benefits}
            onChange={handleChange}
          >
            <option value="">- Select -</option>

            <option value="Yes">Yes</option>

            <option value="No">No</option>
          </select>

          <br />
          <label className="label-text">
            Do you know the options for mental health care your employer
            provides?
          </label>
          <select
            className="input-text"
            name="careOption"
            value={userInput.careOption}
            onChange={handleChange}
          >
            <option value="">- Select -</option>

            <option value="Yes">Yes</option>

            <option value="No">No</option>
          </select>

          <br />
          <label className="label-text">
            Has your employer ever discussed mental health as part of an
            employee wellness program?
          </label>
          <select
            className="input-text"
            name="wellnessProgram"
            value={userInput.wellnessProgram}
            onChange={handleChange}
          >
            <option value="">- Select -</option>

            <option value="Yes">Yes</option>

            <option value="No">No</option>
          </select>

          <br />
          <label className="label-text">
            Does your employer provide resources to learn more about mental
            health issues and how to seek help?
          </label>
          <select
            className="input-text"
            name="seekHelp"
            value={userInput.seekHelp}
            onChange={handleChange}
          >
            <option value="">- Select -</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <br />
          <label className="label-text">
            Is your anonymity protected if you choose to take advantage of
            mental health or substance abuse treatment resources?
          </label>
          <select
            className="input-text"
            name="anonymity"
            value={userInput.anonymity}
            onChange={handleChange}
          >
            <option value="">- Select -</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <br />
          <label className="label-text">
            Do you think that discussing a mental health issue with your
            employer would have negative consequences?
          </label>
          <select
            className="input-text"
            name="mentalHealthConsequence"
            value={userInput.mentalHealthConsequence}
            onChange={handleChange}
          >
            <option value="">- Select -</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <br />
          <label className="label-text">
            Do you think that discussing a physical health issue with your
            employer would have negative consequences?
          </label>
          <select
            className="input-text"
            name="physicalHealthConsequence"
            value={userInput.physicalHealthConsequence}
            onChange={handleChange}
          >
            <option value="">- Select -</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <br />
          <label className="label-text">
            Willingness to discuss mental health with coworkers?
          </label>
          <select
            className="input-text"
            name="coworkers"
            value={userInput.coworkers}
            onChange={handleChange}
          >
            <option value="">- Select -</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <br />

          <label className="label-text">
            Willingness to discuss mental health with supervisor?
          </label>
          <select
            className="input-text"
            name="supervisor"
            value={userInput.supervisor}
            onChange={handleChange}
          >
            <option value="">- Select -</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <br />
          <label className="label-text">
            Would you bring up a mental health issue with a potential employer
            in a interview?
          </label>
          <select
            className="input-text"
            name="mentalHealthInterview"
            value={userInput.mentalHealthInterview}
            onChange={handleChange}
          >
            <option value="">- Select -</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <br />
          <label className="label-text">
            Would you bring up a physical health issue with a potential employer
            in a interview?
          </label>
          <select
            className="input-text"
            name="physicalHealthInterview"
            value={userInput.physicalHealthInterview}
            onChange={handleChange}
          >
            <option value="">- Select -</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <br />
          <label className="label-text">
            Do you feel that your employer takes mental health as seriously as
            physical health ?
          </label>
          <select
            className="input-text"
            name="mentalVsPhysical"
            value={userInput.mentalVsPhysical}
            onChange={handleChange}
          >
            <option value="">- Select -</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <br />

          <label className="label-text">
            observed negative consequences for coworkers with mental health
            conditions?
          </label>
          <select
            className="input-text"
            name="obsConsequence"
            value={userInput.obsConsequence}
            onChange={handleChange}
          >
            <option value="">- Select -</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <br />

          <button className="button1" type="submit" onClick={submitHandler}>
            Submit
          </button>
        </form>

        <h2>User Input:</h2>

        <ul>
          {Object.entries(userInput).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Form;
