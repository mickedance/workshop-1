import React from "react";

const TableAction = (props) => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => props.onClick(props.studentId)}
      >
        Details
      </button>
    </div>
  );
};

export default TableAction;
