const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
    const nav = document.getElementById('stickytop')
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)
