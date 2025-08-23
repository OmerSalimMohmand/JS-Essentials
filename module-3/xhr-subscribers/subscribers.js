const url = "subscribers.json";

const xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.responseType = "json";

xhr.onload = function(){
    const subscribers = xhr.response.subscribers;
    // console.log(subscribers);

    const subscribersDiv = document.getElementById("subscribers");

    subscribers.forEach(subscriber => {

        const subscriberDiv = document.createElement('div');
        subscriberDiv.classList.add('subDiv');

        const username = document.createElement('h3');
        username.textContent = subscriber.username;

        const email = document.createElement('h4');
        email.textContent = subscriber.email;

        const favoritesHeader = document.createElement('h3');
        favoritesHeader.textContent = 'Favorites:';

        const favorite_list = document.createElement('ul');
        subscriber.favorites.forEach(favorite => {
            const item = document.createElement('li')
            item.textContent = favorite;
            favorite_list.appendChild(item);
        });

        const address = document.createElement('small');
        address.textContent = `${subscriber.address.country}, ${subscriber.address.street}`;
        address.style.color = 'gray';

        subscriberDiv.appendChild(username);
        subscriberDiv.appendChild(email);
        subscriberDiv.appendChild(favoritesHeader);
        subscriberDiv.appendChild(favorite_list);
        subscriberDiv.appendChild(address);

        subscribersDiv.appendChild(subscriberDiv);
    });
}
xhr.send();