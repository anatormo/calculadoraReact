import { useState } from "react";

function Sumar () {
    const [numero1, setNumero1] = useState();
    const [numero2, setNumero2] = useState();
   
    //funcion para que cambie el valor de num1
    function F1(event) {
       setNumero1(event.target.value)
    }
    //funcion para que cambie el valor de num2
    function F2(event) {
        setNumero2(event.target.value)
     }
    
    //defines una variable para dentro del return
    let resultado = parseInt(numero1) + parseInt(numero2);

    
return(
    <div>
        <input
            type="number"
             //recuadro donde se introduce el número
            placeholder="Introduce un número" 
            //llamamos a la funcion cuando hay un cambio
            onChange={F1}
        />
        <input
        type="number"
        //recuadro donde se introduce el número
        placeholder="Introduce un número"
         //llamamos a la funcion cuando hay un cambio
        onChange={F2}
         />
    
        = {resultado}

    </div>
)

} 
export default Sumar;