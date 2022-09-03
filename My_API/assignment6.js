console.log('hello news');
const loadNews = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch (url)
    .then(res => res.json())
    .then(news => displayNews(news.data))
}

const displayCategories = () => {

}
const displayNews = (newses) => {
    console.log(newses);
    const newsContainer = document.getElementById('newses-container');
    newsContainer.innerHTML = '';
    // display 20 phones oonly
    // phones = phones.slice(0, 20);
    // No phones found
    // const noPhonsFound = document.getElementById('no-phones-found');
    // if(phones.length === 0){
    //     noPhonsFound.classList.remove("d-none");
    // }
    // else{
    //     noPhonsFound.classList.add("d-none");
    // }
    newses.forEach(news => {
        console.log(news);
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `
            <div class="card">
            <img src="${news.image_url}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Titel :- ${news.title}</h5>
            <p class="card-text">Detils :- ${news.details.slice(0, 200) + "..."}</p>
            <div class = "d-flex">
                <div>
                    <img style="width:50px; border-radius:50%;" src="${news.author.img}" class="card-img-top" alt="...">
                </div>
                <div>
                    <p class="card-text">Details :- ${news.author.name}</p>
                    <p class="card-text">Details :- ${news.author.published_date}</p>
                </div>
            </div>
            <div class = "my-2">
                <button class="btn btn-info">More Details</button>
            </div>
        </div>
        `;
        newsContainer.appendChild(newsDiv);

    });    
}
loadNews();