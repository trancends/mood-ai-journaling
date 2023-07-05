"use client";

import { useState } from "react";

const Question = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={onChange}
          value={value}
          type="text"
          placeholder="Ask a question"
          className="rounded-lg border border-black/20 px-4 py-2 text-lg"
        />
        <button
          type="submit"
          className="mx-1 rounded-lg bg-purple-500 px-6 py-2 text-lg"
        >
          Ask
        </button>
      </form>
    </div>
  );
};

export default Question;
