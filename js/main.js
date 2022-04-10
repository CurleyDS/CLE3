window.addEventListener('load', init);

let fetchUrl = 'http://localhost/CLE3/webservice/index.php';
let magazine;
let animeData = {};
let favoriteItems = [];

function init()
{
    //Retrieve magazine
    magazine = document.getElementById('anime-magazine');
    magazine.addEventListener('click', animeClickHandler);
  
    section = document.querySelector('.section');
    details = document.getElementById('anime-detail');
    detailsContent = document.querySelector('.details-content');
    detailsCloseButton = document.getElementById('details-content');

    //Start the application with loading the API data
    getAnimeData();
    
    let favoriteItemsString = localStorage.getItem('favoriteItems');
    if (favoriteItemsString !== null) {
        favoriteItems = JSON.parse(favoriteItemsString);
        console.log(favoriteItems);
    }
}

function addToFavorites(anime) {
    let animeCard = document.querySelector(`.anime-card[data-name='${anime.name}']`);
    
    console.log(animeCard);
}

function favoritesOpenClickHandler(e) {
    let clickedItem = e.target;
  
    if (clickedItem.classList.contains('selected')) {
        let favoriteItemsString = localStorage.getItem('favoriteItems');
        let anime = animeData[clickedItem.dataset.id];
        if (favoriteItemsString !== null) {
            favoriteItems = JSON.parse(favoriteItemsString);
            newItems = [];
            for (let x = 0; x < favoriteItems.length; x++) {
                if (favoriteItems[x].name != anime.name) {
                    newItems.push(favoriteItems[x]);
                }
            }
            favoriteItems = newItems;
            localStorage.setItem('favoriteItems', JSON.stringify(newItems));
            clickedItem.classList.remove('selected');
        }
    } else {
        let anime = animeData[clickedItem.dataset.id];
    
        favoriteItems.push(anime);
        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
        
        clickedItem.classList.add('selected');
    }
}

function detailsCloseClickHandler(e) {
    let clickedItem = e.target;
  
    if (clickedItem.nodeName !== "BUTTON") {
        return;
    }
  
    section.classList.remove('open-details');
    details.classList.remove('open');
    detailsContent.dataset.name = "";
    details.removeEventListener('click', detailsCloseClickHandler);
}

function detailsOpenClickHandler(e) {
    let clickedItem = e.target;
  
    let anime = animeData[clickedItem.dataset.id];
    
    detailsContent.innerHTML = "";

    if (detailsContent.dataset.name != anime.name) {
        // Dataset for the details-content
        detailsContent.dataset.name = anime.name;

        //Element for the image of the anime
        let image = document.createElement('img');
        image.src = anime.imgUrl;
        detailsContent.appendChild(image);

        //Element for the title of the anime
        let title = document.createElement('h2');
        title.innerHTML = `${anime.name}`;
        detailsContent.appendChild(title);

        //Element for the description of the anime
        let desc = document.createElement('p');
        desc.innerHTML = `${anime.description}`;
        detailsContent.appendChild(desc);
        
        section.classList.add('open-details');
        details.classList.add('open');
    } else {
        detailsCloseClickHandler(e);
    }

    details.addEventListener('click', detailsCloseClickHandler);
}

function animeClickHandler(e) {
    let clickedItem = e.target;

    if (clickedItem.nodeName !== "BUTTON") {
        return;
    }

    if (clickedItem.id == "details") {
        detailsOpenClickHandler(e);
    } else if (clickedItem.id == "favorites") {
        favoritesOpenClickHandler(e);
    } else {
        return;
    }
}

/**
 * AJAX-call to retrieve anime from the API
 */
function getAnimeData()
{
    fetch(fetchUrl)
    .then((response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
    })
    .then(createAnimeCards)
    .catch(ajaxErrorHandler);
}

/**
 * Create initial anime cards based on initial API data
 *
 * @param data
 */
function createAnimeCards(data)
{
    //Loop through the list of anime
    for (let anime of data) {
        //Wrapper element for every anime card. We need the wrapper now, because adding it later
        //will result in anime being ordered based on the load times of the API instead of chronically
        let animeCard = document.createElement('div');
        animeCard.classList.add('anime-card');
        animeCard.dataset.name = anime.name;

        //Append anime card to the actual HTML
        magazine.appendChild(animeCard);

        //Retrieve the detail information from the API
        fetch((fetchUrl + '?id=' + anime.id))
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(fillAnimeCard)
        .catch(ajaxErrorHandler);
    }
}

/**
 * Create the actual contents of the card based on the loaded API information
 *
 * @param anime
 */
function fillAnimeCard(anime)
{
    //Wrapper element for every anime card
    let animeCard = document.querySelector(`.anime-card[data-name='${anime.name}']`);

    //Element for the image of the anime
    let image = document.createElement('img');
    image.src = anime.imgUrl;
    animeCard.appendChild(image);

    // Element for the anime
    let title = document.createElement('h2');
    title.innerHTML = `${anime.name}`;
    animeCard.appendChild(title);

    //Element for the image of the anime
    let detailsButton = document.createElement('button');
    detailsButton.innerHTML = "Details";
    detailsButton.id = "details";
    detailsButton.dataset.id = anime.id;
    animeCard.appendChild(detailsButton);

    //Element for the image of the anime
    let favButton = document.createElement('button');
    favButton.innerHTML = "Favoritize";
    favButton.id = "favorites";
    if (favoriteItems.some(favoriteItem => favoriteItem.name == anime.name)) {
        favButton.classList.add('selected');
    }
    favButton.dataset.id = anime.id;
    animeCard.appendChild(favButton);

    animeData[anime.id] = anime;
}

/**
 * Show an error message to inform the API isn't working correctly
 *
 * @param data
 */
function ajaxErrorHandler(data)
{
    let error = document.createElement('div');
    error.classList.add('error');
    error.innerHTML = 'Er is helaas iets fout gegaan met de API, probeer het later opnieuw';
    magazine.before(error);
}
