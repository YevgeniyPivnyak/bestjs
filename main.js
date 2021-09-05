const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://learn.api.axenov-it.com/companies', false);

xhr.send();

const companies = JSON.parse(xhr.response)

const content = document.querySelector("#content")

let html = ""
let counter = 1

for (const company of companies) {
    html += `<div class="company-row">
        <div class="number-of-company">${counter++}</div>
        <h3>${company.name}</h3>
        <div>${company.address}</div>
        <div>${company.phones}</div>
    </div>`

}

content.innerHTML = html

console.log(html);

