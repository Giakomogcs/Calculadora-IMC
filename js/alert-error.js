export const inputWeight = document.querySelector('#weigth')
export const inputHeight = document.querySelector('#height')

export const AlertError = {

  Element: document.querySelector('.alertError'),
  Input: document.querySelector('form input'),

  open() {
    AlertError.Element.classList.add('open')
  },

  close() {
    AlertError.Element.classList.remove('open')
  }
}

window.addEventListener('keydown', handleKeydown)
inputWeight.addEventListener('input', inputKeydown)
inputHeight.addEventListener('input', inputKeydown)


function handleKeydown(event) {
  if(event.key === 'Escape') {
    AlertError.close()
  }
}

function inputKeydown() {
  if(AlertError.Element.classList.item('open')){
    AlertError.close()
  }
}
