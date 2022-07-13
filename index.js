const response = fetch('https://jsonplaceholder.typicode.com/users')

.then(res => {
        console.log(res)
        return res.json();
    })
    .then(data => {
        data.map(user => {
            console.log(`#: ${user.id}`, `Nome: ${user.name}`, `Nome de Usuario: ${user.username}`, `Email: ${user.email}`, `Endereço: ${user.address.street}`, `Empresa: ${user.company.name}`)
        })
    })
console.log(response)