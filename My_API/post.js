// console.log("hello");

const url = 'https://jsonplaceholder.typicode.com/posts';
const  loadPosts = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => displayPosts(data))
}
function displayPosts(posts){
    const postContainer = document.getElementById('posts-container');
        for(const post of posts){
            console.log(post);
            const postDiv = document.createElement('div');
            postDiv.innerHTML= `
            <h4>User :- ${post.userId} </h4>
            <h5>Post :- ${post.title}</h5>
            <p>Post Description :- ${post.body} </p>
            `;
            postContainer.appendChild(postDiv);
        }

}
loadPosts();