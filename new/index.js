const container1 = document.querySelector('.card-container');
console.log(container1);

fetch('https://api.artic.edu/api/v1/artworks')
.then(myData => myData.json())
.then(jsonData => showDataOnPage(jsonData));


function showDataOnPage(jsonData){
    //
    const data = jsonData.data;
    console.log(data);

    for (let i = 0; i < data.length; i++) {
        //haal een land uit de array
        const object = data[i];
        console.log(object);
        //toon de naam van het land en de populatie op de pagina met behulp van innerHTML

        let description = object.description;
        if(description == null){
            description = "";
        }
       
        container1.innerHTML += '<b>' + object.title + '</b> <br>' + description + "<img width='100px' height='150px' src='"+ object.thumbnail.lqip+"'> <br><br>";
    }
    
}

