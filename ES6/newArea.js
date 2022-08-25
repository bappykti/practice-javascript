// *********************Six essential things in ES6*******************************

// 1. vae let const
// break up with var
const numbers = [1.,25,47,666];
let salary = 450;
salary = 500;

// 2. default parameters
function calculateSalary(salary, tax = 0, bonus = 0){
    const remaining = salary -salary*tax;
    const total = remaining + bonus;
    return total;
}
// 3. template string
const elementHTML = `
<div>
    <h3>Name : </h3>
    <p>Address : </p>
    <p>Salary : ${calculateSalary(10000, 0, 0)}</p>
    <p>Others :${numbers[2]}</p>
</div>
`

// 4. arrow function
const doubleIt = x => x*2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary *tax +bonus;

// 5. spread
const ages = [11,12,45,78,96,44];
const newAges = [77,88,41,4,...ages];

// 6. destructuring 
const {x, y, Z, ...c}={x: 44, Y:12, Z: 52, name: 'Kazi Tanvirul Islam', salary: 52000};
const [a, b, ...r]=[12,33,56,96,44];

