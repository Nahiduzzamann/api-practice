const allData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => regionDisplay(data))
}
const loadData = (region) => {
    const link = `https://restcountries.com/v3.1/region/${region}`
    fetch(link)
        .then(res => res.json())
        .then(data => displayData(data))
}
const regionDisplay = (data) => {
    console.log(data);
}
const displayData = (data) => {
    //console.log(data);
}

document.getElementById('region').addEventListener('click', function () {
    allData();
})

loadData('ame')
