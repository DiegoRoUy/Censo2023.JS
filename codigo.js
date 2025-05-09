//variables que sirvan para seber si hay un censista logueado, de lo contrario es invitado
let CensistaLogueado = false;
let IDCensistaLogueado = false;
mostrarBotones("General");

/* Crear funcion validar contrasenia */
function verificarContrasenia(password) {
    let validada = false;
    let longitud = password.length;
    let mayusculas = 0;
    let minusculas = 0;
    let numeros = 0;

    for (i = 0; i < longitud; i++) {
        if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
            mayusculas += 1;
        } else if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
            minusculas += 1;
        } else if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57)
            numeros += 1;
    }
    if (longitud >= 5 && mayusculas >= 1 && minusculas >= 1 && numeros >= 1) {
        validada = true;
    }
    return validada;
}

/* Verificar usuario censista */
function verificadora(arreglo, Propiedad, usuario) {
    //ver si es necesario pasarle tambien la propiedadad NombreCensista como parametro
    let existe = false;
    for (i = 0; i < arreglo.length; i++) {
        if (usuario === arreglo[i][Propiedad]) {
            existe = i;
            break;
        }
    }
    return existe
}

document.querySelector('#btnRegistrarse').addEventListener('click', agregarUsuarioCensista);

/* Agregar Usuario */
let proximaIDCencista = 4;
function agregarUsuarioCensista() {
    document.querySelector("#pMensajeRegistroUsuario").innerHTML = "";

    let NombreCampo = document.querySelector('#txtNombre').value;
    let UsuarioCampo = document.querySelector('#txtNombreUsuario').value;
    let ContraseniaCampo = document.querySelector('#txtContrasenia').value;
    if (NombreCampo !== "" && UsuarioCampo !== "" && ContraseniaCampo !== "") {
        ContraValida = verificarContrasenia(ContraseniaCampo)
        Usuario = verificadora(ListadoCensitas, "NombreUsuario", UsuarioCampo)

        if (Usuario === false && ContraValida === true) {
            document.querySelector("#pMensajeRegistroUsuario").innerHTML = "";
            let objCensista = new Censitas(NombreCampo, UsuarioCampo, ContraseniaCampo, proximaIDCencista);
            ListadoCensitas.push(objCensista);
            proximaIDCencista += 1;
            document.querySelector("#pMensajeRegistroUsuario").innerHTML = "Registrado de forma correcta";
        }
        else if (Usuario !== false) {
            document.querySelector("#pMensajeRegistroUsuario").innerHTML = "Usuario ya existente, vuelva a intentarlo";
        }
        else {

            document.querySelector("#pMensajeRegistroUsuario").innerHTML = "Su contraseña no es valida, debe contener al menos una mayúscula, una minúscula y un número.";
        }
    }
    else {
        document.querySelector("#pMensajeRegistroUsuario").innerHTML = "Completar todos los campos";

    }

}

document.querySelector('#btnIngresarCI').addEventListener('click', VerificarCI);

//cuando carga la pagina ya se deshabilitan los campos, menos el de la ci
DesabilitarHabilitarRegistrar(false, true)
document.querySelector('#btnValidarCenso').disabled = true;


function VerificarCIanexo() {
    //se utiliza para VerificarCI y para CompletarCenso
    //lo unico que hace es dejar solo los numeros que ingreso el usuario en el campo CI
    let CIcensado = document.querySelector('#txtCedulaCensado').value;
    let CIcensadoLimpia = '';

    for (i = 0; i < CIcensado.length; i++) {
        if (!isNaN(CIcensado[i])) {
            CIcensadoLimpia += CIcensado[i]
        }
    }
    return CIcensadoLimpia
}

