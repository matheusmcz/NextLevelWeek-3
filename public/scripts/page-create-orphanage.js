//Create map

const map = L.map('mapid').setView([-9.6362077, -35.7345038], 13);

//Create and add titlelayer
L
    .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);

//Create icon map
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

//create and add marker

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    //captura latitude e longitude
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;



    //remove icon from map

    marker && map.removeLayer(marker)

    //add icon layer

    marker = L.marker([lat, lng], {icon})
    .addTo(map)


})

// upload photo's

function addPhotoField() {
    //catch container photo's #images
    const container = document.querySelector('#images')

    // catch container for make double .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // make a clone, last image clone
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    // verification
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    // clear 
    input.value = ""

    // add clone to container of #images
    container.appendChild(newFieldContainer)
}

// delete field

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // delete campo
    span.parentNode.remove();
}


// select yes or no

function toggleSelect(event){

    // retirar a class .activer (dos botoes)

    document.querySelectorAll(".button-select button")
    .forEach(button => {button.classList.remove('active')})


    // colocar a class .active no botao clicado
    const button = event.currentTarget
    button.classList.add("active")

    // atualizar o meu input hidden com o valor selecionado

    const input = document.querySelector('[name=open_on_weekends]')
    
    
    
    // verificar se sim ou nao
    
    input.value = button.dataset.value

}

// function validate(event){
//     const submit = event

//     if(submit.value(fields).includes('')){
//         return alert('Todos os campos devem ser preenchidos!')
//     }
    
// }