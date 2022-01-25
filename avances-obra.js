let config = {
    urlProyecto: `/Vivienda/_api/web/Lists/getbytitle('tramites-proyectos')/items?$orderby= Nombre asc`,
    urlAllProyectos: `/Vivienda/_API/web/Lists/getbytitle('tramites-proyecto-individual')/items?`
}
let NOMBREP = "";
let leerUrl = window.location.toString().split(`vivienda/tramites-vivienda`);
let urlApps = leerUrl[1].split("?");
let urlApp = urlApps[0].split("#");
let urlProyFin = urlApp[0];

let globalData = {};



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



function GetProyecto(NOMBREP) {
    url = config.urlProyecto;
    let onSuccess = p => {

        if (urlProyFin == "" || urlProyFin == "/") {

            let cardProyecto = p.map(item => {
                let nombreProyectoU = item.Nombre;
                let nombreLimpio = limpiarTexto(nombreProyectoU);
                let urlLogo = item.Logo.Url;
                let descLogo = item.Logo.Description;
                let retorno = { nombreProyectoU, nombreLimpio, descLogo, urlLogo }
                proyectos(retorno);
            })

        }



        NOMBREP = p;
        getProyectoUnico(NOMBREP);
    }
    getData(url, onSuccess);
}


function getProyectoUnico(NOMBREP) {
    url = config.urlAllProyectos;
    let onSuccess = pu => {
        let proyectoU = pu.map(item => {
            let proyTodos = NOMBREP.find(p => p.ID == item.tramites_x002d_nombre_x002d_proyId);
            let nombreProyectoU = proyTodos.Nombre;
            let nombreLimpio = limpiarTexto(nombreProyectoU);
            let ProyectoUnico = `/${nombreLimpio}`;
            if (urlProyFin == ProyectoUnico) {
                let modificacion = item.Modified;
                modificacion1 = modificacion.split("-", 4);
                mes = modificacion1[1];
                año = modificacion1[0];
                var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
                var inputMes = mes;
                var numeroMes = parseInt(inputMes);
                if (!isNaN(numeroMes) && numeroMes >= 1 && numeroMes <= 12) {
                    inputMes = meses[numeroMes - 1];
                    var nombreMes = inputMes;
                }
                let img1 = item.imagen_x002d_1;
                let imagen1 = "";
                if (img1 == "" || img1 == null) { imagen1 = ""; } else { imagen1 = `<img src="${item.imagen_x002d_1.Url}" alt ="${item.imagen_x002d_1.Description}" title="${item.imagen_x002d_1.Description}"/>` }

                let img2 = item.imagen_x002d_2;
                let imagen2 = "";
                if (img2 == "" || img2 == null) { imagen2 = ""; } else { imagen2 = `<img src="${item.imagen_x002d_2.Url}" alt ="${item.imagen_x002d_2.Description}" title="${item.imagen_x002d_2.Description}"/>` }

                let img3 = item.imagen_x002d_3;
                let imagen3 = "";
                if (img3 == "" || img3 == null) { imagen3 = ""; } else { imagen3 = `<img src="${item.imagen_x002d_3.Url}" alt ="${item.imagen_x002d_3.Description}" title="${item.imagen_x002d_3.Description}"/>` }

                let img4 = item.imagen_x002d_4;
                let imagen4 = "";
                if (img4 == "" || img4 == null) { imagen4 = ""; } else { imagen4 = `<img src="${item.imagen_x002d_4.Url}" alt ="${item.imagen_x002d_4.Description}" title="${item.imagen_x002d_4.Description}"/>` }

                let img5 = item.imagen_x002d_5;
                let imagen5 = "";
                if (img5 == "" || img5 == null) { imagen5 = ""; } else { imagen5 = `<img src="${item.imagen_x002d_5.Url}" alt ="${item.imagen_x002d_5.Description}" title="${item.imagen_x002d_5.Description}"/>` }

                let img6 = item.imagen_x002d_6;
                let imagen6 = "";
                if (img6 == "" || img6 == null) { imagen6 = ""; } else { imagen6 = `<img src="${item.imagen_x002d_6.Url}" alt ="${item.imagen_x002d_6.Description}" title="${item.imagen_x002d_6.Description}"/>` }

                let img7 = item.imagen_x002d_7;
                let imagen7 = "";
                if (img7 == "" || img7 == null) { imagen7 = ""; } else { imagen7 = `<img src="${item.imagen_x002d_7.Url}" alt ="${item.imagen_x002d_7.Description}" title="${item.imagen_x002d_7.Description}"/>` }

                let img8 = item.imagen_x002d_8;
                let imagen8 = "";
                if (img8 == "" || img8 == null) { imagen8 = ""; } else { imagen8 = `<img src="${item.imagen_x002d_8.Url}" alt ="${item.imagen_x002d_8.Description}" title="${item.imagen_x002d_8.Description}"/>` }

                let img9 = item.imagen_x002d_9;
                let imagen9 = "";
                if (img9 == "" || img9 == null) { imagen9 = ""; } else { imagen9 = `<img src="${item.imagen_x002d_9.Url}" alt ="${item.imagen_x002d_9.Description}" title="${item.imagen_x002d_9.Description}"/>` }

                let img10 = item.imagen_x002d_10;
                let imagen10 = "";
                if (img10 == "" || img10 == null) { imagen10 = ""; } else { imagen10 = `<img src="${item.imagen_x002d_10.Url}" alt ="${item.imagen_x002d_10.Description}" title="${item.imagen_x002d_10.Description}"/>` }

                let video = item.video;
                let videoU = "";
                if (video == "" || video == null) { videoU = ""; } else { videoU = `<iframe class="video" src="${video.Url}" title="${video.Url}" frameborder="0"  allowfullscreen></iframe>` }
                let videoC = "";
                if (video == "" || video == null) { videoU = ""; } else { videoC = `<div class="contvideo"><iframe class="videoC" src="${video.Url}" title="${video.Url}" frameborder="0"  allowfullscreen></iframe></div>` }


                let txtCard1 = item.texto_x002d_card_x002d_1;
                let textCard1 = "";
                if (txtCard1 == "" || txtCard1 == null) { textCard1 == "" } else { textCard1 = txtCard1 }
                let titleCard1 = item.titulo_x002d_card_x002d_1;
                let tituloCard1 = "";
                let titleSectionCards = "";
                if (titleCard1 == "" || titleCard1 == null) { tituloCard1 == "" } else {
                    titleSectionCards = `<h2 class="subtitulo">Ten presente esta información</h2>`;
                    tituloCard1 = `<div class="card col-md-6"><div class="col-md-3 cont-icon-card"><img class="icon-card" src="/Style%20Library/webparts/tramites-vivienda/img/icons/edifice.jpg" /></div><div class="col-md-9 cont-txt-card"><h3 class="title-card">${titleCard1}</h3> ${textCard1}</div></div>`
                }

                let txtCard2 = item.texto_x002d_card_x002d_2;
                let textCard2 = "";
                if (txtCard2 == "" || txtCard2 == null) { textCard2 == "" } else { textCard2 = txtCard2 }
                let titleCard2 = item.titulo_x002d_card_x002d_2;
                let tituloCard2 = "";
                if (titleCard2 == "" || titleCard2 == null) { tituloCard2 == "" } else { tituloCard2 = `<div class="card col-md-6"><div class="col-md-3 cont-icon-card"><img class="icon-card" src="/Style%20Library/webparts/tramites-vivienda/img/icons/edifice.jpg" /></div><div class="col-md-9 cont-txt-card"><h3 class="title-card">${titleCard2}</h3> ${textCard2}</div></div>` }

                let txtCard3 = item.texto_x002d_card_x002d_3;
                let textCard3 = "";
                if (txtCard3 == "" || txtCard3 == null) { textCard3 == "" } else { textCard3 = txtCard3 }
                let titleCard3 = item.titulo_x002d_card_x002d_3;
                let tituloCard3 = "";
                if (titleCard3 == "" || titleCard3 == null) { tituloCard3 == "" } else { tituloCard3 = `<div class="card col-md-6"><div class="col-md-3 cont-icon-card"><img class="icon-card" src="/Style%20Library/webparts/tramites-vivienda/img/icons/edifice.jpg" /></div><div class="col-md-9 cont-txt-card"><h3 class="title-card">${titleCard3}</h3> ${textCard3}</div></div>` }

                let txtCard4 = item.texto_x002d_card_x002d_4;
                let textCard4 = "";
                if (txtCard4 == "" || txtCard4 == null) { textCard4 == "" } else { textCard4 = txtCard4 }
                let titleCard4 = item.titulo_x002d_card_x002d_4;
                let tituloCard4 = "";
                if (titleCard4 == "" || titleCard4 == null) { tituloCard4 == "" } else { tituloCard4 = `<div class="card col-md-6"><div class="col-md-3 cont-icon-card"><img class="icon-card" src="/Style%20Library/webparts/tramites-vivienda/img/icons/edifice.jpg" /></div><div class="col-md-9 cont-txt-card"><h3 class="title-card">${titleCard4}</h3> ${textCard4}</div></div>` }

                let txtCard5 = item.texto_x002d_card_x002d_5;
                let textCard5 = "";
                if (txtCard5 == "" || txtCard5 == null) { textCard5 == "" } else { textCard5 = txtCard5 }
                let titleCard5 = item.titulo_x002d_card_x002d_5;
                let tituloCard5 = "";
                if (titleCard5 == "" || titleCard5 == null) { tituloCard5 == "" } else { tituloCard5 = `<div class="card col-md-6"><div class="col-md-3 cont-icon-card"><img class="icon-card" src="/Style%20Library/webparts/tramites-vivienda/img/icons/edifice.jpg" /></div><div class="col-md-9 cont-txt-card"><h3 class="title-card">${titleCard5}</h3> ${textCard5}</div></div>` }

                let txtCard6 = item.texto_x002d_card_x002d_6;
                let textCard6 = "";
                if (txtCard6 == "" || txtCard6 == null) { textCard6 == "" } else { textCard6 = txtCard6 }
                let titleCard6 = item.titulo_x002d_card_x002d_6;
                let tituloCard6 = "";
                if (titleCard6 == "" || titleCard6 == null) { tituloCard6 == "" } else { tituloCard6 = `<div class="card col-md-6"><div class="col-md-3 cont-icon-card"><img class="icon-card" src="/Style%20Library/webparts/tramites-vivienda/img/icons/edifice.jpg" /></div><div class="col-md-9 cont-txt-card"><h3 class="title-card">${titleCard6}</h3> ${textCard6}</div></div>` }

                let urlBuzon = item.url_x002d_buzon;
                let buzon = "";
                if (urlBuzon == "" || urlBuzon == null) { buzon == "" } else { buzon = urlBuzon }
                let urlBanco1 = item.url_x002d_banco_x002d_1;
                let urlBancoUno = "";
                if (urlBanco1 == "" || urlBanco1 == null) { urlBancoUno == "" } else { urlBancoUno = urlBanco1 }

                let imgBanco1 = item.logo_x002d_pago;
                let imgBancoUno = "";
                let titleSectionPay = "";
                if (imgBanco1 == "" || imgBanco1 == null) { imgBancoUno == "" } else {
                    titleSectionPay = `<h2 class="subtitulo">Realiza tus pagos en línea</h2>`;
                    imgBancoUno = `<a target="_blank" href="${urlBancoUno}"><div class="con-pago"><img style="width:200px;" src="${item.logo_x002d_pago.Url}" alt="${item.logo_x002d_pago.Description}"/></div></a>`
                }


                let urlBanco2 = item.url_x002d_banco_x002d_2;
                let urlBancoDos = "";
                if (urlBanco2 == "" || urlBanco2 == null) { urlBancoDos == "" } else { urlBancoDos = urlBanco2 }

                let imgBanco2 = item.logo_x002d_pago_x002d_2;
                let imgBancoDos = "";
                if (imgBanco2 == "" || imgBanco2 == null) { imgBancoDos == "" } else { imgBancoDos = `<a target="_blank" href="${urlBancoDos}"><div class="con-pago"><img style="width:200px;" src="${item.logo_x002d_pago_x002d_2.Url}" alt="${item.logo_x002d_pago_x002d_2.Description}"/></div></a>` }

                let retorno = { nombreMes, año, nombreProyectoU, nombreLimpio, imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, videoU, videoC, titleSectionCards, tituloCard1, tituloCard2, tituloCard3, tituloCard4, tituloCard5, tituloCard6, buzon, titleSectionPay, imgBancoUno, imgBancoDos };

                proyecto_unico(retorno);
            }

        }).filter(d => d);
    }
    getData(url, onSuccess);
}



