console.log('hello phone hunter');

const loadPhones = async(searchText) => {
   const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
   const res = await fetch(url);
   const data = await res.json();
//    const allArrayData = data.data;
    displayPhones(data.data);
}
const displayPhones = (phones) => {
    console.log(phones);
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.innerHTML = '';
    // display 20 phones oonly
    phones = phones.slice(0, 20);
    // No phones found
    const noPhonsFound = document.getElementById('no-phones-found');
    if(phones.length === 0){
        noPhonsFound.classList.remove("d-none");
    }
    else{
        noPhonsFound.classList.add("d-none");
    }
    phones.forEach(phone => {
        console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
            <div class="card">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Brand :- ${phone.brand}</h5>
            <p class="card-text">Model Name :- ${phone.phone_name}</p>
            <p class="card-text">Details :- ${phone.slug}</p>
            <button class="btn btn-info">More Details</button>
            </div>
        </div>
        `;
        phonesContainer.appendChild(phoneDiv);

    });    
}
const searchField = () => {
    const searchInputField = document.getElementById('search-field');
    const searchText = searchInputField.value;
    loadPhones(searchText);
    searchInputField.value = "";
}
loadPhones('iPhone');