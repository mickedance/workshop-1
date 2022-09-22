import React, { useState } from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';

const DataTable = () => {
    const initalState = [
        {id:0, firstName:'Lars', lastName:'Eriksson', age:44, country:'Sweden'},
        {id:1, firstName:'Ivar', lastName:'Andersson', age:14, country:'Sweden'}
    ]
    const [studentList, setSudentList] = useState(initalState)
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-6 offset-3'>
                    <table className='table'>
                    <   TableHead></TableHead>
                    <TableRow studentList={studentList}></TableRow>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DataTable;