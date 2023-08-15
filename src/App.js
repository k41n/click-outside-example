import { useState } from "react";
import { Popup } from "./Popup";

import "./App.css";
import { CloseOnClickOutside } from "./CloseOnClickOutside";

const App = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <button onClick={handleClick}>Press me</button>
      <CloseOnClickOutside open={open} onClose={handleClose}>
        <Popup />
      </CloseOnClickOutside>
    </>
  );
};

export default App;
