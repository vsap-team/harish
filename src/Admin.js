import React from 'react';
import add from './add.png';
import update from './update.png';
import view from './view.png';
import del from './del.png';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Admin() {
  return (
    <div >
    <div className="container-fluid">
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Admin</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Personal
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-sucess" type="submit">Search</button>
        </form>
    </div>
  </div>
</nav>
   <br/>     
    </div>


    <div class="sidebar">
  <a class="active"  href="#home">Home</a>
  <a href="#news">Users</a>
  <a href="#contact">Mode</a>
  <a href="#about">Settings</a>
</div>

<div className="container  px-lg-2">
    <div class="row row-cols-1 row-cols-md-2 g-4">
    <a href='' class="text-decoration-none " >
  <div class="col">
    <div class="card">
    <div class="col-md-3">
     
      <img src={add} class="img-thumbnail" alt="..."/>
      
      </div>
      <div class="card-body">
        <h5 class="card-title">ADD</h5>
        <p class="card-text">Add the details of new users.</p>
      </div>
    </div>
  </div>
  </a>
  <div class="col">
  <a href='' class="text-decoration-none " >
    <div class="card">
    <div class="col-md-3">
      <img src={view} class="img-thumbnail" alt="view" />
      </div>
      <div class="card-body">
        <h5 class="card-title">VIEW</h5>
        <p class="card-text">Show the registered users.</p>
      </div>
    </div>
    </a>
  </div>
  <div class="col">
  <a href='' class="text-decoration-none " >
    <div class="card">
    <div class="col-md-3">
      <img src={update} class="img-thumbnail" alt="update" />
      </div>
      <div class="card-body">
        <h5 class="card-title">UPDATE</h5>
        <p class="card-text">Modify the details of registered users.</p>
      </div>
    </div>
    </a>
  </div>
  <div class="col">
  <a href='' class="text-decoration-none " >
    <div class="card">
    <div class="col-md-3">
      <img src={del} class="img-thumbnail" alt="del" />
      </div>
      <div class="card-body">
        <h5 class="card-title">DELETE</h5>
        <p class="card-text">Reove the user details.</p>
      </div>
    </div>
    </a>
  </div>
</div>
 </div>  
 </div> 
  );
}

export default Admin;