function Button({titulo, corLetra, corBack}){
    return <button style= {{backgroundColor: corBack, color: corLetra,}}>{titulo}</button>
}
export default Button;