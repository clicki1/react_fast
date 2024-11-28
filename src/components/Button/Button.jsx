import "./Button.css"

export default function Button({children, onClick, isActive, ...props}){
  
    return (
        <button 
        {...props}
        className={isActive ? "button active": "button"}
         onClick={onClick} >{children}
         </button>
    )
  }