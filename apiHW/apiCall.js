let rootdiv = document.getElementById('root');
let container = document.createElement('div');
rootdiv.style.textAlign='center';
rootdiv.style.backgroundColor='gray';


let logo = document.createElement('img');
logo.src = "dl1.jpg";
logo.style.height='400px';
logo.style.width='800px';

rootdiv.appendChild(logo);
rootdiv.appendChild(container);

let request = new XMLHttpRequest();
request.open("GET","https://jsonplaceholder.typicode.com/users", true);

request.onload = function() {
let data = JSON.parse(this.response);
if (request.status >= 200 && request.status < 400) {
    data.forEach(people => {
        let card = document.createElement('div');
        let header1 = document.createElement('h1');
        header1.textContent = people.name;
        header1.style.fontFamily='script';

        card.classList.add('w3-border','w3-round-xlarge', 'w3-black');
        card.style.marginTop='20px';
        card.style.marginRight='16rem';
        card.style.marginLeft='16rem';

        let para1 = document.createElement('p');
        people.username = people.username.substring(0,300);
        para1.textContent = `${people.username}`;


        let website = document.createElement('p');
        website.textContent = people.website;

        let email = document.createElement('p');
        email.textContent = people.email;


        container.appendChild(card);
        card.appendChild(header1);
        card.appendChild(para1);
        card.appendChild(website);
        card.appendChild(email);
     
    });

}else  {
    console.log('error');
    let errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'oh no! its not working';
    rootdiv.appendChild(errorMessage);

}
}

request.send();