const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const UserModel = require('./models/Users');
const PlantsModel = require('./models/Plants');
const AngiospermModel = require('./models/Angiosperms');
const PteridophytesModel = require('./models/Pteridophytes');
const GymnospermModel = require('./models/GymnoSperms');
const BryophytesModel = require('./models/Bryophytes');
const app = express();

const dbURL = `mongodb+srv://root:root@cluster0.id80a.mongodb.net/MERN-ecommerece?retryWrites=true&w=majority`;

mongoose.connect(dbURL)
.then(()=> {
    console.log('Database is connected');
})

app.use(cors());
app.use(express.json());


//Plants routes -----------------------------------------------------


app.get("/getAllPlants", (req, res) => {
    PlantsModel.find({}, (err, result) => {

        if(err) {
            res.status(400).json({error: err});
        }else{
            res.status(200).json(result);
        }
    })
})

app.get("/getPlant", (req, res) => {

    const id = req.body.id;

    PlantsModel.findById(id, (error, result) => {

        if(error){
            res.status(400).json({
                error
            })
        }else{
            res.status(200).json({
                result
            })
        }
    })
})

app.post("/createPlant", async (req, res) => {
    
    const plant = new PlantsModel(req.body);

    await plant.save((error, result) => {

        if(error){
            return res.status(400).json({
                error: "Cant create with same name"
            })
        }

        if(result){
            return res.status(200).json({
                result
            })
        }
    })
});

app.delete('/removePlant', (req, res) => {

    const id = req.body.id;
    
    PlantsModel.findByIdAndDelete({_id: id}, (error, result) => {

        if(error){
            res.status(400).json(error)
        }else{
            res.status(200).json("Deleted..")
        }
    })
    
})

app.put('/changePlant', (req, res) =>{

    const id = req.body.id;

    PlantsModel.findByIdAndUpdate({_id: id}, req.body, (error, result)=>{

        if(error){
            res.status(400).json(error)
        }else{
            res.status(200).json(result)
        }
    })
})


// ---------------------------------------------------------------------


//Angiosperm routes -----------------------------------------------------


app.get("/getAllAngiosperm", (req, res) => {
    AngiospermModel.find({}, (err, result) => {

        if(err) {
            res.status(400).json({error: err});
        }else{
            res.status(200).json(result);
        }
    })
})

app.post("/createAngiosperm", async (req, res) => {
    
    const plant = new AngiospermModel(req.body);

    await plant.save((error, result) => {

        if(error){
            return res.status(400).json({
                error: "Cant create with same name"
            })
        }

        if(result){
            return res.status(200).json({
                result
            })
        }
    })

    
});


// ---------------------------------------------------------------------

//Byophytes routes -----------------------------------------------------


app.get("/getAllByophytes", (req, res) => {
    BryophytesModel.find({}, (err, result) => {

        if(err) {
            res.status(400).json({error: err});
        }else{
            res.status(200).json(result);
        }
    })
})

app.post("/createByophytes", async (req, res) => {
    
    const plant = new BryophytesModel(req.body);

    await plant.save((error, result) => {

        if(error){
            return res.status(400).json({
                error
            })
        }

        if(result){
            return res.status(200).json({
                result
            })
        }
    })


});


// ---------------------------------------------------------------------

//Gymnosperm routes -----------------------------------------------------


app.get("/getAllGymnosperm", (req, res) => {
    GymnospermModel.find({}, (err, result) => {

        if(err) {
            res.status(400).json({error: err});
        }else{
            res.status(200).json(result);
        }
    })
})

app.post("/createGymnosperm", async (req, res) => {
    
    const plant = new GymnospermModel(req.body);

    await plant.save((error, result) => {

        if(error){
            return res.status(400).json({
                error: "Cant create with same name"
            })
        }

        if(result){
            return res.status(200).json({
                result
            })
        }
    })


});


// ---------------------------------------------------------------------
//Pteridophytes routes -----------------------------------------------------


app.get("/getAllPteridophytes", (req, res) => {
    PteridophytesModel.find({}, (err, result) => {

        if(err) {
            res.status(400).json({error: err});
        }else{
            res.status(200).json(result);
        }
    })
})

app.post("/createPteridophytes", async (req, res) => {
    
    const plant = new PteridophytesModel(req.body);

    await plant.save((error, result) => {

        if(error){
            return res.status(400).json({
                error: "Cant create with same name"
            })
        }

        if(result){
            return res.status(200).json({
                result
            })
        }
    })

});


// ---------------------------------------------------------------------


// Users --------------------------------------------------------------

app.post("/login", (req, res) => {

    const {email, password} = req.body;

    UserModel.findOne({email, password}, (error, result) => {

        if(error){
            res.status(400).json(error)
        }else{
            res.status(200).json(result)
        }
    })

})

app.post('/signup', async (req, res) => {

    const user = new UserModel(req.body);

    await user.save((error, result) => {

        if(error){
            return res.status(400).json({
                error: 'Cant create user'                
            })
        }

        if(result){
            return res.status(200).json({
                result
            })
        }
    })
})

// ---------------------------------------------------------------------
app.listen(3001, () => {
    console.log(`Server is up`);
})