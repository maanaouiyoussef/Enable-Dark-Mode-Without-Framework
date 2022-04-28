const body = document.getElementById('body')
const navBar = document.getElementById('nav')
const navLinks = document.querySelectorAll('.nav-link')
const navLinksArray = Array.from(navLinks);
const toggeler = document.querySelector('.toggeler')
const callBtn = document.querySelector('.callBtn')

const DOMElements = [
    body,navBar,navLinksArray,toggeler,callBtn
]

toggeler.addEventListener('click', (e) => {
    e.preventDefault();

    /*
    body.classList.toggle('dark')
    navBar.classList.toggle('dark')
    navLinksArray.forEach((navLink) => {
        navLink.classList.toggle('dark')
    })
    toggeler.classList.toggle('dark')
    callBtn.classList.toggle('dark')
    */
    // console.log('Add Dark Class to each DOM element') // Document Object Modeling

    DOMElements.forEach((DOMElement) => {
        if(DOMElement.length > 1) {
            DOMElement.forEach((navLink) => navLink.classList.toggle('dark'))
        } 
        else {
            DOMElement.classList.toggle('dark')
        }
    })
    showText(toggeler)
    
})

const showText = function(node) {
   /*
    if(node.classList.contains('dark')) {
        node.innerHTML='LIGHT'
    } else {
        node.innerHTML='DARK'
    }
    */

    node.innerHTML= (node.classList.contains('dark')) ? 'DARK': 'LIGHT'
}

