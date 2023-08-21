


function calcular_descuento( costo ){

    let total_con_descuento = costo - (costo * 0.1)
    return total_con_descuento
    
}





function calcular_costo( costo, cuotas ){

    cuotas = parseInt(cuotas)

    let costo_final = 0

    if(cuotas == 1){
        costo_final = costo
        return costo_final
    }
    else if(cuotas == 3){
        costo_final = costo + (costo * 0.25)
        return costo_final
    }
    else if(cuotas == 6){
        costo_final = costo + (costo * 0.5)
        return costo_final
    }
    else if(cuotas == 12){
        costo_final = costo + (costo * 0.75)
        return costo_final
    }
    else if(cuotas == 18){
        costo_final = costo + (costo * 1)
        return costo_final
    }
}






// Precios //

const precio_vacuum = 500
const precio_smartwatch = 100
const precio_camera = 600
const precio_smartlight = 50

// E-commercer //

console.log("Bienvenido al e-commerce");

let menu = 0
let cuotas = 0
let pago = 0
let token = 0


while( menu != "salir"){
    menu = prompt ("¿Desea continuar con la compra o salir?");
    
    if ( menu != "salir"){

    let producto = prompt ("¿Que articulo desea adquirir?\n Vacuum = $500\n Smartwatch = $100\n Camera = $600\n Smartlight = $50\n");

    let metodo_de_pago = prompt ("Seleccione el metodo de pago: Efectivo, Cuotas o Criptomonedas")




// Efectivo (con descuento del 10%) //

        if (metodo_de_pago == "efectivo" || metodo_de_pago == "Efectivo"){

            if (producto == "vacuum" || producto == "Vacuum"){
            console.log ("El precio del producto abonando en efectivo posee un 10% de descuento. Total: " , calcular_descuento( precio_vacuum ));
            }

            if (producto == "Smartwatch" || producto == "smartwatch"){
            console.log ("El precio del producto abonando en efectivo posee un 10% de descuento. Total: " , calcular_descuento( precio_smartwatch ));    
            }

            if (producto == "Camera" || producto == "camera"){
            console.log ("El precio del producto abonando en efectivo posee un 10% de descuento. Total: " , calcular_descuento( precio_camera ));    
            }

            if (producto == "Smartlight" || producto == "smartlight"){
            console.log ("El precio del producto abonando en efectivo posee un 10% de descuento. Total: " , calcular_descuento( precio_smartlight ));    
            }
        }



// Cuotas (con interés) //

        else if( metodo_de_pago == "Cuotas" || metodo_de_pago == "cuotas"){
        
            cuotas = prompt ("Seleccione la cantidad de cuotas: 1, 3, 6, 12 o 18");

            if(cuotas == 1 || cuotas == 3 || cuotas == 6 || cuotas == 12 || cuotas == 18){

                if( producto == "Vacuum" || producto == "vacuum" ){
                console.log ("El precio total del producto en", cuotas ,"cuotas es de", calcular_costo( precio_vacuum, cuotas ));
                console.log ("Por cada cuota deberás abonar", parseInt (calcular_costo(precio_vacuum, cuotas) / cuotas));
                }

                if( producto == "Smartwatch" || producto == "smartwatch" ){
                console.log ("El precio del producto en", cuotas ,"cuotas es de", calcular_costo( precio_smartwatch, cuotas ));
                console.log ("Por cada cuota deberás abonar", parseInt (calcular_costo(precio_smartwatch, cuotas) / cuotas));   
                }

                if( producto == "Camera" || producto == "camera" ){
                console.log ("El precio del producto en", cuotas ,"cuotas es de", calcular_costo( precio_camera, cuotas ));
                console.log ("Por cada cuota deberás abonar", parseInt (calcular_costo(precio_camera, cuotas) / cuotas));    
                }

                if( producto == "Smartlight" || producto == "smartlight" ){
                console.log ("El precio del producto en", cuotas ,"cuotas es de", calcular_costo( precio_smartlight, cuotas ));
                console.log ("Por cada cuota deberás abonar", parseInt (calcular_costo(precio_smartlight, cuotas) / cuotas));    
                }
            }
            else {
                console.log ("Número de cuotas incorrecto")
            }
        } 
    



// Criptomonedas (precio lista) //

        else if( metodo_de_pago == "Cripto" || metodo_de_pago == "cripto" || metodo_de_pago == "Criptomonedas" || metodo_de_pago == "criptomonedas" ){ 

            token = prompt ("Seleccione el Token Cripto con el que desea abonar: USDT o USDC");

            if (token == "USDT" || token == "Usdt" || token == "usdt" || token == "USDC" || token == "Usdc" || token == "usdc"){

                if( producto == "Vacuum" || producto == "vacuum" ){
                    console.log ("El precio total del producto abonando con el token", token ,"es de", precio_vacuum)
                    console.log ("Aquí tiene la dirección dirección para enviar" , token , "vía BEP20, ERC20, Optimism o Polygon: 0x227de87fb5d4dacecd086a2ce5cc126f08fe4897")
                    }

                else if( producto == "Smartwatch" || producto == "smartwatch" ){
                    console.log ("El precio total del producto abonando con el token", token ,"es de", precio_smartwatch)
                    console.log ("Aquí tiene la dirección dirección para enviar" , token , "vía BEP20, ERC20, Optimism o Polygon: 0x227de87fb5d4dacecd086a2ce5cc126f08fe4897")
                    }

                else if( producto == "Camera" || producto == "camera" ){
                    console.log ("El precio total del producto abonando con el token", token ,"es de", precio_camera)
                    console.log ("Aquí tiene la dirección dirección para enviar" , token , "vía BEP20, ERC20, Optimism o Polygon: 0x227de87fb5d4dacecd086a2ce5cc126f08fe4897")
                    }
                    
                else if( producto == "Smartlight" || producto == "smartlight" ){
                    console.log ("El precio total del producto abonando con el token", token ,"es de", precio_smartlight)
                    console.log ("Aquí tiene la dirección dirección para enviar" , token , "vía BEP20, ERC20, Optimism o Polygon: 0x227de87fb5d4dacecd086a2ce5cc126f08fe4897")
                    }
            }
            else {
                console.log ("Token incorrecto")
            }  
                     
    }
    else {
    console.log ("Muchas gracias, lo esperamos pronto");
    }
}
}