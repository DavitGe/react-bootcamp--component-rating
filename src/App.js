import React, { useState } from "react";
import Rate from "./components/Rate";
import Result from "./components/Result";

function App() {
  const [rate, setRate] = useState(0);
  const [submit, setSubmit] = useState(false);
  const onSubmit = () => {
    setSubmit(!submit);
  };

  return (
    <div className="App bg-bgColor min-h-screen flex justify-center items-center">
      {submit ? (
        <Result rate={rate} />
      ) : (
        <Rate setRate={setRate} onSubmit={onSubmit} />
      )}
    </div>
  );
}

export default App;
