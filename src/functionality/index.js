import {compose, pipe} from "lodash/fp";

let input = "    Javascript    "
let output =  "<div>" + input.trim() + "</div>"

const trim = str => str.trim();
const wrapInDiv = type => str => `<type>${str}</type>`
const toLowerCase = str => str.toLowerCase()
const transform = pipe(trim, toLowerCase, wrapInDiv)
transform(input)
