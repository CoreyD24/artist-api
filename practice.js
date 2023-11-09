const apiBaseURL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/artists`

main = document.querySelector(`main`);


const state = {
    allArtists: [],
}

const getAllArtists = async() => {
    const response = await fetch (`${apiBaseURL}`)
    const jsonResponse = await response.json();
    state.allArtists = jsonResponse.data;
    renderAllArtists(state.allArtists);    
};

const getArtistDetails = async(id) => {
    const response = await fetch (`${apiBaseURL}/${id}`)
    const responseJson = await response.json();
    const artistDetails = responseJson.data;
    renderDetails(artistDetails);
}



const renderDetails = (detailsOfArtists) => {
    const html = `
    <h2>Artists<h2>
    <li>${detailsOfArtists.name}</li>
    <img src="${detailsOfArtists.imageURL}>
    <button> Back to main </button>`
    ;
    main.innerHTML = html;
    
    const img = document.createElement(`img`);
    main.appendChild(img);
    const backButton = document.createElement(`button`);
    main.appendChild(backButton);
    backButton.addEventListener(`click`,(event) => {
        renderAllArtists();
    })
};


const renderAllArtists = () => {
    const artistNames = state.allArtists.map((singleArtist) => {
        return `<li id=${singleArtist.id}>${singleArtist.name}</li>`
    });
    const ul = document.createElement(`ul`)
    ul.innerHTML = artistNames.join(``);
    main.replaceChildren(ul)
    
    const listItems = document.querySelectorAll(`li`)
    listItems.forEach((artistListItem) => {
        artistListItem.addEventListener(`click`, (event) =>{
            getArtistDetails(event.target.id)
        });
    });
}


// renderAllArtists()
getAllArtists()
// getArtistDetails()