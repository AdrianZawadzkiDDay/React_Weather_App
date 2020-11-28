import React from "react";

const Form = (props) => {
  return (
    <form>
      <input type="text" value={props.value} placeholder="wpisz miasto" />
      <button type="submit">Wyszukaj miasta</button>
    </form>
  );
};

export default Form;
