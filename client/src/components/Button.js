import "./Button.css";

export const Button = ({onClick, text, type}) => {
    return <button onClick={onClick} type={type} className="custom-btn">{text}</button>    
}