import ExpenseItem from "./components/ExpenseItem";
import './custom.css';
import React, { useState, useEffect } from 'react';
import Expenses from "./components/Expenses";

function App() {
    

    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses />
        </div>
    );
}

export default App;
