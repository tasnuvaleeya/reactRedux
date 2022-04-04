const person = {name: "john", address: {
    country: 'USA',
        city: 'San Francisco'
    }}

// const updated = Object.assign({}, person, {name: "Doe"})

const updated = {...person, name: "Bob"}

updated.address.city = 'New York'

const updated = {...person, address: {...person.address, city: 'New York'}, name: "Bob"}

const numbers = [1, 2, 3]
//adding

const index = numbers.indexOf(2)
// const added = [...numbers, 4]

const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)]

//removing

const remove = numbers.filter(n=>n !== 2)

//updating

const update = numbers.map(n => n === 2 ? 20 : n)