function VerificarCI() {
    document.querySelector('#pMensajeCedulaCensado').innerHTML = '';
    document.querySelector('#pMensajeFormularioCenso').innerHTML = '';
    document.querySelector('#pEliminado').innerHTML = '';

    let CIcensadoLimpia = VerificarCIanexo()
    //toman la cedula y el Digito por separado
    let CIlimpia = CIcensadoLimpia.substr(0, CIcensadoLimpia.length - 1);
    let CIdigitoCampo = CIcensadoLimpia[CIcensadoLimpia.length - 1];

    let codigo = '2987634';
    let CIlimpia2 = CIlimpia;
    let CIdigito2 = 0;

    //para CIs menores a 7 digitos
    if (CIlimpia.length < 7) {
        CIlimpia2 = '0' + CIlimpia
    }
    //genera el numero a comprar con el siguiente terminado en 0
    for (i = 0; i < CIlimpia2.length; i++) {
        CIdigito2 = CIdigito2 + Number(CIlimpia2[i]) * Number(codigo[i])
    }
    //compara el num anterior con el siguiente terminado en 0
    let numFinal = CIdigito2.toString()[CIdigito2.toString().length - 1]
    let verificador = 0;
    if (10 - numFinal == 10) {
        verificador = 0;
    } else {
        verificador = 10 - numFinal;
    }

    //verifica si la cedula esta correcta, despues verifica si la CI ya esta ingresada
    //retorno devuelve un numero si encontro la CI en ListadoCensados o false si no la encontro
    retorno = CIexiste(CIcensadoLimpia);
    //cambia el nombre del boton si econtraba la CI en ListadoCensados

    if (verificador == CIdigitoCampo) {//verifica que a CI este OK el digito
        if (retorno === false) {//si la cedula no esta censada, habilita los campos para la carga
            DesabilitarHabilitarRegistrar(true, false);
            document.querySelector('#btnValidarCenso').disabled = true;

        } else if (IDCensistaLogueado !== false) {//si hay CENSISTA LOGUEADO
            if (IDCensistaLogueado === ListadoCensados[retorno].idCensista) {//si el senista logueado conincide con el que tiene asignado la CI del invitado
                if (ListadoCensados[retorno].Propiedad === false) {//si el censo no esta validado
                    document.querySelector('#pMensajeCedulaCensado').innerHTML = 'Estos son los datos ingresados para la cedula, aun puede modificarlos'
                    document.querySelector('#txtNombreCampoCensado').value = ListadoCensados[retorno].NombreCensado
                    document.querySelector('#txtApellidoCampoCensado').value = ListadoCensados[retorno].ApellidoCensado;
                    document.querySelector('#txtEdadCampoCensado').value = ListadoCensados[retorno].EdadCensado;
                    BuscarEnSelect(retorno, 'DepartamentoCensado', 'slcDptoResidencia');
                    BuscarEnSelect(retorno, 'OcupacionCensado', 'slcOcupacion');
                    DesabilitarHabilitarRegistrar(true, false);
                    document.querySelector('#btnValidarCenso').disabled = false;
                    document.querySelector('#btnIngresarCenso').value = 'Modificar censo';
                } else {//si el censo ya esta validado
                    document.querySelector('#pMensajeCedulaCensado').innerHTML = 'El censo ya esta validado';
                    document.querySelector('#btnValidarCenso').disabled = true;
                }
            } else {//si el censista no tiene asignado ese censado
                document.querySelector('#pMensajeCedulaCensado').innerHTML = 'El censista registrado no tiene asignada la CI consultada';

            }

        } else {//si es CENSADO (INIVITADO)
            if (ListadoCensados[retorno].Propiedad === false) {//si el censo no esta validado
                //devuelve los datos que ya habia cargado si la 'Propiedad' en 'ListadoCensados' es 'false', si es 'true' deberia avisar que ya se valido
                document.querySelector('#pMensajeCedulaCensado').innerHTML = 'Estos son los datos ingresados para la cedula, aun puede modificarlos'
                document.querySelector('#txtNombreCampoCensado').value = ListadoCensados[retorno].NombreCensado
                document.querySelector('#txtApellidoCampoCensado').value = ListadoCensados[retorno].ApellidoCensado
                document.querySelector('#txtEdadCampoCensado').value = ListadoCensados[retorno].EdadCensado
                BuscarEnSelect(retorno, 'DepartamentoCensado', 'slcDptoResidencia')
                BuscarEnSelect(retorno, 'OcupacionCensado', 'slcOcupacion')
                DesabilitarHabilitarRegistrar(true, false)
                document.querySelector('#btnIngresarCenso').value = 'Modificar censo'

                /* document.querySelector('#btnIngresarCenso').disabled = true */
                document.querySelector('#btnValidarCenso').disabled = true

            } else {//si el censo ya esta validado
                document.querySelector('#pMensajeCedulaCensado').innerHTML = 'El censo de la CI ingresada ya fue validado'
            }
        }
    } else {
        document.querySelector('#pMensajeCedulaCensado').innerHTML = 'Verifique la CI'
    }
}

