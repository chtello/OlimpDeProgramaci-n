
const BanCal = 105;
const AtnCal = 120;
const AdOCal = 9;
const BanC = 27;
const AtnP = 30;
const AdOG = 1;
const C =88
const P =90
const G =50
function zetadieta(C, P, G) {
    if (-1 < C || P || G ) {
        if (  C || P || G < 1000000000 ) {
            let BananasUtilizadas = Math.ceil(C/BanC); 
            let LatasDeAtúnUtilizadas = Math.ceil(P/AtnP);
            let AceiteUtilizado = Math.ceil(G/AdOG) ;
            let CalTotalBan = BananasUtilizadas*BanCal;
            let CalTotalAtn = LatasDeAtúnUtilizadas*AtnCal;
            let CalTotalAdO = AceiteUtilizado*AdOCal;
            let CalTotales = CalTotalBan + CalTotalAtn + CalTotalAdO;  
            console.log("Has consumido aproximadamente " + CalTotales+ " calorias")
        }
        else{
            console.log("Exeso de calorias")
        }
    }
    else{
        console.log("No puede haber cantidades negativas")
    }
}
let CaloriasTotales = zetadieta(C, P, G)
