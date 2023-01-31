import { useRef, useState } from "react";
import React from 'react';


import { BrowserRouter as Router, Routes, Navigate, Route } from "react-router-dom";
import Register from "./register";
import Login from "./login";
import File from "./file";
import Admin from "./Admin";


function App() {
  

  return (
			<Router>
				<Routes>
					<Route exact path="/" element={<Navigate to="/signup" />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/signup" element={<Register />} />
					<Route exact path="/admin" element={<Admin />} />
                    <Route exact path="/file" element={<File />} />
					
					
				</Routes>
			</Router>
  );
}
export default App;