function BuscarEnSelect(posEnListado, prop, idSelect) {
    let select = document.querySelector('#' + idSelect)
    for (i = 0; i < select.options.length; i++) {
        let option = select.options[i]
        if (option.text === ListadoCensados[posEnListado][prop]) {
            select.value = option.value
            break
        }
    }
}

function CIexiste(CI) {//47405126
    //devuelve false si la ci no se ingreso, si esta ingresada, devuelve la pos donde esta ingresada
    existe = false
    for (i = 0; i < ListadoCensados.length; i++) {
        if (ListadoCensados[i].NumeroCedula === CI) {
            existe = i
            break;
        }
    }
    return existe
}

document.querySelector('#btnIngresarCenso').addEventListener('click', CompletarCenso)

function CompletarCenso() {
    document.querySelector('#pMensajeFormularioCenso').innerHTML = ''

    let CIcampo = VerificarCIanexo()
    let NombreCampo = document.querySelector('#txtNombreCampoCensado').value

    let ApellidoCampo = document.querySelector('#txtApellidoCampoCensado').value

    let EdadCampo = Number(document.querySelector('#txtEdadCampoCensado').value)

    let DptoResidenciaCampo = -1
    switch (document.querySelector('#slcDptoResidencia').value) {
        case '1': DptoResidenciaCampo = 'Artigas'
            break;
        case "2": DptoResidenciaCampo = 'Canelones'
            break;
        case "3": DptoResidenciaCampo = 'Cerro Largo'
            break;
        case "4": DptoResidenciaCampo = 'Colonia'
            break;
        case "5": DptoResidenciaCampo = 'Durazno'
            break;
        case "6": DptoResidenciaCampo = 'Flores'
            break;
        case "7": DptoResidenciaCampo = 'Florida'
            break;
        case "8": DptoResidenciaCampo = 'Lavalleja'
            break;
        case "9": DptoResidenciaCampo = 'Maldonado'
            break;
        case "10": DptoResidenciaCampo = 'Montevideo'
            break;
        case "11": DptoResidenciaCampo = 'Paysandu'
            break;
        case "12": DptoResidenciaCampo = 'Rio Negro'
            break;
        case "13": DptoResidenciaCampo = 'Rivera'
            break;
        case "14": DptoResidenciaCampo = "Rocha"
            break;
        case "15": DptoResidenciaCampo = 'Salto'
            break;
        case "16": DptoResidenciaCampo = 'San Jose'
            break;
        case "17": DptoResidenciaCampo = 'Soriano'
            break;
        case "18": DptoResidenciaCampo = 'Tacuarembo'
            break;
        case "19": DptoResidenciaCampo = 'Treinta y Tres'
            break;
    }

    let OcupacionCampo = -1
    switch (document.querySelector('#slcOcupacion').value) {
        case '1': OcupacionCampo = 'Dependiente';
            break;
        case '2': OcupacionCampo = 'Independiente';
            break;
        case '3': OcupacionCampo = 'Estudiante';
            break;
        case '4': OcupacionCampo = 'No trabaja';
            break;
    }

    let Propiedad = false
    let IdCensita = false
    let valorBotonValidarIngresar = document.querySelector('#btnIngresarCenso').value
    let CIlimpie = VerificarCIanexo()
    let pos = CIexiste(CIlimpie)

    //el if no verifica la CI, porque si llego a esta parte es porque ya la CI estaba verificada en Func VerificarCI
    if (NombreCampo != '' && ApellidoCampo != '' && EdadCampo >= 0 && EdadCampo <= 130 && DptoResidenciaCampo != -1 && OcupacionCampo != -1 && valorBotonValidarIngresar == 'Ingresar censo') {
        let objCensado = new Censados(CIcampo, NombreCampo, ApellidoCampo, EdadCampo, DptoResidenciaCampo, OcupacionCampo, Propiedad, IdCensita)
        ListadoCensados.push(objCensado)
        LimpiarRegistrar()
        DesabilitarHabilitarRegistrar(false, true)
        document.querySelector('#pMensajeFormularioCenso').innerHTML = 'Sus datos fueron ingresados correctamente'
    } else if (NombreCampo != '' && ApellidoCampo != '' && EdadCampo >= 0 && EdadCampo <= 130 && DptoResidenciaCampo != -1 && OcupacionCampo != -1 && valorBotonValidarIngresar !== 'Ingresar censo') {
        ListadoCensados[pos].NombreCensado = NombreCampo;
        ListadoCensados[pos].ApellidoCensado = ApellidoCampo;
        ListadoCensados[pos].EdadCensado = EdadCampo;
        ListadoCensados[pos].DepartamentoCensado = DptoResidenciaCampo;
        ListadoCensados[pos].OcupacionCensado = OcupacionCampo;
        LimpiarRegistrar()
        DesabilitarHabilitarRegistrar(false, true)
        document.querySelector('#pMensajeFormularioCenso').innerHTML = 'Modificacion realizada de forma correcta'
        document.querySelector('#btnIngresarCenso').value = 'Ingresar censo';
        document.querySelector('#btnValidarCenso').disabled = true
        document.querySelector("#pMensajeCedulaCensado").innerHTML = "";

    } else {
        document.querySelector('#pMensajeFormularioCenso').innerHTML = 'ERROR: verifique los datos ingresados'
    }
    asignarCensita()

}

