import React, { createElement } from "react";
import "./App.css";
function App() {
  return (
    <>
      <Exampleelement></Exampleelement>
      <DivButton></DivButton>
      <Propsexample
        className={"div"}
        element={"DivButton"}
        component={Exampleelement()}
      ></Propsexample>
    </>
  );
}

export default App;

function Exampleelement() {
  return (
    <div className="div">
      <label htmlFor="input">Enter name</label>
      <input className="input" type="text" name="name" />
      <button className="btn">Button</button>
    </div>
  );
}

function MyButton() {
  return createElement(
    "button",
    { className: "mybtn1", id: "my-btnid" },
    "Save"
  );
}

function DivButton() {
  return createElement(
    "div",
    {
      className: "div",
    },
    createElement("button", { className: "btn" }, "Save")
  );
}

function Propsexample(props) {
  return (
    <div className={props.className}>
      {props.element}
      {props.component}
    </div>
  );
}
