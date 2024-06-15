let cs50yt = {
    'Name': 'CS50 YouTube',
    'Url': 'https://www.youtube.com/@cs50',
    'Description': `
        This is CS50, Harvard University's introduction to the intellectual enterprises of computer science and the art of programming.
        Demanding, but definitely doable. Social, but educational. A focused topic, but broadly applicable skills.
        CS50 is the quintessential Harvard (and Yale!) course.
        `,
    'ImgUrl': 'https://i.ytimg.com/vi/1tnj3UCkuxU/maxresdefault.jpg'
}

let edX = {
    'Name': 'edX',
    'Url': 'https://www.edx.org/',
    'Description': `
        edX is a US for-profit online education platform owned by 2U since 2021.
        The platform's main focus is to manage a variety of offerings, including elite brand bootcamps.
        `,
    'ImgUrl': 'https://www.classcentral.com/report/wp-content/uploads/2022/03/edx-free-courses.png'
}

let harvard = {
    'Name': 'Harvard University',
    'Url': 'https://www.harvard.edu/',
    'Description': `
        Harvard University is a private Ivy League research university in Cambridge, Massachusetts.
        Founded in 1636 as Harvard College and named for its first benefactor, Puritan clergyman John Harvard, it is the oldest institution of higher learning in the United States.
        Its influence, wealth, and rankings have made it one of the most prestigious universities in the world.
        `,
    'ImgUrl': 'https://www.isbos.org/uploaded/themes/2015_map/images/Boston_Landmarks/HarvardUniversity.jpg'
}

let sites = [cs50yt, edX, harvard]

function get_html(name, description, url, imgUrl) {
    return `
<a target="blank" href="${url}">
<div class="card text-bg-dark m-3 hover-scale">
  <img src="${imgUrl}" class="card-img" alt="...">
  <div class="card-img-overlay d-flex flex-column justify-content-between">
    <h5 class="card-title text-shadow">${name}</h5>
    <p class="card-text bg-secondary-subtle p-2 rounded-2 background-blur">${description}</p>
  </div>
</div>
</a>
`
}

let container = document.createElement('div')
container.classList.add('edu-sites-container')

sites.forEach(site => {
    let card = document.createElement('div')
    card.innerHTML = get_html(site.Name, site.Description, site.Url, site.ImgUrl)
    container.append(card)
})

document.querySelector('main').append(container)