document.querySelector("#btnEliminarCenso").addEventListener("click", eliminarCenso);
function eliminarCenso() {

    let cedulaAEliminar = VerificarCIanexo()
    document.querySelector("#pEliminado").innerHTML = ""
    let confirmacion = confirm(`¿Esta seguro que desea eliminar el censo?`)
    if (confirmacion) {
        for (i = 0; i < ListadoCensados.length; i++) {
            if (cedulaAEliminar === ListadoCensados[i].NumeroCedula && ListadoCensados[i].Propiedad == false) {

                ListadoCensados.splice(i, 1);
                document.querySelector("#pEliminado").innerHTML = "Censo Eliminado";
                LimpiarRegistrar()
                DesabilitarHabilitarRegistrar(false, true)
                document.querySelector('#btnIngresarCenso').value = 'Ingresar censo'
                document.querySelector("#btnValidarCenso").disabled = true;
                document.querySelector("#pMensajeCedulaCensado").innerHTML = "";

                break;
            }
        }
    }
}

document.querySelector('#btnIngresoUsuario').addEventListener('click', inicioSesion)

function inicioSesion() {

    let inicioUsuarioCensista = document.querySelector("#txtNombreIngresoUsuario").value;
    let inicioContraseniaCensista = document.querySelector("#txtContraseniaIngreso").value;
    let verificaUsuarioCensista = verificadora(ListadoCensitas, "NombreUsuario", inicioUsuarioCensista)
    let contraInicioSesion = ListadoCensitas[verificaUsuarioCensista].Password


    if (verificaUsuarioCensista != false || verificaUsuarioCensista === 0 && contraInicioSesion === inicioContraseniaCensista) {
        document.querySelector("#mensajeIngreso").innerHTML = "Bienvenido " + inicioUsuarioCensista;
        CensistaLogueado = ListadoCensitas[verificaUsuarioCensista].NombreUsuario
        IDCensistaLogueado = ListadoCensitas[verificaUsuarioCensista].IDCensita
        DesabilitarHabilitarIngresoUsuario(true)
        mostrarBotones("Censista");
        document.querySelector("#txtNombreIngresoUsuario").value = ''
        document.querySelector("#txtContraseniaIngreso").value = ''
        document.querySelector("#SpanCensistaLogueado").innerHTML = '<span class="blanco">' + 'Usuario: ' + inicioUsuarioCensista + '</span>';
    } else {
        document.querySelector("#mensajeIngreso").innerHTML = "Usuario o contraseña incorrecta"
    }
}

asignarCensita()
function asignarCensita() {

    if (IDCensistaLogueado !== false) {
        for (i = 0; i < ListadoCensados.length; i++) {
            if (ListadoCensados[i].Propiedad == false && ListadoCensados[i].idCensista == false) {
                ListadoCensados[i].idCensista = IDCensistaLogueado
            }
        }

    } else {
        for (i = 0; i < ListadoCensados.length; i++) {
            if (ListadoCensados[i].Propiedad == false && ListadoCensados[i].idCensista == false) {
                let aleatorio = Number(Math.floor(Math.random() * ListadoCensitas.length))
                ListadoCensados[i].idCensista = aleatorio + 1
            }
        }
    }
}

