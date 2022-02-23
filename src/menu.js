function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu-container');

    const tomYum = document.createElement('div');
    tomYum.classList.add('food-container');
    const tomYumImage = document.createElement('img');
    tomYumImage.src = 'assets/tomyum.jpg';
    tomYumImage.alt = 'tom yum image';
    const tomYumTitle = document.createElement('h2');
    tomYumTitle.textContent = 'Tom Yum';
    const tomYumDescription = document.createElement('p');
    tomYumDescription.textContent = 'Hot and sour flavours, with fragrant spices and herbs generously used in the broth.';
    tomYum.appendChild(tomYumImage);
    tomYum.appendChild(tomYumTitle);
    tomYum.appendChild(tomYumDescription);

    const curry = document.createElement('div');
    curry.classList.add('food-container');
    const curryImage = document.createElement('img');
    curryImage.src = 'assets/curry.png';
    curryImage.alt = 'curry image';
    const curryTitle = document.createElement('h2');
    curryTitle.textContent = 'Curry';
    const curryDescription = document.createElement('p');
    curryDescription.textContent = 'Roux thickened stew that includes meat, onions, carrots, and potatoes. It comes in various levels of spiciness as well!';
    curry.appendChild(curryImage);
    curry.appendChild(curryTitle);
    curry.appendChild(curryDescription);

    const salad = document.createElement('div');
    salad.classList.add('food-container');
    const saladImage = document.createElement('img');
    saladImage.src = 'assets/salad.png';
    saladImage.alt = 'salad image';
    const saladTitle = document.createElement('h2');
    saladTitle.textContent = 'Salad';
    const saladDescription = document.createElement('p');
    saladDescription.textContent = 'Consists of mixed, mostly natural ingredients that are dressed. Served either cold, or warm.';
    salad.appendChild(saladImage);
    salad.appendChild(saladTitle);
    salad.appendChild(saladDescription);

    const sandwich = document.createElement('div');
    sandwich.classList.add('food-container');
    const sandwichImage = document.createElement('img');
    sandwichImage.src = 'assets/sandwich.png';
    sandwichImage.alt = 'sandwich image';
    const sandwichTitle = document.createElement('h2');
    sandwichTitle.textContent = 'Sandwich';
    const sandwichDescription = document.createElement('p');
    sandwichDescription.textContent = 'A sandwich which contains cabbage, lettuce, sliced ham and cheese, placed between breads that serve as a container or wrapper.';
    sandwich.appendChild(sandwichImage);
    sandwich.appendChild(sandwichTitle);
    sandwich.appendChild(sandwichDescription);

    menu.appendChild(tomYum);
    menu.appendChild(curry);
    menu.appendChild(salad);
    menu.appendChild(sandwich);

    return menu;
}

function loadMenu(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;