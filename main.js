//1) Výplata
const salary = (wage,hours, days) => {
    return Math.round(wage*hours*days)
}

const taxed = (salary, tax) => {
    return Math.round(salary-(salary*(tax / 100)))
}

console.log(taxed(30000, 15))

//2) Kalkulačka
//Postup s použitím switch
const calculate = (number1, operation, number2) => {
    switch (operation) {
        case ('+'):
            return (number1+number2);
            break;
        case ('-'):
            return (number1-number2);
            break;
        case ('*'):
            return (number1*number2);
            break;
        case ('/'):
            return (number1/number2);
            break;
        default:
            console.log('Chybné zadání')
    }
}

/*
//Postup s použitím if
const calculate = (number1, operation, number2) => {
    if (operation === '+'){
            return (number1+number2)
        }else if (operation === '-'){
             return (number1-number2)
            }else if (operation === '*'){
                return (number1*number2)
                }else if (operation === '/'){
                     return (number1/number2)
                     }else{
                        console.log('Chybné zadání')
                     }
}
*/

// Volitelný 1) Výplňořez
const fillcut = (str, len) => {
    if (str.length>len){
        return str.slice(0, len)
    }else if (str.length<len){
        return str.padStart(len, '.') 
    }else{ //else if (str.length === len){
        return str
    }
}

//Volitelný 2) Přestupný rok
const isLeapYear = (year) => {
    if ((year % 4) === 0){
        return true
    }else{
        return false
    }
}