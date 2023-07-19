import React, { useState } from "react";

const Input_form = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulating remote API call
    setTimeout(() => {
      setIsLoading(false);
      alert(`Selected option: ${selectedOption}`);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Do you have a history of mental family illness
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">-- Please choose an option --</option>
          <option value="option1">Yes</option>
          <option value="option2">No</option>
        </select>
      </label>
      <label>
        if you have a mental health condition, do you feel that it interfere
        with your work
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">-- Please choose an option --</option>
          <option value="option1">Often</option>
          <option value="option2">Rearly</option>
          <option value="option2">Sometimes</option>
          <option value="option2">Never</option>
        </select>
      </label>
      <label>
        Does Employer provide mental health benefit
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">-- Please choose an option --</option>
          <option value="option1">Yes</option>
          <option value="option2">No</option>
          <option value="option2">Dont Know</option>
        </select>
      </label>
      <label>
        Does your Employer provide resources to learn more about mental health
        issue and how to seek help
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">-- Please choose an option --</option>
          <option value="option1">Yes</option>
          <option value="option2">No</option>
          <option value="option2">Don't Know</option>
        </select>
      </label>
      <label>
        Gender:
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">-- Please select --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>

      <button type="submit" disabled={!selectedOption || isLoading}>
        {isLoading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default Input_form;
