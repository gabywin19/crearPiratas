const mongoose= require('mongoose');

const pirateSchema = new mongoose.Schema({
    pirateName: {
        type: String,
        required: true
    },
    imagenUrl: {
        type: String,
        required: true
    },
    treasureChests: {
        type: Number,
        required: true
    },
    pirateCatch: {
        type: String,
        required: true
    },
    crewPosition: {
        type: String,
        enum: ['Captain', 'First Mate', 'Quarter Master', 'Boatswain', 'Powder Monkey'],
        required: true
    },
    pegLeg :{
        type: Boolean,
        default: false
    },
    eyePatch: {
        type: Boolean,
        default: false
    },
    hoolHand: {
        type: Boolean,
        default: false
    },
   
});

const pirate= mongoose.model("pirate", pirateSchema);

module.exports = pirate;