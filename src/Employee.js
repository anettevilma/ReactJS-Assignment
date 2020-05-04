import React from 'react';
import ReactDOM from 'react-dom';
import './Employee.css';
var id=123;
var name="Xyz";
var designation="Consultant";
function Employee(){
    return(
        <div>
        <table id="table1">
        <tr className="border">
            <td className="border">Employee ID:</td>
            <td className="border">{id}</td>
        </tr>
        <tr className="border">
        <td className="border">Name:</td>
        <td className="border">{name}</td>
         </tr>
         <tr className="border">
         <td className="border">Designation:</td>
         <td className="border">{designation}</td>
         </tr>
         </table>
         </div>
        
    );
}
export default Employee;