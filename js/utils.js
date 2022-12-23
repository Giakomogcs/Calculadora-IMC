export function IMC(weigthCalc,heightCalc){
  return (weigthCalc / ((heightCalc/100)**2)).toFixed(2)
}


export function notNumber(value) {
  return isNaN(value) || value == ""//passa um valor true se o valor for NaN
}

