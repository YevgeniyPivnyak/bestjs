fetch('http://127.0.0.1:3000/users')
    .then((resp) => resp.json())
    .then(filterMames)
    .then(sortNames)
    .then(renderToConsole)

function filterMames(data) {
    const userNames = data.map((user) => user.first_name)
    return userNames
}

function sortNames(data) {

    return data.sort()
}
function renderToConsole(data) {

    console.log(data)
}