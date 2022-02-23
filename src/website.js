import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function createHeader(){
    const header = document.createElement('header');
    header.classList.add('header');

    const headerImageLeft = document.createElement('img');
    headerImageLeft.src = 'assets/husky2.jpg';
    headerImageLeft.alt = 'husky image';

    const restaurantTitle = document.createElement('h1');
    restaurantTitle.textContent = "Hiberian Susky's";

    const headerImageRight = document.createElement('img');
    headerImageRight.src = 'assets/husky3.jpg';
    headerImageRight.alt = 'husky image';

    header.appendChild(headerImageLeft);
    header.appendChild(restaurantTitle);
    header.appendChild(headerImageRight);
    header.appendChild(createNav());

    return header;
}

function createNav(){
    const nav = document.createElement('nav');

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.classList.add('home-button');
    homeButton.addEventListener('click',function(e){
        if(e.target.classList.contains('active')) return;
        setActiveButton(homeButton);
        loadHome();
    })

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.classList.add('menu-button');
    menuButton.addEventListener('click',function(e){
        if(e.target.classList.contains('active')) return;
        setActiveButton(menuButton);
        loadMenu();
    })

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.classList.add('contact-button');
    contactButton.addEventListener('click',function(e){
        if(e.target.classList.contains('active')) return;
        setActiveButton(contactButton);
        loadContact();
    })

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function setActiveButton(button){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.classList.remove('active');
    })
    button.classList.add('active');
}

function createMain(){
    const main = document.createElement('main');
    main.setAttribute('id','main');
    return main;
}

function loadWebsite(){
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());

    setActiveButton(document.querySelector('button'));
    loadHome();
}

export default loadWebsite;