import {Map, set} from "immutable";
import {produce} from "immer";

let book = Map({title: 'Harry Potter'})

function publish(book) {
    // book.isPlublished=true
    return book.set("isPlublished", true) //will return a new object
}
book = publish(book)
console.log(book.toJS())


//immer

let book = Map({title: 'Harry Potter'})

function publish(book) {
    // book.isPlublished=true
    return produce(book, draftBook => {
        draftBook.isPlublished = true
    }) //will return a new object
}
book = publish(book)
console.log(book.toJS())

