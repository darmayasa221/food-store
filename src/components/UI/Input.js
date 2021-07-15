import classes from './Input.module.css'

const Input = props => {
  console.log({...props})
  return (
    <div className={ classes.input }>
      <label htmlFor={ props.input.id }>{ props.label }</label>
      <input id={ props.input.id } {...props.id} value={props.input.count}/>
    </div>
  );
};

export default Input;
