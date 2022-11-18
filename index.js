const carousel_container=document.getElementById('carousel_container');
let items=document.querySelectorAll('.carousel-card')
const arrows=document.querySelectorAll('.arrow')

const btnMobile=document.getElementById('hamburguer-open')
const mobileMenu=document.getElementById('mobileMenu')

function toggleMenu(){
    mobileMenu.classList.toggle('active')
    const isActive=mobileMenu.classList.contains('active')
}

function teste(){
    mobileMenu.classList.remove('active')
}

btnMobile.addEventListener('click',toggleMenu)
window.addEventListener('scroll',teste)

arrows.forEach(arrow=>{
    arrow.addEventListener('click',()=>{
        const isLeft=arrow.classList.contains('left-arrow');
        if(isLeft){
            previous()
        }else{
            next()
        }
        function previous(){
            carousel_container.appendChild(items[0]);
            items=document.querySelectorAll('.carousel-card')
        }
        function next(){
            const lastItem = items[items.length - 1];
            carousel_container.insertBefore( lastItem, items[0] );
            items = document.querySelectorAll('.carousel-card'); 
        }
    })
})
