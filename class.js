let ListadoCensitas = [
    { NombreCensita: 'Diego Rodriguez', NombreUsuario: "DRodriguez", Password: 'Fulanito123', IDCensita: 1 },
    { NombreCensita: 'Dario Geido', NombreUsuario: "DGeido", Password: '12Ejemplo34', IDCensita: 2 },
    { NombreCensita: 'Juan Perez', NombreUsuario: "JPerez", Password: 'Rueda123', IDCensita: 3 }
]
class Censitas {
    constructor(NombCensita, UsuarioCensista, Pass, ID) {
        this.NombreCensita = NombCensita
        this.NombreUsuario = UsuarioCensista
        this.Password = Pass
        this.IDCensita = ID
    }

    //para obtener la ID censista a pagar en el array ListadoCensistas
    obtenerIDCensista() {
        let IDCensita = this.proximaIDCencista
        this.proximaIDCencista++
        return IDCensita
    }
}
let ListadoCensados = [
    { NumeroCedula: '43325530', NombreCensado: 'Diego', ApellidoCensado: 'Rodriguez', EdadCensado: '32', DepartamentoCensado: 'Montevideo', OcupacionCensado: 'Dependiente', Propiedad: false, idCensista: false },
    { NumeroCedula: '47405126', NombreCensado: 'Dario', ApellidoCensado: 'Geido', EdadCensado: '27', DepartamentoCensado: 'Montevideo', OcupacionCensado: 'Dependiente', Propiedad: false, idCensista: false },
    { NumeroCedula: '18945874', NombreCensado: 'Marcelo', ApellidoCensado: 'Duarte', EdadCensado: '49', DepartamentoCensado: 'Soriano', OcupacionCensado: 'Independiente', Propiedad: false, idCensista: false },
    { NumeroCedula: '19955856', NombreCensado: 'Daniela', ApellidoCensado: 'Souza', EdadCensado: '19', DepartamentoCensado: 'Maldonado', OcupacionCensado: 'Estudiante', Propiedad: false, idCensista: false },
    { NumeroCedula: '19995892', NombreCensado: 'Guadalupe', ApellidoCensado: 'Perez', EdadCensado: '29', DepartamentoCensado: 'Treinta y Tres', OcupacionCensado: 'Dependiente', Propiedad: false, idCensista: false },
    { NumeroCedula: '29395321', NombreCensado: 'Fernanda', ApellidoCensado: 'Garrido', EdadCensado: '16', DepartamentoCensado: 'Rocha', OcupacionCensado: 'Independiente', Propiedad: false, idCensista: false },
    { NumeroCedula: '26375526', NombreCensado: 'Esteban', ApellidoCensado: 'Quintana', EdadCensado: '28', DepartamentoCensado: 'Canelones', OcupacionCensado: 'Dependiente', Propiedad: false, idCensista: false },
    { NumeroCedula: '25361510', NombreCensado: 'Bruno', ApellidoCensado: 'Burgues', EdadCensado: '17', DepartamentoCensado: 'Artigas', OcupacionCensado: 'Independiente', Propiedad: false, idCensista: false },
    { NumeroCedula: '27668566', NombreCensado: 'Carolina', ApellidoCensado: 'Garofalo', EdadCensado: '38', DepartamentoCensado: 'Montevideo', OcupacionCensado: 'Dependiente', Propiedad: false, idCensista: false },
    { NumeroCedula: '29669998', NombreCensado: 'Micaela', ApellidoCensado: 'Alvarez', EdadCensado: '21', DepartamentoCensado: 'Montevideo', OcupacionCensado: 'Estudiante', Propiedad: false, idCensista: false },
    { NumeroCedula: '28681117', NombreCensado: 'Gabriel', ApellidoCensado: 'Vargas', EdadCensado: '15', DepartamentoCensado: 'Montevideo', OcupacionCensado: 'Independiente', Propiedad: false, idCensista: false },
    { NumeroCedula: '28989676', NombreCensado: 'Maria', ApellidoCensado: 'Pardinas', EdadCensado: '31', DepartamentoCensado: 'Canelones', OcupacionCensado: 'Dependiente', Propiedad: false, idCensista: false },
    { NumeroCedula: '38989674', NombreCensado: 'Mercedes', ApellidoCensado: 'Comas', EdadCensado: '51', DepartamentoCensado: 'Rivera', OcupacionCensado: 'Independiente', Propiedad: false, idCensista: false },
    { NumeroCedula: '31239377', NombreCensado: 'Javier', ApellidoCensado: 'Iglesias', EdadCensado: '17', DepartamentoCensado: 'Salto', OcupacionCensado: 'Dependiente', Propiedad: false, idCensista: false },
    { NumeroCedula: '32249553', NombreCensado: 'Martin', ApellidoCensado: 'Vazquez', EdadCensado: '18', DepartamentoCensado: 'Durazno', OcupacionCensado: 'Estudiante', Propiedad: false, idCensista: false },
    { NumeroCedula: '39999593', NombreCensado: 'Juan', ApellidoCensado: 'Santurio', EdadCensado: '29', DepartamentoCensado: 'Salto', OcupacionCensado: 'Dependiente', Propiedad: false, idCensista: false },
    { NumeroCedula: '38998598', NombreCensado: 'Valentina', ApellidoCensado: 'Vacarini', EdadCensado: '28', DepartamentoCensado: 'Flores', OcupacionCensado: 'Dependiente', Propiedad: false, idCensista: false },
    { NumeroCedula: '32221113', NombreCensado: 'Nicolas', ApellidoCensado: 'Pelistri', EdadCensado: '35', DepartamentoCensado: 'Florida', OcupacionCensado: 'Independiente', Propiedad: false, idCensista: false },
    { NumeroCedula: '31233210', NombreCensado: 'Camila', ApellidoCensado: 'Gutierrez', EdadCensado: '39', DepartamentoCensado: 'Lavalleja', OcupacionCensado: 'No trabaja', Propiedad: false, idCensista: false },
    { NumeroCedula: '31453210', NombreCensado: 'Carlos', ApellidoCensado: 'Garcia', EdadCensado: '49', DepartamentoCensado: 'Montevideo', OcupacionCensado: 'Dependiente', Propiedad: false, idCensista: false },
    { NumeroCedula: '31569996', NombreCensado: 'Diana', ApellidoCensado: 'Alvarado', EdadCensado: '14', DepartamentoCensado: 'Soriano', OcupacionCensado: 'Estudiante', Propiedad: false, idCensista: false },
    { NumeroCedula: '44469995', NombreCensado: 'Maria', ApellidoCensado: 'Lema', EdadCensado: '31', DepartamentoCensado: 'Tacuarembo', OcupacionCensado: 'Dependiente', Propiedad: false, idCensista: false },
    { NumeroCedula: '45469952', NombreCensado: 'Kamila', ApellidoCensado: 'Sousa', EdadCensado: '13', DepartamentoCensado: 'Artigas', OcupacionCensado: 'Dependiente', Propiedad: false, idCensista: false },
    { NumeroCedula: '49499159', NombreCensado: 'Romina', ApellidoCensado: 'Lopez', EdadCensado: '22', DepartamentoCensado: 'Cerro Largo', OcupacionCensado: 'Estudiante', Propiedad: false, idCensista: false },
    { NumeroCedula: '48855330', NombreCensado: 'Roman', ApellidoCensado: 'Reginesi', EdadCensado: '19', DepartamentoCensado: 'Maldonado', OcupacionCensado: 'Estudiante', Propiedad: false, idCensista: false },
    { NumeroCedula: '49865431', NombreCensado: 'Mia', ApellidoCensado: 'Laurencio', EdadCensado: '17', DepartamentoCensado: 'Paysandu', OcupacionCensado: 'No trabaja', Propiedad: false, idCensista: false },
    { NumeroCedula: '47845239', NombreCensado: 'Daniel', ApellidoCensado: 'Gomez', EdadCensado: '35', DepartamentoCensado: 'Rocha', OcupacionCensado: 'Independiente', Propiedad: false, idCensista: false },
    { NumeroCedula: '49854218', NombreCensado: 'Clementina', ApellidoCensado: 'Luzardo', EdadCensado: '16', DepartamentoCensado: 'Montevideo', OcupacionCensado: 'Independiente', Propiedad: false, idCensista: false },
    { NumeroCedula: '59854216', NombreCensado: 'Alfonso', ApellidoCensado: 'Pedrosa', EdadCensado: '25', DepartamentoCensado: 'Canelones', OcupacionCensado: 'Dependiente', Propiedad: false, idCensista: false },
    { NumeroCedula: '61254214', NombreCensado: 'Geremias', ApellidoCensado: 'Gutierrez', EdadCensado: '38', DepartamentoCensado: 'Montevideo', OcupacionCensado: 'Independiente', Propiedad: false, idCensista: false }
]
class Censados {
    constructor(NCedula, NCensado, ACensado, ECensado, DCensado, OCensado, PropCensado, IdCensita) {
        this.NumeroCedula = NCedula
        this.NombreCensado = NCensado
        this.ApellidoCensado = ACensado
        this.EdadCensado = ECensado
        this.DepartamentoCensado = DCensado
        this.OcupacionCensado = OCensado
        this.Propiedad = PropCensado
        this.idCensista = IdCensita
    }
}
//Para tabla de "Visualizar informacion estadistica"
let datosParaEstadistica = [
    { departamento: 'Artigas', genteCensadaEnElDepartamento: 0, persCensadaValidada: 0, personMayor: 0, personMenor: 0, estudianCensados: 0, noTrabajan: 0, dependienteIndependiente: 0 },
    { departamento: 'Canelones', genteCensadaEnElDepartamento: 0, persCensadaValidada: 0, personMayor: 0, personMenor: 0, estudianCensados: 0, noTrabajan: 0, dependienteIndependiente: 0 },
    { departamento: 'Cerro Largo', genteCensadaEnElDepartamento: 0, persCensadaValidada: 0, personMayor: 0, personMenor: 0, estudianCensados: 0, noTrabajan: 0, dependienteIndependiente: 0 },
    { departamento: 'Colonia', genteCensadaEnElDepartamento: 0, persCensadaValidada: 0, personMayor: 0, personMenor: 0, estudianCensados: 0, noTrabajan: 0, dependienteIndependiente: 0 },
    { departamento: 'Durazno', genteCensadaEnElDepartamento: 0, persCensadaValidada: 0, personMayor: 0, personMenor: 0, estudianCensados: 0, noTrabajan: 0, dependienteIndependiente: 0 },
    { departamento: 'Flores', genteCensadaEnElDepartamento: 0, persCensadaValidada: 0, personMayor: 0, personMenor: 0, estudianCensados: 0, noTrabajan: 0, dependienteIndependiente: 0 },
    { departamento: 'Florida', genteCensadaEnElDepartamento: 0, persCensadaValidada: 0, personMayor: 0, personMenor: 0, estudianCensados: 0, noTrabajan: 0, dependienteIndependiente: 0 },
    { departamento: 'Lavalleja', genteCensadaEnElDepartamento: 0, persCensadaValidada: 0, personMayor: 0, personMenor: 0, estudianCensados: 0, noTrabajan: 0, dependienteIndependiente: 0 },
    { departamento: 'Maldonado', genteCensadaEnElDepartamento: 0, persCensadaValidada: 0, personMayor: 0, personMenor: 0, estudianCensados: 0, noTrabajan: 0, dependienteIndependiente: 0 },
    { departamento: 'Montevideo', genteCensadaEnElDepartamento: 0, persCensadaValidada: 0, personMayor: 0, personMenor: 0, estudianCensados: 0, noTrabajan: 0, dependienteIndependiente: 0 },
    { departamento: 'Paysandu', genteCensadaEnElDepartamento: 0, persCensadaValidada: 0, personMayor: 0, personMenor: 0, estudianCensados: 0, noTrabajan: 0, dependienteIndependiente: 0 },
    { departamento: 'Rio Negro', genteCensadaEnElDepartamento: 0, persCensadaValidada: 0, personMayor: 0, personMenor: 0, estudianCensados: 0, noTrabajan: 0, dependienteIndependiente: 0 },
    { departamento: 'Rivera', genteCensadaEnElDepartamento: 0, persCensadaValidada: 0, personMayor: 0, personMenor: 0, estudianCensados: 0, noTrabajan: 0, dependienteIndependiente: 0 },
    { departamento: 'Rocha', genteCensadaEnElDepartamento: 0, persCensadaValidada: 0, personMayor: 0, personMenor: 0, estudianCensados: 0, noTrabajan: 0, dependienteIndependiente: 0 },
    { departamento: 'Salto', genteCensadaEnElDepartamento: 0, persCensadaValidada: 0, personMayor: 0, personMenor: 0, estudianCensados: 0, noTrabajan: 0, dependienteIndependiente: 0 },
    { departamento: 'San Jose', genteCensadaEnElDepartamento: 0, persCensadaValidada: 0, personMayor: 0, personMenor: 0, estudianCensados: 0, noTrabajan: 0, dependienteIndependiente: 0 },
    { departamento: 'Soriano', genteCensadaEnElDepartamento: 0, persCensadaValidada: 0, personMayor: 0, personMenor: 0, estudianCensados: 0, noTrabajan: 0, dependienteIndependiente: 0 },
    { departamento: 'Tacuarembo', genteCensadaEnElDepartamento: 0, persCensadaValidada: 0, personMayor: 0, personMenor: 0, estudianCensados: 0, noTrabajan: 0, dependienteIndependiente: 0 },
    { departamento: 'Treinta y Tres', genteCensadaEnElDepartamento: 0, persCensadaValidada: 0, personMayor: 0, personMenor: 0, estudianCensados: 0, noTrabajan: 0, dependienteIndependiente: 0 },

]

class DatosEstadisticos {
    constructor(NombreDepartamento, contadorPorDepa, persValidada, menoresEdad, mayoresEdad, estudian, noTrabajan, dependienteIndependiente) {

        this.departamento = NombreDepartamento //Departamento
        this.genteCensadaEnElDepartamento = contadorPorDepa //Cantidad de personas censadas en cada departamento
        this.persCensadaValidada = persValidada // Cantidad de personas validadas
        this.personMayor = menoresEdad
        this.personMenor = mayoresEdad
        this.estudianCensados = estudian
        this.noTrabajan = noTrabajan
        this.dependienteIndependiente = dependienteIndependiente
    }
}
