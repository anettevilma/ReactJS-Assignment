import React from 'react';
import ReactDOM from 'react-dom';
import './login.css';
function Login(){
    return(
        <div>
<h2>LOGIN</h2>
<table id="table2">
    <tr>
        <td>Username:</td>
        <td><input type="text" name="username" id="username"></input></td>
    </tr><br />
    <tr>
        <td>Password:</td>
        <td><input type="password" id="pwd"></input></td>
    </tr><br />
    <tr>
        <input type="submit" value="Submit" id="submitbtn"></input>
    </tr>
</table>
</div>
    );
}
export default Login;