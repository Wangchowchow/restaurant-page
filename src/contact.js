function createContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact-container');

    const phoneImage = document.createElement('img');
    phoneImage.src = 'assets/phone.png';
    phoneImage.alt = 'phone image';

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '111-222-333';

    const addressImage = document.createElement('img');
    addressImage.src = 'assets/map-marker.png';
    addressImage.alt = 'address image';

    const address = document.createElement('p');
    address.textContent = 'Northern Siberia Street 123, Siberia';

    const location = document.createElement('img');
    location.src = 'assets/siberia.jpg';
    location.alt = 'map of siberia';

    contact.appendChild(phoneImage);
    contact.appendChild(phoneNumber);
    contact.appendChild(addressImage);
    contact.appendChild(address);
    contact.appendChild(location);

    return contact;
}

function loadContact(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;