document.querySelector('#btnSeccionReasignarCenso').addEventListener('click', reasignarCensista)
//REASIGNAR cargar censistas en select
function reasignarCensista() {
    //aparezcan todos los censados que tengan asignados al censista logueado
    document.querySelector('#slcPersona').innerHTML = `<option value="-1">Seleccione censado...</option>`
    for (i = 0; i < ListadoCensados.length; i++) {
        const censado = ListadoCensados[i]
        if (censado.idCensista == IDCensistaLogueado) {
            document.querySelector('#slcPersona').innerHTML += `<option value="${censado.NumeroCedula}">${censado.NombreCensado}</option>`
        }
    }
    //aparzcan todos los censistas menos el logueado 
    document.querySelector('#slcCensistas').innerHTML = `<option value="-1">Seleccione censista...</option>`
    for (i = 0; i < ListadoCensitas.length; i++) {
        const censista = ListadoCensitas[i]
        if (censista.IDCensita != IDCensistaLogueado) {
            document.querySelector('#slcCensistas').innerHTML += `<option value="${censista.IDCensita}">${censista.NombreCensita}</option>`
        }
    }
}

//REASIGNAR 
document.querySelector('#btnReasignar').addEventListener('click', Reasignar)
function Reasignar() {
    document.querySelector('#pMensajeReasignacion').innerHTML = ''

    let CIpersona = document.querySelector('#slcPersona').value
    let IDcensista = Number(document.querySelector('#slcCensistas').value)


    if (CIpersona != -1 && IDcensista != -1) {
        let confirmacion = confirm(`Desea efectuar reasignacion`)
        if (confirmacion) {
            for (i = 0; i < ListadoCensados.length; i++) {
                if (ListadoCensados[i].NumeroCedula == CIpersona) {
                    ListadoCensados[i].idCensista = IDcensista
                    document.querySelector('#pMensajeReasignacion').innerHTML = 'Reasignacion realizada'
                    break;
                }
            }
        }
    } else {
        document.querySelector('#pMensajeReasignacion').innerHTML = 'Debe seleccionar una opcion'
    }
    reasignarCensista()
}

document.querySelector("#btnSeccionTablaEstadisticas").addEventListener("click", complTablaValidados);
document.querySelector("#btnSeccionEstadisticaInvitado").addEventListener("click", complTablaValidados);
//completa array estadistico recorriendo el ListadoCensados
function complTablaValidados() {
    for (h = 0; h < datosParaEstadistica.length; h++) {
        datosParaEstadistica[h].genteCensadaEnElDepartamento = 0
        datosParaEstadistica[h].persCensadaValidada = 0
        datosParaEstadistica[h].personMayor = 0
        datosParaEstadistica[h].personMenor = 0
        datosParaEstadistica[h].estudianCensados = 0
        datosParaEstadistica[h].noTrabajan = 0
        datosParaEstadistica[h].dependienteIndependiente = 0
    }

    for (i = 0; i < ListadoCensados.length; i++) {
        let listado = ListadoCensados[i];
        let pos = 0
        //localiza en que linea del ListadoEstadistic (pos) esta el Departamento que vive la persona de ListadoCensados[i]
        for (j = 0; j < datosParaEstadistica.length; j++) {
            let departamentos = datosParaEstadistica[j]
            if (listado.DepartamentoCensado == departamentos.departamento) {
                pos = j
                break;
            }
        }
        let totalCensos = datosParaEstadistica[pos].genteCensadaEnElDepartamento
        let totalCensadosValidados = datosParaEstadistica[pos].persCensadaValidada
        let contadorMayores = datosParaEstadistica[pos].personMayor
        let contadorMenores = datosParaEstadistica[pos].personMenor
        let estudian = datosParaEstadistica[pos].estudianCensados
        let noTrabajan = datosParaEstadistica[pos].noTrabajan
        let trabajan = datosParaEstadistica[pos].dependienteIndependiente

        totalCensos += 1

        if (listado.Propiedad === true) {
            totalCensadosValidados += 1;
        }
        if (listado.EdadCensado >= 18 && listado.Propiedad === true) {
            contadorMayores += 1;
        } else if (listado.EdadCensado < 18 && listado.Propiedad === true) {
            contadorMenores += 1
        }

        if (listado.OcupacionCensado === "Estudiante") {
            estudian += 1
        }
        else if (listado.OcupacionCensado === "No trabaja") {
            noTrabajan += 1
        }
        else if (listado.OcupacionCensado != "Estudiante" && listado.OcupacionCensado != "No trabaja") {
            trabajan += 1
        }
        datosParaEstadistica[pos].genteCensadaEnElDepartamento = totalCensos
        datosParaEstadistica[pos].persCensadaValidada = totalCensadosValidados
        datosParaEstadistica[pos].personMayor = contadorMayores
        datosParaEstadistica[pos].personMenor = contadorMenores
        datosParaEstadistica[pos].estudianCensados = estudian
        datosParaEstadistica[pos].noTrabajan = noTrabajan
        datosParaEstadistica[pos].dependienteIndependiente = trabajan

        //si es censita llamar a Visualizar estadistica para censita
        visualizarEstCensita()
        //si no OTRA
        visualizarEstInvitados()
    }
}

