const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const {animals} = require('./data/animals.json');
const fs=require('fs');
const path = require('path');
const { get } = require('http');
const apiRoutes=require('./routes/apiRoutes');
const htmlRoutes=require('./routes/htmlRoutes');

//parse incoming string or array data
app.use(express.urlencoded({ extended:true}));
//parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));//provide a path to a locatin in our application

app.use('/api',apiRoutes);
app.use('/',htmlRoutes);





function validateAnimal(animal){
    if(!animal.name || typeof animal.name !=='string') {
        return false;
    }
    if(!animal.species || typeof animal.species !=='string'){
        return false;
    }
    if(!animal.diet || typeof animal.diet !== 'string'){
        return false;
    }
    if(!animal.personalityTraits || !Array.isArray(animal.personalityTraits)){
        return false;
    }
    return true;
}

app.listen(PORT,()=>{
    console.log(`API server now on port ${PORT}!`);
});

