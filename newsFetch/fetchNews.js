console.log('hello world');
const loadMenu = async() =>{
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    const res = await fetch(url);
    const data = await res.json();
    displayMenu(data.data.news_category);
}
const displayMenu = async(categories) => {
    const menuContainer = document.getElementById('menu-container');
    // console.log(categories);
    categories.forEach(category => {
        // console.log(category.category_id);
        // console.log(category.category_name);
        const li = document.createElement('li');
        li.innerHTML = `
        <li onclick="loadNews('${category.category_id}')" class="nav-item">
            <a class="nav-link mx-3" href="#">${category.category_name}</a>
        </li>
        `;
        menuContainer.appendChild(li);
    });

}
loadMenu();

/***********************************
***********************************/

const loadNews = async(category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.data);
    displayNews(data.data);
}
// loadNews();

const displayNews = async(newses) =>{
    // console.log(newses);
    const newsContainer = document.getElementById('news-container');
    if(newses.length === 0){
        document.getElementById('news-quantity').innerText = "No Data Found";
    }
    else{
        document.getElementById('news-quantity').innerText = newses.length;
    }
    newsContainer.innerHTML = "";
    newses.forEach(news => {
        // console.log(news);
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
        <div class="card mb-3 p-2 mx-auto border" style="max-width: 1040px;">
            <div class="row g-3">
                <div class="col-md-4">
                    <img src="${news.image_url}" class="img-fluid rounded-start h-100" alt="...">
                </div>  
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text">${news.details.slice(0, 300) + '...'}</p>
                       <div class="d-flex justify-content-between">
                            <div>
                                <img src="${news.author.img}" class="img-fluid rounded-circle" alt="..." style="width:50px; height:50px;">
                            </div>
                        <div class="d-none d-xl-block">
                            <div class="d-flex flex-column">
                                <span>${news.author.name ? news.author.name : "No Name"}</span>
                                <span>${news.author.published_date ? news.author.published_date : "No Data"}</span>
                            </div>
                        </div>
                            <div class="ms-5 d-none d-xl-block">
                                <i class="fa-regular fa-eye me-1"></i><span>${news.total_view ? news.total_view : "No View"}</span>
                            </div>
                            <div class="ms-5 d-none d-md-block">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star-half-stroke"></i>
                            </div>
                            <div>
                                <button onclick="loadModal('${news._id}')" class="btn btn-success ms-5" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        newsContainer.appendChild(newsDiv);
    })
}
loadNews('01');

const loadModal = async(_id) => {
    const url = `https://openapi.programming-hero.com/api/news/${_id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayModal(data.data);
}

const displayModal = async(params) =>{
    params.forEach(para => {
        console.log(para);
        // console.log(para.details);
        document.getElementById('staticBackdropLabel').innerText = para.title;
        const modalContainer = document.getElementById('modal-container');
        modalContainer.innerHTML = "";
        const modalDiv = document.createElement('div');
        modalDiv.innerHTML = `
        <div>
        <img src="${para.image_url}" class="img-fluid w-100" alt="...">
        </div>  
        `;
        modalContainer.appendChild(modalDiv);
        document.getElementById('modal-details').innerText = para.details;
        document.getElementById('rating').innerText = para.rating.number;
        document.getElementById('badge').innerText = para.rating.badge;

    })
}

loadModal();