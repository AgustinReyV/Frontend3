import { useState } from "react";
import Card from "./Card";

const Form = () => {
    const [persona, setPersona] = useState({
        nombre: "",
        animal: "",
    });

    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);
    
    const handleSubmit = () => {
        event.preventDefault();
        if(persona.nombre.length >= 3 && persona.animal.length >= 6){
            setShow(true) 
            setError(false)
        }else{
            setError(true)
            setShow(false)
        }
    }
    
    return (
        <div>
    <h1>Dime tu animal favorito</h1>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input type="text" 
            placeholder="no menos de 3 letras"
            value={persona.nombre}
            onChange={(event) => setPersona({ ...persona, nombre: event.target.value })}/>
            <br />
            <label>Animal</label>
            <input type="text" 
            placeholder="no menos de 6 letras"
            value={persona.animal}
            onChange={(event) => setPersona({ ...persona, animal: event.target.value })}/>
            <br />
            <button >Enviar</button>
        </form>
        {show ? <Card props={persona}/> : null}
        {error && "Por favor chequea que la información sea correcta"}
        </div>
    )
}

export default Form