let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                 "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                 "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
                 "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
                 "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
                 "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];


const container = document.querySelector('.container');
const selectBtn = container.querySelector('.select-option');
const dropDownList = container.querySelector('.list-search-container');
const lists = dropDownList.querySelector('.list');
const searchInput = container.querySelector('#search');

selectBtn.addEventListener('click',()=>{
   container.classList.toggle('active')
})

showCountries();

function showCountries(selectedCountry){
       countries.forEach((country)=>{
        //    let isSelected = selectedCountry === country? 'selected' : '';
           let listItems = `<li class=''>${country}</li>`;
           lists.insertAdjacentHTML('beforeend',listItems);
       })
} 

const updateCountry = (listItem) => {
      searchInput.value = '';
      selectBtn.firstElementChild.innerHTML = listItem.innerHTML;
      container.classList.remove('active')
    //   showCountries(listItem.innerHTML)
}

function callEvent(){
    const listItems = lists.querySelectorAll('li');
listItems.forEach(listItem=>{
      listItem.addEventListener('click',()=>{
        updateCountry(listItem)
      })
})
}

callEvent();

function filterCountries(value){
    let filterdCountries = countries.filter(country=>{
       return country.toLocaleLowerCase().startsWith(value)
    }).map(country=>{
       return `<li>${country}</li>`
    }).join('')
    lists.innerHTML = filterdCountries;
    callEvent()
}

searchInput.addEventListener('keyup',()=>{
    let searchedValue = searchInput.value.toLowerCase();
    filterCountries(searchedValue)
})