//Para Validar Censos
document.querySelector("#btnValidarCenso").addEventListener("click", validarCenso);

function validarCenso() {
    let cedulaAValidar = VerificarCIanexo()
    let confirmacion = confirm('¿Desea Validar el censo? Si realizo modificaciones no se modificaron!')
    if (confirmacion) {
        for (i = 0; i < ListadoCensados.length; i++) {
            if (cedulaAValidar == ListadoCensados[i].NumeroCedula && ListadoCensados[i].Propiedad === false) {
                ListadoCensados[i].Propiedad = true;
                document.querySelector("#pMensajeFormularioCenso").innerHTML = "Censo Validado";
                LimpiarRegistrar()
                DesabilitarHabilitarRegistrar(false, true)
                document.querySelector('#btnValidarCenso').disabled = true
                document.querySelector('#btnIngresarCenso').value = 'Ingresar censo'

                break;
            }
        }
    }
}

//Visualizar estadistica para censita
function visualizarEstCensita() {
    let totalCensosValidados = 0;
    let totalCensosTodos = 0;

    document.querySelector("#tblViECensados").innerHTML = "";
    for (let i = 0; i < datosParaEstadistica.length; i++) {
        totalCensosValidados += datosParaEstadistica[i].persCensadaValidada;
        totalCensosTodos += datosParaEstadistica[i].genteCensadaEnElDepartamento

        document.querySelector("#tblViECensados").innerHTML +=//Se agrega a la lista la propiedad
            `<tr><td>${datosParaEstadistica[i].departamento}</td>   
        <td>${datosParaEstadistica[i].persCensadaValidada}</td></tr>`;
    }

    document.querySelector("#tblViECensados").innerHTML += `
    <th>Total:</th><th>${totalCensosValidados}</th></tr>
    <th>Pendientes de validar:</th><th>${(1 - (totalCensosValidados / totalCensosTodos).toFixed(4)) * 100}%</th></tr>`
}

document.querySelector('#btnEstMayYMen').addEventListener('click', cargarEstMayMen)

function cargarEstMayMen() {
    document.querySelector("#tblPorcentajes").innerHTML = '';
    let coso = document.querySelector('#slcDptoResEstadistica').value;
    if (coso != 0) {
        let coso2 = document.querySelector('#slcDptoResEstadistica').options[coso].text
        document.querySelector("#tblPorcentajes").innerHTML +=//Se agrega a la lista la propiedad
            `<tr><td>${coso2}</td> <td>${datosParaEstadistica[coso - 1].personMenor}</td>  <td>${datosParaEstadistica[coso - 1].personMayor}</td></tr>`;
    }
    else {
        document.querySelector("#pPorcentajeMayMen").innerHTML = "Seleccione un departamento"
    }
}

document.querySelector('#btnSeccionCerrarSesion').addEventListener('click', cerrarSesion)

function cerrarSesion() {
    document.querySelector('#btnCerrarSesion').disabled = true;
    document.querySelector('#pSesionIniciadaMensaje').innerHTML = '';
    document.querySelector('#pCerrarSesionMensaje').innerHTML = '';
    if (CensistaLogueado !== false) {
        document.querySelector('#pSesionIniciadaMensaje').innerHTML = `El usaurio ${CensistaLogueado} esta logueado`
        document.querySelector('#btnCerrarSesion').disabled = false
        DesabilitarHabilitarIngresoUsuario(false)

    } else {
        document.querySelector('#pSesionIniciadaMensaje').innerHTML = `No hay usuarios logueados`
    }
}
document.querySelector('#btnCerrarSesion').addEventListener('click', cerrar)

