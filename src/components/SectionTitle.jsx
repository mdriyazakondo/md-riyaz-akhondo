import React from "react";

const SectionTitle = ({title}) => {
  return (
    <div className="flex items-center justify-center">
      <h4 className="text-cyan-400 uppercase tracking-widest text-2xl sm:text-3xl w-[300px] text-center  mb-20 border-b-4 rounded-xl pb-4">
        {title}
      </h4>
    </div>
  );
};

export default SectionTitle;
