const container1 = document.querySelector('.card-container');
console.log(container1);

fetch('https://api.artic.edu/api/v1/artworks/129884')
.then(myData => myData.json())
.then(jsonData => showInConsole(jsonData));

function showDataOnPage(jsonData, container1){
    console.log(jsonData);
    for (let i = 0; i < jsonData.length; i++) {
        //haal een land uit de array
        const object = jsonData[i];
        //toon de naam van het land en de populatie op de pagina met behulp van innerHTML
        container1.innerHTML += object.name + ' ' + object.population + '<br>';
    }
    
}