function cerrar() {
    let confirmacion = confirm('¿Esta seguro que desea cerrar sesion?');
    if (confirmacion) {
        CensistaLogueado = false;
        IDCensistaLogueado = false;
        document.querySelector('#pSesionIniciadaMensaje').innerHTML = '';
        document.querySelector('#pCerrarSesionMensaje').innerHTML = 'Sesion finalizada';
        document.querySelector('#btnCerrarSesion').disabled = true;
        document.querySelector("#SpanCensistaLogueado").innerHTML = '';
        document.querySelector("#mensajeIngreso").innerHTML = '';
        mostrarBotones("General");
    }
}

function visualizarEstInvitados() {
    document.querySelector("#tablaEstadisticaInvitados").innerHTML = ''
    /* total censados todos en departamento/totalcensados a nivel pais */
    let totalCensadosPais = ListadoCensados.length

    for (let i = 0; i < datosParaEstadistica.length; i++) {
        document.querySelector("#tablaEstadisticaInvitados").innerHTML +=
            `
    <tr><td>${datosParaEstadistica[i].departamento}</td> 
    <td>${datosParaEstadistica[i].estudianCensados}</td>
    <td>${datosParaEstadistica[i].noTrabajan}</td>
    <td>${datosParaEstadistica[i].dependienteIndependiente}</td>
    <td>${((datosParaEstadistica[i].genteCensadaEnElDepartamento / totalCensadosPais) * 100).toFixed(4)}%</td></tr>`
    }
}

function DesabilitarHabilitarRegistrar(EstadoGrupo1, EstadoGrupo2) {
    //GRUPO 2, son los campos de ingreso del censo + los botones
    document.querySelector('#txtNombreCampoCensado').disabled = EstadoGrupo2
    document.querySelector('#txtApellidoCampoCensado').disabled = EstadoGrupo2
    document.querySelector('#txtEdadCampoCensado').disabled = EstadoGrupo2
    document.querySelector('#slcDptoResidencia').disabled = EstadoGrupo2
    document.querySelector('#slcOcupacion').disabled = EstadoGrupo2
    document.querySelector('#btnIngresarCenso').disabled = EstadoGrupo2
    document.querySelector('#btnEliminarCenso').disabled = EstadoGrupo2

    //GRUPO 1, son los campos de la cedla + boton
    document.querySelector('#txtCedulaCensado').disabled = EstadoGrupo1
    document.querySelector('#btnIngresarCI').disabled = EstadoGrupo1
}

function LimpiarRegistrar() {
    document.querySelector('#txtCedulaCensado').value = ''
    document.querySelector('#txtNombreCampoCensado').value = ''
    document.querySelector('#txtApellidoCampoCensado').value = ''
    document.querySelector('#txtEdadCampoCensado').value = ''
    document.querySelector('#slcDptoResidencia').value = '0'
    document.querySelector('#slcOcupacion').value = '0'
}

function DesabilitarHabilitarIngresoUsuario(estado) {
    document.querySelector('#txtContraseniaIngreso').disabled = estado
    document.querySelector('#txtNombreIngresoUsuario').disabled = estado
    document.querySelector('#btnIngresoUsuario').disabled = estado
}


function visualizarEstCensistaMdeo() {

    document.querySelector("#tblCantidadCensosMdeo").innerHTML = "";

    for (let i = 0; i < ListadoCensitas.length; i++) {
        const LisCensista = ListadoCensitas[i]
        totalCensosMdeo = 0
        for (let a = 0; a < ListadoCensados.length; a++) {
            const ListCensados = ListadoCensados[a]
            if (ListCensados.idCensista === LisCensista.IDCensita && ListCensados.DepartamentoCensado === "Montevideo") {
                totalCensosMdeo += 1
            }
        }
        document.querySelector("#tblCantidadCensosMdeo").innerHTML += `
        
        <tr><td>${ListadoCensitas[i].NombreCensita}</td>
        <td>${totalCensosMdeo}</td>`

    }
   
}
visualizarEstCensistaMdeo()