const snowBall = document.querySelector('#snowBall');
const blockhidden = document.querySelector('#hidden');
const blockvis = document.querySelector('.visible');
const myForm = document.querySelector('#myForm');
let name = document.querySelector('#name');
let text = document.querySelector('.hidden__text');

snowBall.addEventListener('click', function () {
    blockvis.style.display = 'none';
    blockhidden.style.display = 'flex';
    myForm.style.display = 'block';
})

let elements = myForm.elements;

elements.btn.addEventListener('click', function (event) {
    event.preventDefault();
    name.textContent = elements.username.value;
    name.style.color = elements.textColor.value;
    if (elements.paddingcheck.checked === true) {
        name.style.margin = '0';
    }
    text.style.fontSize = elements.textSize.value + 'px';
})