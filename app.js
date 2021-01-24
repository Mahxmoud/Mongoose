const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

// REQUIRING THE MODEL
const Person = require('./models/Person')

const app = express()

// CONNECTING TO THE DB
mongoose.connect(
    process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    console.log('db is connected')
)



// Create and Save a Record of a Model 
// let mahmoud = new Person({ name: "Mahmoud Joma", age: 24, favoriteFoods: ['Burger', 'Fries', 'Fast Food', 'anything not healthy'] })

// mahmoud.save((data, err) => {
//     try {
//         console.log(data)
//     } catch (err) {
//         console.log({ message: err })
//     }
// })



// Create Many Records with model.create()
// let manyPersons = [
//     { name: "Haroun something", age: 20, favoriteFoods: ['Burger', 'Fries', 'Fast Food', 'anything not healthy'] },
//     { name: "Wassim Boshlama", age: 26, favoriteFoods: ['Burger', 'Fries', 'Fast Food', 'anything not healthy'] },
//     { name: "Mahmoud Joma", age: 24, favoriteFoods: ['Burger', 'Fries', 'Fast Food', 'anything not healthy'] }
// ]
// Person.create(manyPersons, (createdPersons, err) => {
//     try {
//         console.log(createdPersons)
//     } catch (err) {
//         console.log({ message: err })
//     }
// })



// Use model.find() to Search Your Database
// Person.find({ name: 'Mahmoud Joma'}, (foundPersons, err) => {
//     try {
//         console.log(foundPersons)
//     } catch (err) {
//         console.log({ message: err })
//     }
// })



// Use model.findOne() to Return a Single Matching Document from Your Database
// Person.findOne({ favoriteFoods: {$all : [food]}}, (foundPerson, err) => {
//     try {
//         console.log(foundPerson)
//     } catch (err) {
//         console.log({ message: err })
//     }
// })



// Use model.findById() to Search Your Database By _id
// const findEditThenSave = (personId) => {
//     const foodToAdd = "hamburger";
//     Person.findById(personId, (res, err) => {
//         try {
//             res.favoriteFoods.push(foodToAdd)
//             res.save((updatedResult, err) => {
//                 try {
//                     console.log(updatedResult)
//                 } catch (err) {
//                     console.log(err)
//                 }
//             })
//         } catch (err) {
//             console.log(err)
//         }
//     })
// }



// Perform New Updates on a Document Using model.findOneAndUpdate()
// const findAndUpdate = function (personName) {
//     const updatedAge = 20;

//     Person.findOneAndUpdate({ name: personName }, { age: updatedAge }, { new: true }, (error, updatedRecord) => {
//         if (error) {
//             console.log(error)
//         } else {
//             done(null, updatedRecord)
//         }
//     })
// }



// Delete One Document Using model.findByIdAndRemove
// const removeById = function (personId) {

//     Person.findByIdAndRemove(personId, (deletedRecord, err) => {
//         try {
//             console.log(deletedRecord)
//         } catch (err){
//             console.log(err)
//         }
//     })
// }



// MongoDB and Mongoose - Delete Many Documents with model.remove()
// const removeManyPeople =  ()=> {
//     const nameToRemove = "Mahmoud Joma";

//     Person.remove({ name: nameToRemove }, (status, err) => {
//         try {
//             console.log(status)
//         } catch(err){
//             console.log(err)
//         }
//     })
// }



// Chain Search Query Helpers to Narrow Search Results
// const queryChain = () => {
//     const foodToSearch = "Burger";

//     Person.find({ favoriteFoods: { $all: [foodToSearch] } })
//         .sort({ name: 'asc' })
//         .limit(2)
//         .select('-age')
//         .exec((filteredResults, err) => {
//             try {
//                 console.log(filteredResults)
//             } catch (err) {
//                 console.log(err)
//             }
//         })
// }




// LISTENING TO THE SERVER ON 3000 PORT
app.listen(3000, (err) => {
    if (err)
        console.log(err)
    else
        console.log('server connected on 3000')
})