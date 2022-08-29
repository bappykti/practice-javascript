// console.log('hello world');

const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(data => dispayUsers(data.results))
}
const dispayUsers = users =>{
    // console.log(user);
    const usersContainer = document.getElementById('user-container');
    for (const user of users){
        console.log(user);
        const usersDiv = document.createElement('div');
        usersDiv.classList.add('user');
        usersDiv.innerHTML = `
        <h3>User Name :- ${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <p>User Info :- ${user.email}</p>
        <p>Location :- ${user.location.city} ${user.location.state} ${user.location.country} ${user.location.postcode} </p>
        `;
        usersContainer.appendChild(usersDiv);
    }
}
loadUsers();