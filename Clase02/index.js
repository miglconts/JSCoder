/* Booleanos */

/* if(1){
    console.log('entramos');
    
} */
/* 
let nombre = 
if(nombre === "Miguel"){
    alert("Hola Miguel")
} */


/* let nombre = 
if(nombre === "Miguel"){
    alert("Hola Miguel")
} else{
    alert(`${nombre} no autorizado`)
} */

/* let edad = 

if(edad <= 15 ){
    alert(`Con ${edad} años no puedes entrar`)
}else if( edad > 15 && edad < 18 ){
    alert(`Con ${edad} años puedes entrar con un adulto`)
}else{
    alert(`Con ${edad} puedes entrar`)
} */
/* 
let nombre = )

if((nombre != "")&& (nombre === 'andres'|| nombre === 'ANDRES') ){
    alert(`Hola ${nombre}, bienvenido`);
    alert("Hola" +nombre + "bienvenido");
}else{
    alert(`Hola ${nombre}, no puedes entrar`);

} */

/* let nombre = )
let edad = let pais = */
/* console.log(pais.toLowerCase());
if(edad >= 18 && (pais.toLowerCase() === 'mexico'|| pais.toLowerCase() === 'méxico')){
    alert(`Hola ${nombre}, en ${pais} con ${edad} años, eres mayor de edad `)
}else if(edad < 18 && (pais.toLowerCase() === 'mexico'|| pais.toLowerCase() === 'méxico')){
    alert(`Hola ${nombre}, en ${pais} con ${edad} años, eres menor de edad `)
}else if(edad >= 21 && (pais.toLowerCase() === 'estados unidos'|| pais.toLowerCase() === 'usa')){
    alert(`Hola ${nombre}, en ${pais} con ${edad} años, eres mayor de edad `)
}else if(edad < 21 && (pais.toLowerCase() === 'estados unidos'|| pais.toLowerCase() === 'usa')){
    alert(`Hola ${nombre}, en ${pais} con ${edad} años, eres menor de edad `)
}else{
    alert("Error")
} */


/* if (pais.toLowerCase() === 'mexico'|| pais.toLowerCase() === 'méxico'){
    if(edad >= 18){
        alert(`Hola ${nombre}, en ${pais} con ${edad} años, eres mayor de edad `)
    }else{
        alert(`Hola ${nombre}, en ${pais} con ${edad} años, eres menor de edad `)
    }
}else if (pais.toLowerCase() === 'estados unidos'|| pais.toLowerCase() === 'usa'){
    if(edad >= 21){
        alert(`Hola ${nombre}, en ${pais} con ${edad} años, eres mayor de edad `)
    }else{
        alert(`Hola ${nombre}, en ${pais} con ${edad} años, eres menor de edad `)
    }
}else{
    alert(`${nombre}, tu país ${pais} no esta en nuestra base de datos`)
} */

/* let nombre = "Miguel"
let edad = 15
let pais = "Estados Unidos" */
/* switch (pais) {
    case "Mexico":
        if(edad>=18){
            console.log(`Hola ${nombre}, en ${pais} con ${edad} años, eres mayor de edad `)
        }else{
            console.log(`Hola ${nombre}, en ${pais} con ${edad} años, eres menor de edad `)
        }
        break;
        case "Estados Unidos":
            if(edad>=21){
                console.log(`Hola ${nombre}, en ${pais} con ${edad} años, eres mayor de edad `)
            }else{
                console.log(`Hola ${nombre}, en ${pais} con ${edad} años, eres menor de edad `)
            }
            break;
            
            default:
                break */
let nombre = prompt("Ingresa tu nombre")
let edad = prompt("Ingresa tu edad")
let pais = prompt("Ingresa tu pais")


switch (pais.toLocaleLowerCase()) {
    case "mexico":
    case "méxico":
        if(edad>=18){
            alert(`Hola ${nombre}, en ${pais} con ${edad} años, eres mayor de edad `)
        }else{
            alert(`Hola ${nombre}, en ${pais} con ${edad} años, eres menor de edad `)
            }
        break;
    case "estados unidos":
    case "usa":
    case "estados unidos de america":
    case "estados unidos de américa":
        if(edad>=21){
            alert(`Hola ${nombre}, en ${pais} con ${edad} años, eres mayor de edad `)
        }else{
            alert(`Hola ${nombre}, en ${pais} con ${edad} años, eres menor de edad `)
            }
        break;

    default:
        break;
}