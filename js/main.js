import {Modal} from './modal.js'
import {AlertError, inputWeight, inputHeight} from './alert-error.js'
import {IMC, notNumber} from './utils.js'

//variaveis - variables
const form = document.querySelector('form')



form.onsubmit = function(event) {
  event.preventDefault() //evitar o padrão, para assim n ficar atualizando a página

  let weight = inputWeight.value
  let height = inputHeight.value
  
  if(notNumber(weight) === false && notNumber(height) === false) {
  
    const result = IMC(weight,height)
    const message = `Seu IMC é de ${result}`
    
    Modal.open()
    Modal.Message.innerText = message
    
  } else {
    AlertError.open()
  }

  inputWeight.value = ""
  inputHeight.value = ""  
  
}
