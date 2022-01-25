let config = {
    urlGlosario: `/Vivienda/_api/web/Lists/getbytitle('Diccionario-tramites')/items?`,
}

let RANGOS = "";
globalData = {}

let A_9 ="9-A";
let B_C ="B-C";
let D_E ="D-3";
let F_G ="F-G";
let H_I ="H-I";
let J_K ="J-K";
let L_M ="L-M";
let N_Ñ ="N-Ñ";
let O_P ="O-P";
let Q_R ="Q-R";
let S_T ="S-T";
let U_V ="U-V";
let W_X ="W-X";
let Y_Z ="Y-Z";


globalData["filtro-letras"] = "9-A";

function mostrar(b){
    filtroLetras = b.id;
    globalData["filtro-letras"] = filtroLetras;
    $("#glosario").empty();
    filtro(filtroLetras);
}

function getGlosario() {
    url = config.urlGlosario;
    let onSuccess = gl => {
        let mapGl = gl.map(item => {
            let rango = item.rango;            
            let termino = item.T_x00e9_rmino;
            let descripcion = item.Descripcion;

            let retorno = {rango, termino, descripcion }
            createGlosario(retorno)
            return retorno;
        }).filter(d => d);
        globalData["glosario"] = mapGl;
    
        let mapping = globalData["glosario"];
    
        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }

        let mapLetras = mapping.map(le =>{
            let letras = le.rango;
            return letras;
        })
        let uniLetras = mapLetras.filter(unique).map(ul =>{
            var letraUnica = ul;
        return letraUnica;
        })
        globalData["letras"] = uniLetras;

        const A = uniLetras.find(letraA => letraA === "9-A");

        if(A == "" || A == undefined){
            $(".rangos-list").append(`<li>9-A</li>`)
        }
        if(A){
            $(document).ready(function(){
                
                $('#9-A').click();
              });
            $(".rangos-list").append(`<a href="#" id="9-A" onclick="mostrar(this);"><li>9-A</li></a>`)

        }
        

        const B = uniLetras.find(letraB => letraB === "B-C");
        if(B == "" || B == undefined){
            $(".rangos-list").append(`<li>B-C</li>`)
        }
        if(B){
            $(".rangos-list").append(`<a href="#" id="B-C" onclick="mostrar(this);"><li>B-C</li></a>`)
        }

        const D = uniLetras.find(letraD => letraD === "D-E");


        if(D == "" || D == undefined){
            $(".rangos-list").append(`<li>D-E</li>`)
        }
        if(D){
            $(".rangos-list").append(`<a href="#" id="D-E" onclick="mostrar(this);"><li>D-E</li></a>`)
        }

        const F = uniLetras.find(letraF => letraF === "F-G");


        if(F == "" || F == undefined){
            $(".rangos-list").append(`<li>F-G</li>`)
        }
        if(F){
            $(".rangos-list").append(`<a href="#" id="F-G" onclick="mostrar(this);"><li>F-G</li></a>`)
        }

        const H = uniLetras.find(letraH => letraH === "H-I");

        if(H == "" || H == undefined){
            $(".rangos-list").append(`<li>H-I</li>`)
        }
        if(H){
            $(".rangos-list").append(`<a href="#" id="H-I" onclick="mostrar(this);"><li>H-I</li></a>`)
        }

        const J = uniLetras.find(letraJ => letraJ === "J-K");
    
        if(J == "" || J == undefined){
            $(".rangos-list").append(`<li>J-K</li>`)
        }
        if(J){
            $(".rangos-list").append(`<a href="#" id="J-K" onclick="mostrar(this);"><li>J-K</li></a>`)
        }
    
    
        const L = uniLetras.find(letraL => letraL === "L-M");
    
            if(L == "" || L == undefined){
                $(".rangos-list").append(`<li>L-M</li>`)
            }
            if(L){
                $(".rangos-list").append(`<a href="#" id="L-M" onclick="mostrar(this);"><li>L-M</li></a>`)
            }
    
    
            const N = uniLetras.find(letraN => letraN === "N-Ñ");
    
            if(N == "" || N == undefined){
                $(".rangos-list").append(`<li>N-Ñ</li>`)
            }
            if(N){
                $(".rangos-list").append(`<a href="#" id="N-Ñ" onclick="mostrar(this);"><li>N-Ñ</li></a>`)
            }    
    
            
            const O = uniLetras.find(letraO => letraO === "O-P");
    
            if(O == "" || O == undefined){
                $(".rangos-list").append(`<li>O-P</li>`)
            }
            if(O){
                $(".rangos-list").append(`<a href="#" id="O-P" onclick="mostrar(this);"><li>O-P</li></a>`)
            }
    
            const Q = uniLetras.find(letraQ => letraQ === "Q-R");
    
            if(Q == "" || Q == undefined){
                $(".rangos-list").append(`<li>Q-R</li>`)
            }
            if(Q){
                $(".rangos-list").append(`<a href="#" id="Q-R" onclick="mostrar(this);"><li>Q-R</li></a>`)
            }
    
    
            const S = uniLetras.find(letraS => letraS === "S-T");
    
            if(S == "" || S == undefined){
                $(".rangos-list").append(`<li>S-T</li>`)
            }
            if(S){
                $(".rangos-list").append(`<a href="#" id="S-T" onclick="mostrar(this);"><li>S-T</li></a>`)
            }
    
    
            const U = uniLetras.find(letraU => letraU === "U-V");
    
            if(U == "" || U == undefined){
                $(".rangos-list").append(`<li>U-V</li>`)
            }
            if(U){
                $(".rangos-list").append(`<a href="#" id="U-V" onclick="mostrar(this);"><li>U-V</li></a>`)
            }
    
            const W = uniLetras.find(letraW => letraW === "W-X");
    
            if(W == "" || W == undefined){
                $(".rangos-list").append(`<li>W-X</li>`)
            }
            if(W){
                $(".rangos-list").append(`<a href="#" id="W-X" onclick="mostrar(this);"><li>W-X</li></a>`)
            }
    
            const Y = uniLetras.find(letraY => letraY === "Y-Z");
    
            if(Y == "" || Y == undefined){
                $(".rangos-list").append(`<li>Y-Z</li>`)
            }
            if(Y){
                $(".rangos-list").append(`<a href="#" id="Y-Z" onclick="mostrar(this);"><li>Y-Z</li></a>`)
            }
    }
    
    getData(url, onSuccess);
}
getGlosario();

let createGlosario = retorno => {
    $("#glosario").append(`
    <div class="cont-title ${retorno.rango}">
    <h3 style="color: #f60; font-weight: bold;">${retorno.termino}</h3>
    <p>${retorno.descripcion}</p>
    </div>
    `)

}

function filtro(filtroLetras){
    let newDic = globalData["glosario"]
    .filter(item => (filtroLetras == "") ? true : item.rango == filtroLetras)
    .map(item=>{
        createGlosario(item); return item;
    })
    globalData["filtros"] = newDic;
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
            console.log("error", error);
        }
    })
}
