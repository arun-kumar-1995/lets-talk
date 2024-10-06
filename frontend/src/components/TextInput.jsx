import React from "react";
import { MdAdd } from "react-icons/md";

const TextInput = () => {
  return (
    <div class="input-wrapper">
      <form action="" class="text-form">
        <button className="add-file">
          <MdAdd />
        </button>
        <input type="text" placeholder="Write message" />
      </form>
    </div>
  );
};

export default TextInput;
