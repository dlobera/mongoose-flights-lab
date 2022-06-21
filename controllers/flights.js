import {Flight} from '../models/flight.js'

function newFlight (req, res) {
  res.render("flights/new", {
    title: "Add Flight",
  })
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
	}
  Flight.create(req.body)
  .then(flight => {
    res.redirect(`/flights`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}


export {
  newFlight as new,
  create,
}