import React from "react";

const ShowStudentDetails = (props) => {
  return (
    <tr>
        {props.studentToView!= null ?
        <td colSpan={5}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Student</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {props.studentToView.firstName + " " + props.studentToView.lastName}
            </h6>
            <p className="card-text">
              Age: {props.studentToView.age}
              <br></br>
              Country: {props.studentToView.country}
              <br></br>
              Id: {props.studentToView.id}
            </p>
            <button className="btn btn-sm btn-primary" onClick={()=>props.setViewStudent(false)}>Close</button>
          </div>
        </div>
      </td>
        :
        <td>gg</td>
        }
      
    </tr>
  );
};

export default ShowStudentDetails;
