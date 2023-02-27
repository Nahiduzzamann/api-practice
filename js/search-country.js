const allData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => regionDisplay(data))
}
const displayData = (data) => {
    // 
    data.forEach(data => {
        const regionList = document.getElementById('regionList');
        const li = document.createElement('li');
        const lowerCaseRegion = data.toLowerCase();
        // console.log(lowerCaseRegion);
        li.innerHTML = `<a onclick="regionData('${lowerCaseRegion}')" class="dropdown-item identify">${data}</a>`
        regionList.appendChild(li);
    });
    flag = false;
}
const displayRegion = (data) => {
    data.forEach(element => {
        console.log(element);
        const div = document.getElementById('details');
        const card = document.createElement('div');
        card.innerHTML = `<div class="card me-2 mt-2" style="width: 18rem;">
        <img height="100px"  src="${element.flags.png}" class="" alt="...">
       
        <div class="card-body">
          <h5 class="card-title">Region: ${element.continents[0]}</h5>
          <p class="card-text">${element.flags.alt}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Populations: ${element.population}</li>
        </ul>
        <div class="card-body">
          <a href="${element.maps.googleMaps}" class="card-link">google Map</a>
        </div>
      </div>`;
        div.appendChild(card);

    });
}
const regionData = (region) => {
    const url = `https://restcountries.com/v3.1/region/${region}`
    fetch(url).then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Something went wrong');
    })
        .then((responseJson) => {
            displayRegion(responseJson);
        })
        .catch((error) => {
            console.log(error)
        });
}
let flag = true;
const regionDisplay = (data) => {
    var values = [];
    data.forEach(element => {
        values.push(element.region);
    });
    let uniqueData = [...new Set(values)];

    if (flag == true) {
        displayData(uniqueData);
    }
}



