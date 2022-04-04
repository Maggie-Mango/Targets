import React from "react";

import { Route, Routes } from "react-router-dom";

//import Navbar from "./components/navbar";
import RecordList from "./components/RecordList";
//import Edit from "./components/edit";
//import Create from "./components/create";

const App = () => {
 return (
   <div>
     <Routes>
       <Route exact path="/" element={<RecordList />} />
     </Routes>
   </div>
 );
};

export default App;