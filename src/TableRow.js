import React, { useState } from 'react';
import ShowStudentDetails from './ShowStudentDetails';
import TableAction from './TableAction';

const TableRow = (props) => {
    const [viewStudent, setViewStudent] = useState(false)
    let [studentToView, setStudentToView] = useState(null);

    const onClick =(id)=>{
        if(studentToView!=null && studentToView.id !=id  || studentToView==null || studentToView!=null && viewStudent==false){
            setViewStudent(true)
            props.studentList.map((item)=>{
                if(item.id==id ){
                    setStudentToView(item)
                    return
                }
            })
        }
        else
            setViewStudent(false)          
    }
    return (
        <>
            {
                props.studentList.map((item)=>{
                    return(
                        <tbody key={item.id}>
                    <tr >
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.age}</td>
                        <td><TableAction onClick={onClick} studentId={item.id}></TableAction></td>
                    </tr>
                    {viewStudent && studentToView.id==item.id?
                     <ShowStudentDetails studentToView={studentToView} viewStudent={viewStudent} setViewStudent={setViewStudent}></ShowStudentDetails>
                    : 
                    ''
                    }
                    
                    </tbody>
                    )
                })
            }
            
       </>
    );
};

export default TableRow;