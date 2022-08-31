// console.log('hello meal');
const loadMeals =(search)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
const displayMeals = meals => {
    // console.log(meals);
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = "";
    meals.forEach(meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div onclick="loadMealDetails(${meal.idMeal})" class="card">
        <img src=${meal.strMealThumb} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text"> ${meal.strInstructions.slice(0, 200)}</p>
        </div>
      </div>
        `;
        mealsContainer.appendChild(mealDiv);
    });
}

const searchFood = () => {
    const searchInputFied = document.getElementById('search-input-field');
    const searchText = searchInputFied.value;
    // console.log('searching', searchText);
    loadMeals(searchText);
    searchInputFied.value = "";
};
const  loadMealDetails = (idMeal) => {
  // console.group('Getting id of each Meal', idMeal);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  // console.log(url);
  fetch(url)
  .then(res => res.json())
  .then(data => displayMealDetails(data.meals[0]))
};
const displayMealDetails = meal =>{
  const detailsContainer = document .getElementById('details-container');
  detailsContainer.innerHTML = '';
  const mealDiv = document.createElement('div');
  mealDiv.classList.add('card');
  mealDiv.innerHTML = `
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
      </div>
    </div>
  </div>
  `;
  detailsContainer.appendChild(mealDiv);
}
loadMeals('beef');