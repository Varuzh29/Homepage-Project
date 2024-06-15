function google_search(query) {
    if (query.length < 1) {
        alert('Empty query!')
        return false
    }
    window.location.href = `https://www.google.com/search?q=${query}`
    return true
}
let input = document.querySelector('input')
input.addEventListener('focus', function(event) {
    input.select()
})
input.focus()
input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        google_search(input.value)
    }
})
let go_button = document.querySelector('#go')
go_button.addEventListener('click', function() {
    google_search(input.value)
})
