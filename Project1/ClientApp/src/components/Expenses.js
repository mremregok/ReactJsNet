import React, { useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from './Card';

const Expenses = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        var response = await fetch("home");

        var expenses = await response.json();

        expenses = expenses.map((item) => (
            {
                ...item,
                date: new Date(item.date)
            }
        ));

        setData(expenses);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <Card className='expenses'>
        {
            data && data.length > 0 ? 
            data.map((item) => (
                <ExpenseItem 
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
                />
            ))
            
            : <h3>Data is loading...</h3>
        }
        </Card>
    )
}

export default Expenses;