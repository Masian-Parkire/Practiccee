import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store';
import SchoolList from './components/SchoolManagement/SchoolList';
import SchoolDetails from './components/SchoolManagement/SchoolDetails';
// import './App.css';
import './components/SchoolManagement/SchoolList.css';
import './components/SchoolManagement/SchoolDetails.css';
import './components/SchoolManagement/CollectionList.css';
import './components/SchoolManagement/CollectionForm.css';
import './components/SchoolManagement/InvoiceForm.css';
import './components/SchoolManagement/InvoiceList.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SchoolList />} />
          <Route path="/schools/:schoolId" element={<SchoolDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

