// console.log('cocktail zone is ready');
const loadCocktail = (search) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res => res.json())
    .then(cocktails => displayCocktails(cocktails.drinks))
}
const displayCocktails = (cocktails) => {
        // console.log(cocktails);   
        const cocktailsContainer = document.getElementById('cocktails-container');
        cocktailsContainer.innerHTML = '';
        cocktails.forEach(cocktail => {
            console.log(cocktail);
            const cocktalDiv = document.createElement('div');
            cocktalDiv.classList.add('col');
            cocktalDiv.innerHTML = `
                <div class="card">
                <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Name :- ${cocktail.strDrink}</h5>
                <p class="card-text">Served Glass :- ${cocktail.strGlass}</p>
                <p class="card-text">Details :- ${cocktail.strInstructions.slice(0, 50)}</p>
                </div>
            </div>
            `;
            cocktailsContainer.appendChild(cocktalDiv);

        });    
  
}
const searchCocktail = () =>{
    const searchInputField = document.getElementById('search-input-field');
    const searchText = searchInputField.value;
    loadCocktail(searchText);
    searchInputField.value = "";
}
loadCocktail('z');