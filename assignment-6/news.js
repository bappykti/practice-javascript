// load and display menu bar ====start======
const loadMenue = async() =>{
    try{
        const url = `https://openapi.programming-hero.com/api/news/categories`;
        const res = await fetch(url);
        const data = await res.json();
        displayMenu(data.data.news_category);
    }
    catch{
        document.getElementById('error-message').innerText = "No Data Found";
    }
}
const displayMenu = async(data) =>{
    const menuBar = document.getElementById('categories-navbar');
    data.forEach(name => {
        const li = document.createElement('li');
        li.innerHTML = `
        <button class="mx-2" onclick="allNews('${name.category_id}')">${name.category_name}</button>
        `;
        menuBar.appendChild(li);
    });
}
loadMenue();
// load and display menu bar ====ends======

// load and display all news =====starts======
const allNews = async(category_id)=>{
    // loader starts
    toggleLoader(true);
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayNewsBasedOnId(data.data);
}
const displayNewsBasedOnId = async(newses)=>{
    const newsContainer = document.getElementById('news-container');
    newsContainer.textContent = "";
    document.getElementById('count-news').innerText = newses.length;
    newses.forEach(news =>{
        console.log(news.category_id);
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
        <div class="p-4 card w-4/6 mx-auto lg:card-side bg-base-100 shadow-xl my-5">
        <figure><img src="${news.thumbnail_url}" class="h-80" alt="Album"></figure>
        <div class="card-body">
          <h2 class="card-title">${news.title}</h2>
          <p>${news.details.slice(0, 300) + "..."}</p>
          <div class="card-actions justify-end">
            <label onclick="loadNewsBasedOnId('${news._id}')" for="my-modal-3" class="btn modal-button">Details</label>
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
        newsContainer.appendChild(newsDiv); 
        // loader ends
        toggleLoader(false);
    })
}
// load and display all news =====ends======

// load and display Modal =====starts======
const loadNewsBasedOnId = async(id) => {
    const url = `https://openapi.programming-hero.com/api/news/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    displayLoadNewsBasedOnId(data.data[0]);
}
const displayLoadNewsBasedOnId = news => {
    console.log(news);
    const modalTitle = document.getElementById('modal-title');
    console.log(modalTitle);
    modalTitle.innerText = news.title;
    console.log(news.title);
    const modalDetails = document.getElementById('modal-details');
    modalDetails.innerText = news.details;
}
// load and display Modal =====ends======

// loader function =====starts======
const toggleLoader = isLoading =>{
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('hidden');
    }
    else{
        loaderSection.classList.add('hidden');
    }
}
// loader function =====ends======
