let seacrh = document.getElementById('page-search');
let input = document.getElementById('input-block');
seacrh.addEventListener('click' , foo);
function foo(){
    input.classList.add('.search-input_showed');
}