const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis illum, porro eligendi nostrum consectetur incidunt rem eius illo. Eligendi beatae culpa quibusdam corrupti ipsum vitae enim, ex in exercitationem incidunt."

fetch('http://learn.api.axenov-it.com/companies')
    .then(format).then(renderCompanies)


function format(response) {
    return response.json();
}

function renderCompanies(companies) {
    const content = document.querySelector("#content")

    let counter = 1

    for (const company of companies) {
        const row = document.createElement("div")
        row.className = "company-row";
        row.onclick = (e) => {
            const elem = e.currentTarget.querySelector(".company-info");
            if (elem.classList.contains("hide")) {
                elem.classList.replace("hide", "show");
            } else {
                elem.classList.replace("show", "hide");
            }
            console.log(elem.classList.contains("hide"))
        };

        row.innerHTML = `
            <div class="company-header">
                <div class="number-of-company">${counter++}</div>
                <h3>${company.name}</h3>
                <div>${company.address}</div>
                <div>${company.city}</div>
            </div>
            <div class="company-info hide" ><div class="company-text">${text}</div></div>
           `
        content.appendChild(row)
    }

}

