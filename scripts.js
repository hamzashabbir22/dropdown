let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                 "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                 "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
                 "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
                 "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
                 "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

 
const container = document.querySelector('.container');
const selectBtn = container.querySelector('.select-option')
const dropDownList = container.querySelector('.list-search-container')
const lists = dropDownList.querySelector('.list')
const searchInp = dropDownList.querySelector('#search');

selectBtn.addEventListener('click',()=>{
    container.classList.toggle('active');
})

function showCountries(){
    countries.forEach((country)=>{
        let lisItems = `<li>${country}</li>`
        lists.insertAdjacentHTML('beforeend',lisItems)
    })
}

showCountries()

function callEvent(){
    let lisItems = lists.querySelectorAll('li');
    lisItems.forEach((lisItem)=>{
        lisItem.addEventListener('click',()=>{
            updateCountry(lisItem.innerHTML)
        })
    })   
}

callEvent();

function updateCountry(selectedItem){
    searchInp.value = '';
    selectBtn.firstElementChild.innerHTML = selectedItem;
    container.classList.remove('active')
}

searchInp.addEventListener('keyup',()=>{
    let searchedValue = searchInp.value.toLowerCase()
    filterCountries(searchedValue)
})

function filterCountries(searchedValue){
   let filterdCountries = countries.filter((country)=>{
     return country.toLocaleLowerCase().startsWith(searchedValue);
   }).map(country=>{
     return `<li>${country}</li>`
   }).join('')
   lists.innerHTML = filterdCountries;
   callEvent()
   showCountries()
}

