const btnHeader = document.querySelector('.button_header')
const modal = document.querySelector('#modal')
const close = document.querySelector('#close')
let btnUp = document.querySelector('#footer_button_up')
let btnDw = document.querySelector('#footer_button_down')
btnHeader.onclick = function(){
    modal.style.display = 'block'
    const scr = window
    scr.style.overflow = 'hidden'
    console.log(scr);
}
close.onclick = function(){
    modal.style.display = 'none'
}
btnUp.onclick = function (){
    modal.style.display ='block'
    
}
close.onclick = function(){
    modal.style.display = 'none'
}
btnDw.onclick = function(){
    modal.style.display = 'block'
}
close.onclick = function(){
    modal.style.display = 'none'
}