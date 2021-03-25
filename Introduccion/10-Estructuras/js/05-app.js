//switch case


const metodoPago = 'Efectivo'

switch(metodoPago){
    case 'Efectivo':
        console.log('Paga en efectivo')
        break;
    case 'Tarjeta':
        console.log('Paga en Tarjeta')
        break;
    default:
        console.log('No selecciono metodo de pago')
        break;
}