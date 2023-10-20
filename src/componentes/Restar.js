import { useState } from "react";

function Restar () {
    const [input, setInput] = useState({
        numero1: "",
        numero2: ""
    });
    
    //funcion para que cambie el valor de num1
    function F1(event) {
       setInput({
        numero1: event.target.value, 
        numero2: input.numero2
    })
    }
    //funcion para que cambie el valor de num2
    function F2(event) {
        setInput({
            numero1: input.numero1, 
            numero2: event.target.value,
        })
     }
    
    //defines una variable para dentro del return
    let resultado = parseInt(input.numero1) - parseInt(input.numero2);
    
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
        -
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
export default Restar;