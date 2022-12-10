const usuarios = document.querySelector('#usuarios')

const url ='https://jsonplaceholder.typicode.com/users'
const query = fetch(url)
                .then(response => response.json()) //return implicito
                .then(data => mostrarDom(data))
                
/*console.log(query)*/

function mostrarDom(data){
    console.log(data);
    data.forEach(element => {
        console.log(element.name);
        
    });
}