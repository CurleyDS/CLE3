window.addEventListener('load', init);

let fetchUrl = 'http://localhost/CLE3/webservice/index.php';
let magazine;
let animeData = {};

function init()
{
    //Retrieve magazine
    magazine = document.getElementById('anime-magazine');
    magazine.addEventListener('click', animeClickHandler);
  
    detailModal = document.getElementById('anime-detail');
    detailModalCloseButton = document.getElementById('modal-content');
    detailModalContent = document.querySelector('.modal-content');

    //Start the application with loading the API data
    getAnimeData();
}

function detailModalCloseClickHandler(e) {
    let clickedItem = e.target;
  
    if (clickedItem.nodeName !== "BUTTON") {
        return;
    }
  
    detailModal.classList.remove('open');
    detailModalContent.innerHTML = "";
    detailModal.removeEventListener('click', detailModalCloseClickHandler);
}

function animeClickHandler(e) {
    let clickedItem = e.target;

    if (clickedItem.nodeName !== "BUTTON") {
        return;
    }

    let anime = animeData[clickedItem.dataset.id];

    let title = document.createElement('h2');
    title.innerHTML = `${anime.name}`;
    detailModalContent.appendChild(title);

    //Element for the image of the anime
    let image = document.createElement('img');
    image.src = anime.imgUrl;
    detailModalContent.appendChild(image);

    detailModal.classList.add('open');
    detailModal.addEventListener('click', detailModalCloseClickHandler);
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

    // Element for the anime
    let title = document.createElement('h2');
    title.innerHTML = `${anime.name}`;
    animeCard.appendChild(title);

    //Element for the image of the Pokémon
    let image = document.createElement('img');
    image.src = anime.imgUrl;
    animeCard.appendChild(image);

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
