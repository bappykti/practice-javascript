localStorage.setItem('person', JSON.stringify([{ name: 'bappy', age: '33' },
{ name: 'rabbi', age: 26 }]));
const user = JSON.parse(localStorage.getItem('person'));
console.log(user);
localStorage.removeItem('person');

const getElement = (id) =>{
    const element = document.getElementById(id);
    return element

}
const handleSubmit =()=>{
    console.log("i am clicked");
    const todos = JSON.parse(localStorage.getItem("TODOS"))
    console.log(todos);
    const inputText = getElement("todo-text").value;
    // console.log(inputText.value);
    // const ul =document.getElementById('added-itmes');
    // const li = document.createElement('li');
    // li.innerHTML = inputText;
    // ul.appendChild(li);
    if(!todos){
        const todoList = [{
            inputText : 'Hello world',
            compleated : false,
        }];
        
        localStorage.setItem("TODOS", JSON.stringify(todoList));
    }
    else{
        const todoList = [
            ...todos,
            {
            inputText : 'Hello world',
            compleated : false,
        }];
        localStorage.setItem("TODOS", JSON.stringify(todoList));
    }
    render();
}

const render = () => {
    const todos =  JSON.parse(localStorage.getItem("TODOS"));
    console.log(todos);
    const ul =document.getElementById('added-itmes');
    todos.forEach(item => {
        console.log(item);
        const li = document.createElement('li');
        li.innerHTML = item;
        ul.appendChild(li);
    });
};
render();