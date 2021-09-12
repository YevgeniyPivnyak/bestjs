const LOREN_TEXT = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis illum, porro eligendi nostrum consectetur incidunt rem eius illo. Eligendi beatae culpa quibusdam corrupti ipsum vitae enim, ex in exercitationem incidunt."

fetch('http://learn.api.axenov-it.com/companies')
    .then(format).then(renderCompanies)


function format(response) {
    return response.json();
}

function createCounter(start = 0, step = 1) {
    let index = start - step;
    return () => index += step
}

function renderCompanies(companies) {
    const content = document.querySelector("#content")
    const counter = createCounter(1);

    for (const dataCompany of companies) {

        const company = new Company(dataCompany, counter())

        content.appendChild(company.buildCompany())
    }
}
class Company {
    constructor(data, counter) {
        this.data = data
        this.counter = counter
    }

    showInfo = (e) => {
        const elem = e.currentTarget.querySelector(".company-info");

        if (elem.classList.contains("hide")) {
            elem.classList.replace("hide", "show");
        } else {
            elem.classList.replace("show", "hide");
        }
    }

    renderTemplate() {
        const { name, address, city } = this.data

        return `
            <div class="company-header">
                <div class="number-of-company">${this.counter}</div>
                <h3>${name}</h3>
                <div>${address}</div>
                <div>${city}</div>
            </div>
            <div class="company-info hide" >
                <div class="company-text">${LOREN_TEXT}</div>
            </div>
            `
    }

    buildCompany() {
        const company = document.createElement("div")
        company.className = "company-row";

        company.onclick = this.showInfo;

        company.innerHTML = this.renderTemplate()
        return company
    }

}



