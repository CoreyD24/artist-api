const apiBaseURL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/`

const state = {
    allArtists: [],
}
//getAllArtists goes to the URL, retrieves the big list of details for artists
//then adds .json to make it readable
//then puts the jsonResponse.data into the array state.allArtists
const getAllArtists = async() => {
    const response = await fetch (`${apiBaseURL}artists`)
    const jsonResponse = await response.json();
    state.allArtists = jsonResponse.data;
}
getAllArtists();

const renderAllArtists = () => {
    
}