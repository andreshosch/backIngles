const Alumno = require("../schema/schemaStudents");


exports.createStudent = async(req, res) => {

    try {
        let alumno;

        // Creamos nuestro producto
        alumno = new Alumno(req.body);

        await alumno.save();
        res.send(alumno);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.getStudents = async(req, res) => {

    try {

        const alumno = await Alumno.find();
        res.json(alumno)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.updateStudents = async(req, res) => {

    try {
        const { nombre, apellido, dni, domicilio, telefono, mail, curso } = req.body;
        let alumno = await Alumno.findById(req.params.id);

        if (!alumno) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        alumno.nombre = nombre;
        alumno.apellido = apellido;
        alumno.dni = dni;
        alumno.domicilio = domicilio;
        alumno.telefono = telefono;
        alumno.mail = mail;
        alumno.curso = curso;


        alumno = await Alumno.findOneAndUpdate({ _id: req.params.id }, alumno, { new: true })
        res.json(alumno);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.getStudentById = async(req, res) => {

    try {
        let alumno = await Alumno.findById(req.params.id);

        if (!alumno) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        res.json(alumno);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.deleteStudents = async(req, res) => {

    try {
        let alumno = await Alumno.findById(req.params.id);

        if (!alumno) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        await Alumno.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Producto eliminado con exito' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}