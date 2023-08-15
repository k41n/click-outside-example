import { useState } from 'react';
import { Popup } from './Popup';

import "./App.css";

const App = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <button onClick={handleClick}>Press me</button>
      <Popup open={open} onClose={handleClose} />
    </>
  );
};

export default App;
