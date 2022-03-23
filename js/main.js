window.addEventListener('load', init);

// let apiUrl = "https://www.freetogame.com/api/games";
// let apiUrl = "https://gamedb.online/api/gamedb";

function init()
{
    getGames();
}

function getGames() {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(getGamesSuccessHandler)
        .catch(getGamesErrorHandler);
}

function getGamesSuccessHandler(data) {
    console.log(data);
}

function getGamesErrorHandler(data) {
    console.log(data);
}
