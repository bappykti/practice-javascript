console.log('hello news');
const loadCategoriesMenu = async() => {
    const url ='https://openapi.programming-hero.com/api/news/categories';
    const response = await fetch(url);
    const data = await response.json();
    const categoriesArray = data.data.news_category;
    return categoriesArray;
}
const loadAllNews = async() => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`;
    const response = await fetch(url);
    const data = await response.json();
    const newsArray = data.data;
    return newsArray;
}
const loadNewsModalById = async(id) => {
    const url =`https://openapi.programming-hero.com/api/news/${news._id}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}
loadNewsModalById();
// const displayNewsModal = async(news) => {
//     const displayModal = loadNewsModalById();
//     console.log(news);

// }
// const displayNewsDetails = 

loadAllNews();

const setAllCategoriesMenu = async() => {
    // console.log(loadCategories());
    // loadCategoriesMenu()
    // .then(dataArray => console.log(dataArray));
    const categoriesArray = await loadCategoriesMenu();
    // console.log(categoriesArray);
    const categoriesNavbar = document.getElementById('categories-navbar');
    categoriesArray.forEach(category => {
        // console.log(category.category_name);
        const li = document.createElement('li');
        li.innerHTML = `
        <li><a>${category.category_name}</a></li>
        `;
        categoriesNavbar.appendChild(li);
    });
    const newsArray = await loadAllNews();
    // console.log(newsArray);
    const allNewsContainer = document.getElementById('all-news-container');
    newsArray.forEach(news =>{
        // console.log(news);
        document.getElementById('count-news').innerText = newsArray.length;
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
        <div class="p-4 card w-4/6 mx-auto lg:card-side bg-base-100 shadow-xl my-5">
        <figure><img src="${news.thumbnail_url}" class="h-80" alt="Album"></figure>
        <div class="card-body">
          <h2 class="card-title">${news.title}</h2>
          <p>${news.details.slice(0, 300) + "..."}</p>
          <div class="card-actions justify-end">
            <label onclick="loadAllNews()" for="my-modal-5" class="btn btn-success modal-button">open modal</label>
          </div>
    <div class="d-flex">
        <div class="avatar placeholder">
            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                <figure><img src="${news.author.img}" class="h-60" alt="Album"></figure>
            </div>
        </div>
        <div class="flex">
            <div>
                <p>${news.author.name ? news.author.name : "No data available"}</p>
                <p>${news.author.published_date ? news.author.published_date : "No data available"}</p>
            </div>
            <div class="mx-20">
                <span><i class="fa-solid fa-eye"></i> ${news.total_view}</span>
            </div>
            <div>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
            </div>
        </div>
    </div>
        
        </div>
      </div>
        `;
        allNewsContainer.appendChild(newsDiv);
    })
}
setAllCategoriesMenu();

const setAllNews = async() => {
    // console.log(loadCategories());
    // loadCategoriesMenu()
    // .then(dataArray => console.log(dataArray));
    const newsArray = await loadCategoriesMenu();
    // console.log(newsArray);
    const categoriesNavbar = document.getElementById('categories-navbar');
    categoriesArray.forEach(category => {
            // console.log(category.category_name);
            const li = document.createElement('li');
            li.innerHTML = `
                <li><a>${category.category_name}</a></li>
            `;
            categoriesNavbar.appendChild(li);
    });
}
setAllNews();

 

const searchField = document.getElementById('search-field');
searchField.addEventListener("keypress", async(event)=>{
    if(event.key === "Enter"){
        console.log(searchField.value);
    }
})
