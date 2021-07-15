import React, { useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

const MealItemForm = props => {
  const [ count, setCount] = useState(0)

  const countHandler = (event) => {
    console.log('handler',count)
    event.preventDefault()
    setCount(count + 1)
  }

  return (
    <form onSubmit={countHandler} className= { classes.form }>
      <Input label='Amount' input={{ 
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
       }}/>
      <button > + Add </button>
    </form>
  );
};

export default MealItemForm;
