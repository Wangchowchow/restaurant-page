function createHome(){
    const home = document.createElement('div');
    home.classList.add('home-container');

    const huskyImage = document.createElement('img');
    huskyImage.src = 'assets/husky1.jpeg';
    huskyImage.alt = 'husky image';

    const description1 = document.createElement('p');
    description1.textContent = 'Such Cuisine Much Wow';
    description1.classList.add('home-description');

    const description2 = document.createElement('p');
    description2.textContent = 'Come And Visit Us Hooman!';
    description2.classList.add('home-description');

    home.appendChild(huskyImage);
    home.appendChild(description1);
    home.appendChild(description2);

    return home;
}

function loadHome(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;