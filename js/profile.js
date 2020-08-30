window.addEventListener('load', function (req) {
    //accessing id through query params
    const urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');

    let xhr = new XMLHttpRequest();
    xhr.open('get', `https://superheroapi.com/api.php/3976831975725162/${id}`);
    xhr.send();
    xhr.onload = searchAndUpdate;
    xhr.onerror = function (err) { console.log(err.responseText); };
});

//searching for the super and updating its info to the DOM
function searchAndUpdate(data) {

    //converting to JSON format
    data = JSON.parse(data.target.response);

    let superHeroName = document.getElementById("super-hero-name");
    let superHeroImg = document.getElementById("super-hero-image");
    let superHeroDetail = document.getElementById("super-hero-details");

    superHeroName.innerHTML = `${data.name}`;
    superHeroImg.innerHTML = `<img src="${data.image.url}" alt="${data.name}">`;
    superHeroDetail.children[0].innerHTML += ` ${data.biography["full-name"] || "Not Available"}`;
    superHeroDetail.children[1].innerHTML += ` ${data.appearance.gender || "Not Available"}`;
    superHeroDetail.children[2].innerHTML += ` ${data.biography["place-of-birth"] || "Not Available"}`;
    superHeroDetail.children[3].innerHTML += ` ${data.biography.publisher || "Not Available"}`;
    superHeroDetail.children[4].innerHTML += ` ${data.biography["first-appearance"] || "Not Available"}`;
    superHeroDetail.children[5].innerHTML += ` ${data.appearance.height[1] || data.appearance.height[0] || "Not Available"}`;
    superHeroDetail.children[6].innerHTML += ` ${data.appearance.weight[1] || data.appearance.weight[0] || "Not Available"}`;
    superHeroDetail.children[7].innerHTML += ` ${data.powerstats.intelligence || "Not Available"}`;
    superHeroDetail.children[8].innerHTML += ` ${data.powerstats.strength || "Not Available"}`;
    superHeroDetail.children[9].innerHTML += ` ${data.powerstats.power || "Not Available"}`;
    superHeroDetail.children[10].innerHTML += ` ${data.powerstats.durability || "Not Available"}`;
    superHeroDetail.children[11].innerHTML += ` ${data.powerstats.combat || "Not Available"}`;
}