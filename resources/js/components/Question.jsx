import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Question = ({ q, a }) => {
  const [openQ, setOpenQ] = useState(false);
  const toggleQ = () => {
    setOpenQ(!openQ);
  };
  return (
    <div className="rounded-3xl bg-white p-5 mb-5" onClick={toggleQ}>
      <div className="flex justify-between items-center transition mb-2" style={{color: openQ ? '#747ED1' : 'inherit'}}>
        <h6>{q}</h6>
        <div className="flex justify-center items-center shrink-0 w-10 h-10 rounded-full bg-gray">
          <IoIosArrowDown className={openQ && "rotate-180"} />
        </div>
      </div>
      <p
        className="opacity-50 transition overflow-hidden"
        style={{ maxHeight: openQ ? "600px" : "0" }}
      >
        {a}
      </p>
    </div>
  );
};

export default Question;
