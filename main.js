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

const showInfo = (e) => {
    const elem = e.currentTarget.querySelector(".company-info");

    if (elem.classList.contains("hide")) {
        elem.classList.replace("hide", "show");
    } else {
        elem.classList.replace("show", "hide");
    }
};


function buildCompany(data, counter) {
    const { name, address, city } = data

    const row = document.createElement("div")
    row.className = "company-row";

    row.onclick = showInfo;

    row.innerHTML = `
        <div class="company-header">
            <div class="number-of-company">${counter}</div>
            <h3>${name}</h3>
            <div>${address}</div>
            <div>${city}</div>
        </div>
        <div class="company-info hide" ><div class="company-text">${LOREN_TEXT}</div></div>
       `
    return row
}


function renderCompanies(companies) {
    const content = document.querySelector("#content")
    const counter = createCounter(1);

    for (const company of companies) {
        const row = buildCompany(company, counter());

        content.appendChild(row)
    }

}



