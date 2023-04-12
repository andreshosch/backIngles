const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    dni: { type: Number, required: true },
    domicilio: { type: String, required: true },
    telefono: { type: Number, required: true },
    mail: { type: String, required: true },
    curso: { type: String, required: true },

});


const student = mongoose.model('Students', studentSchema);

module.exports = student;