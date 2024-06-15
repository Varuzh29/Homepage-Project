// Set data
let title_text = 'VarCo'
let navbar_links = {
    'HOME': '',
    'GAMES': 'games',
    'EDUCATION': 'education',
    'CONTACTS': 'contacts'
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
    let current_url = window.location.href
    let split = current_url.split('/')
    let path = value.replace('.html', '').replace('index', '')
    let current_path = window.location.href.split('/')[split.length - 1].replace('.html', '').replace('index', '')
    let active = current_path == path
    split[split.length - 1] = value
    let link = split.join('/')
    if (active) {
        title_element.innerText += ` • ${key}`
    }
    element.href = link
    element.innerHTML = `<button class="navbar-link${active ? ' active' : ''}">${key}</button>`
    navbar_element.append(element)
}
footer_element.innerText = footer_text

// Add elements to document
document.body.prepend(navbar_element)
document.body.append(footer_element)
