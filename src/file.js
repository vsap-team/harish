import React, { Component,useEffect } from 'react';
import { Button, Paper,Grid} from '@mui/material';
import {logout,useAuth} from './firebase';
import { Link, useNavigate} from "react-router-dom";

function File(){
    const pstyle={padding:30 ,height:'30vh', width:600,margin:'40px auto',backgroundColor:'transparent'}
    const bt={margin:'30px 30px 30px 30px'}
    const navigate=useNavigate();
    const user=useAuth();
    console.log(user);

    function Logout(){
      logout();
      localStorage.clear();
      navigate("/login")
      
    }
    function handle(){
      console.log(user);
    }
    useEffect(() => {
      let authToken = localStorage.getItem('Auth');
      console.log(authToken);
      if (!authToken) {
        navigate('/Login')
    }
    
    },[]);
    

return(
<div className="App" >
  <div align ='right'>
  <Button onClick={() => {Logout()}} style={bt} variant="contained">Logout</Button>
  </div>
  <div>
    <div align='center'><h3>Welcome    {user?.email}</h3></div>
  </div>
  
    <Grid align='center'>
        <Paper elevation={15} style={pstyle}>
            <h3>Select the file that you want to upload</h3>
            <h4>(Note:upload files only in excel format)</h4><br/><br/>
      <Button variant="contained" component="label" color="primary">
        {" "}
        Upload a file
        <input type="file" hidden />
      </Button>
      <Button onClick={()=>{handle()}}>hii</Button>
      </Paper>
      </Grid>
    </div>
);
}
export default File;