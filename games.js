let steam = {
    'Name': 'Steam',
    'Url': 'https://store.steampowered.com/',
    'Description': `
        Steam is a video game digital distribution service and storefront developed by Valve Corporation.
        It was launched as a software client in September 2003 to provide game updates automatically
        for Valve's games, and expanded to distributing third-party titles in late 2005.
        `,
    'ImgUrl': 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/03/steam-logo-1.jpg'
}

let epic_games_store = {
    'Name': 'Epic Games Store',
    'Url': 'https://store.epicgames.com/',
    'Description': `
        The Epic Games Store is a video game digital distribution service and storefront operated by Epic Games.
        It launched in December 2018 as a software client, for Microsoft Windows and macOS, and online storefront.
        The service provides friends list management, game matchmaking, and other features.
        `,
    'ImgUrl': 'https://static-assets-prod.epicgames.com/epic-store/static/webpack/25c285e020572b4f76b770d6cca272ec.png'
}

let gog = {
    'Name': 'GOG',
    'Url': 'https://www.gog.com/',
    'Description': `
        GOG.com is a digital distribution platform for video games and films.
        It is operated by GOG sp. z o.o., a wholly owned subsidiary of CD Projekt based in Warsaw, Poland.
        GOG.com delivers DRM-free video games through its digital platform for Microsoft Windows, macOS and Linux.
        `,
    'ImgUrl': 'https://www.cdprojekt.com/en/wp-content/uploads-en/2016/05/gogcom-1080-1024x576.png'
}

let sites = [steam, epic_games_store, gog]

let container = document.querySelector('main')
container.style.justifyContent = "start"

sites.forEach(site => {
    let card = document.createElement('div')
    card.innerHTML = `
        <div class="card m-2 bg-secondary  text-light" style="width: 18rem;">
        <img src="${site['ImgUrl']}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${site['Name']}</h5>
                <p class="card-text">${site['Description']}</p>
                <a target="blank" href="${site['Url']}" class="btn btn-dark">Open site</a>
            </div>
        </div>
    `
    container.append(card)
})
