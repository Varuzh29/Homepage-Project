// Set data
let title_text = 'VarCo'
let navbar_links = {
    'HOME': '/index.html',
    'GAMES': '/games.html',
    'EDUCATION': '/education.html',
    'CONTACTS': '/contacts.html'
}
let footer_text = 'VarCo • 2024'

// Create elements
let title_element = document.querySelector('title')
let footer_element = document.createElement('footer')
let navbar_element = document.createElement('nav')

// Configure elements
title_element.innerText = title_text
navbar_element.id = 'navbar'
navbar_element.classList.add('background-blur')
for (const [key, value] of Object.entries(navbar_links)) {
    let element = document.createElement('a')
    let active = window.location.pathname == value
    if (active) {
        title_element.innerText += ` • ${key}`
    }
    element.href = value
    element.innerHTML = `<button class="navbar-link${active ? ' active' : ''}">${key}</button>`
    navbar_element.append(element)
}
footer_element.innerText = footer_text

// Add elements to document
document.body.prepend(navbar_element)
document.body.append(footer_element)
