let config = {
    urlPreguntas: `/Vivienda/_api/web/Lists/getbytitle('tramites-preguntas')/items?`
}

let globalData = {};
let filtroSeccion = "";

function limpiarTexto(texto) {
    let retorno = texto.replace()
        .replace(/[áàäâå]/, "a")
        .replace(/[éèëê]/, "e")
        .replace(/[íìïî]/, "i")
        .replace(/[óòöô]/, "o")
        .replace(/[úúüû]/, "u")
        .replace(/[ñ]/, "n")
        .replace(/[\s()/*´'{}]+/gi, "-")
        .toLowerCase();
    return retorno;
}

function getPreguntas() {
    url = config.urlPreguntas;
    let onSuccess = pr => {
        console.log(pr);
        let mapPreguntas = pr.map(item => {
            let idPregunta = item.ID;
            let pregunta = item.Pregunta;
            let respuesta = item.respuesta;
            let seccion = item.Seccion;
            let retorno = { pregunta, respuesta, seccion, idPregunta }
            crearPreguntas(retorno);
            return retorno;
        }).filter(d => d);
        globalData["preguntas"] = mapPreguntas;

        let globalPreg = globalData["preguntas"];

        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }

        let mapSeccion = globalPreg.map(sc => {
            let seccionM = sc.seccion;
            return seccionM

        })

        let uniqueSeccion = mapSeccion.filter(unique).map(us => {
            let seccionU = us;
            $("#secciones").append(`
            <div class="in-seccion"><input type="radio" name="secciones" value="${seccionU}"><label> ${seccionU}</label></input></div>
            `);
            $(function () {
                $('[name="secciones"]').click(function () {
                    $("#preguntas").empty();
                    filtroSeccion = $('[name="secciones"]:checked').map(function () {
                        return this.value;
                    }).get();
                    globalData["filtro-secciones"] = filtroSeccion;
                    filtro(filtroSeccion);
                });
            })
        })

    }
    getData(url, onSuccess);
}

function unselect() {
    $("#preguntas").empty();
    filtroSeccion = "";
    document.querySelectorAll('[name=secciones]').forEach((x) => x.checked = false);
    filtro(filtroSeccion);
}

function filtro(filtroSeccion) {
    let filtroPreguntas = globalData["preguntas"]
        .filter(item => (filtroSeccion == "") ? true : item.seccion == filtroSeccion).map(
            item => {
                crearPreguntas(item); return item
            }
        )
    globalData["filtro"] = filtroPreguntas;
}


let crearPreguntas = retorno => {
    $("#preguntas").append(`
    <div style="margin: 2em 0em;" class="card">
    <div class="card-header" id="heading${retorno.idPregunta}">
    <a href="#" type="button" data-toggle="collapse" data-target="#collapse${retorno.idPregunta}" aria-controls="collapse${retorno.idPregunta}">  
    <h4 class="mb-0 titleCard">
        ${retorno.pregunta}
    </h4>
    </a>
      <span class="seccionSpan">Sección: </span><span>${retorno.seccion}</span>
    </div>

    <div id="collapse${retorno.idPregunta}" class="collapse" aria-labelledby="heading${retorno.idPregunta}" data-parent="#acordion">
      <div class="card-body">
      <p>${retorno.respuesta}</p>
      </div>
    </div>
  </div>
`)
}

getPreguntas();

function getData(url, onSuccess) {
    $.ajax({
        url: url,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#_REQUESTDIGEST").val()
        },
        success: function (data) {
            let stringData = JSON.stringify(data);
            let object = JSON.parse(stringData);
            let resultados = object.d.results;
            if (typeof (onSuccess == "function")) {
                onSuccess(resultados);
            }
        },
        error: function (error) {
            console.log(" error", error);
        }
    })
}