let proyectos = retorno => {

    $("#cont-titulo").html(`
    <h1 class="titulo">Avances de obra</h1>
    <p class="desc-pag">Selecciona el proyecto de vivienda en el que estará tu nuevo hogar, conoce el avance de la obra y las novedades en los trámites.</p>
    `);




    $("#lista-proyectos").append(`
    <div class="col-md-3 contLogo">
    <div class="cards">
        <div class="logoRedondo" style="background-image: url('${retorno.urlLogo}')" title="Logo ${retorno.nombreProyectoU}"></div>
        <h2 class="nombreCard">${retorno.nombreProyectoU}</h2>
    </div>
    <a  href="/vivienda/tramites-vivienda/${retorno.nombreLimpio}" title="Ver más del proyecto ${retorno.nombreProyectoU}"><div class="btnCards">Ver ${retorno.nombreProyectoU} <i class="fa fa-arrow-circle-right" style="padding:0px 5px;" aria-hidden="true"></i></div></a>
    </div> 
    `);
}

let proyecto_unico = retorno => {
    document.getElementById('lista-proyectos').innerHTML = `
        <div class="container">
        <div class="row">
        <h1 class="titulo">${retorno.nombreProyectoU}</h1>
        <div style="padding:0px;" class="col-md-6"><p class="avanceTxt">Avances de obra</p></div>
        <div style="padding:0px;" class="col-md-6 info-fecha"><p class="desc-pag">Información de obra actualizada a ${retorno.nombreMes} ${retorno.año}</p></div>
        </div>
        </div>
        <div id="carrusel" class="imagenes">
        ${retorno.videoU}
        ${retorno.imagen1}
        ${retorno.imagen2}
        ${retorno.imagen3}
        ${retorno.imagen4}
        ${retorno.imagen5}
        ${retorno.imagen6}
        ${retorno.imagen7}
        ${retorno.imagen8}
        ${retorno.imagen9}
        ${retorno.imagen10}
        </div>

        <div style="padding-top:1em;padding-bottom:1em;" id="slider-nav" class="imagenes">
        ${retorno.imagen1}
        ${retorno.imagen2}
        ${retorno.imagen3}
        ${retorno.imagen4}
        ${retorno.imagen5}
        ${retorno.imagen6}
        ${retorno.imagen7}
        ${retorno.imagen8}
        ${retorno.imagen9}
        ${retorno.imagen10}
        </div>
        ${retorno.titleSectionCards}

<div class="noticia" id="noticias">
${retorno.tituloCard1}
${retorno.tituloCard2}
${retorno.tituloCard3}
${retorno.tituloCard4}
${retorno.tituloCard5}
${retorno.tituloCard6}
</div>
<div class="col-md-12 correoCard">
<div class="container cont-cardCorreo" style="width:80%;">
<div class="col-md-2">
<img style="width:90px;" src="/Style%20Library/webparts/tramites-vivienda/img/icons/email.svg" />
</div>
<div class="col-md-10 card-correo">
<h2 class="subtitulo">Buzón de solicitudes</h2>
<p>Te acompañamos en el proceso de compra de vivienda, si tienes solicitudes frente a: envío de documentación, soportes de pago o inquietudes, déjanos tus datos y nos comunicaremos contigo:</p>
<div><a href="${retorno.buzon}" target="_blank" class="btn btn-default">Ingresa aquí</a></div>
</div>
</div>
</div>
<div class="container">
${retorno.titleSectionPay}
<div class="col-md-12 pagos-f">
${retorno.imgBancoUno}
${retorno.imgBancoDos}
</div>
</div>
    `;
    $('#carrusel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        adaptiveHeight: true,
        asNavFor: '#slider-nav',
        prevArrow: "<button type='button' class='slick-prev pull-left' aria-label='Siguiente' title='Siguiente'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right' aria-label='Anterior' title='Anterior'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    });
    $('#slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#carrusel',
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: "<button type='button' class='slick-prev pull-left' aria-label='Siguiente' title='Siguiente'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right' aria-label='Anterior' title='Anterior'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    });


    if (screen.width > 1023) {
        $(document).ready(function() {
            var heights = [];
            $('.card').each(function() {
                heights.push($(this).height());
            });
            var maxHeight = Math.max.apply(null, heights);
            $('.card').height(maxHeight);
        })
    }


    $('#noticias').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left' aria-label='Siguiente' title='Siguiente'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right' aria-label='Anterior' title='Anterior'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    adaptiveHeight: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true
                }
            }
        ]
    });

}

function getData(url, onSuccess) {
    $.ajax({
        url: url,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#_REQUESTDIGEST").val()
        },
        success: function(data) {
            let stringData = JSON.stringify(data);
            let object = JSON.parse(stringData);
            let resultados = object.d.results;
            if (typeof(onSuccess == "function")) {
                onSuccess(resultados);
            }
        },
        error: function(error) {
            console.log(" error", error);
        }
    })
}
GetProyecto();