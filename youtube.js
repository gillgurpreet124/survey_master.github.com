alert ('Hello My Self Sartaj Ali I am a You Tuber and I make a lot of course video');
const menuIcon =document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('box-x').className="fa-solid fa-xmark";
    navbar.classList.toggle('active');
}
fa-solid.fa-magnifying-glass.addEventListener('click',() => {
    fa-solid.fa-magnifying-glass.classList.add('active');
});