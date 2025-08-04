import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </>
  );
}

export default App;

function Button() {
  return <button className="btn">Save</button>;
}
