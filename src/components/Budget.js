import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    let updatedBudget = 0;
    const { dispatch, budget, remaining } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        updatedBudget = event.target.value;
        if (updatedBudget > 20000) {
            alert("Budget cannot exceed 200000.");
        } else if (remaining <= 0) {
            alert("You cannot reduce the budget lower than the spending");
        } else {
            setNewBudget(updatedBudget);
            dispatch({ type: 'SET_BUDGET', payload: updatedBudget });
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;