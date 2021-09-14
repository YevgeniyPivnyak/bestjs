fetch('http://learn.api.axenov-it.com/users')
    .then(format).then(renderUsers)


function format(response) {
       return response.json();
}

function createCounter(start = 0, step = 1) {
    let index = start - step;
    return () => index += step
}

function buildUser(data, counter) {
    const { name, age, city } = data

    const row = document.createElement("div")
    row.className = "user-row";

    row.innerHTML = `
        <div class="company-header">
            <div class="number-of-user">${counter}</div>
            <h3>Name: ${name}</h3>
            <div>Age: ${age}</div>
            <div>City: ${city}</div>
        </div>
       `
    return row
}


function renderUsers(users) {
    const content = document.querySelector("#content")
    const counter = createCounter(1);

    for (const user of users) {
        const row = buildUser(user, counter());

        content.appendChild(row)
    }

}



