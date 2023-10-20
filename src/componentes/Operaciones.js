import { useState } from "react";

function Operaciones () {
    let resultado;
    const [input, setInput] = useState({
        numero1: "",
        numero2: "",
        operacion: ""
    });
    
    //funcion para que cambie el valor de num1
    function F1(event) {
       setInput({
        numero1: event.target.value, 
        numero2: input.numero2,
        operacion: input.operacion
    })
    }
    //funcion para que cambie el valor de num2
    function F2(event) {
        setInput({
            numero1: input.numero1, 
            numero2: event.target.value,
            operacion: input.operacion
        })
     }
      //funcion para que cambie el valor de operacion
    function F3(event) {
        setInput({
            numero1: input.numero1, 
            numero2: input.numero2,
            operacion: event.target.value
        })
     }

     if(input.operacion === "+")  {
        resultado = parseInt(input.numero1) + parseInt(input.numero2)
     } 
     else if(input.operacion === "-"){
        resultado = parseInt(input.numero1) - parseInt(input.numero2)
     }
     else if(input.operacion === "*"){
        resultado = parseInt(input.numero1) * parseInt(input.numero2)
     }
     else {
        resultado = parseInt(input.numero1) / parseInt(input.numero2)
     }
    
return(
    <div>
        <p>
        <input
            type="number"
             //recuadro donde se introduce el número
            placeholder="Introduce un número" 
            //llamamos a la funcion cuando hay un cambio
            onChange={F1}
        />

        <select onChange={F3}>
            <option> + </option>
            <option> - </option>
            <option> * </option>
            <option> / </option>
        </select>

        <input
        type="number"
        //recuadro donde se introduce el número
        placeholder="Introduce un número"
         //llamamos a la funcion cuando hay un cambio
        onChange={F2}
         />
    
        = {resultado}
        </p>
    </div>
)

} 
export default Operaciones;