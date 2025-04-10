const KIJELZO = document.querySelector(".kijelzo")


export function szamLetrehoz() {
    const SZAMOK = document.querySelector(".szamok")
    for (let i = 0; i < 10; i++) {
        SZAMOK.innerHTML += `<button>${i}</button>`
        
    }
    
}
//JS: Adj eseménykezelőt a gombokhoz! Ha a gombokra kattintunk, azoknak megfelelő értékek kerüljenek be le a kijelzőbe! (A számjegyek esetében ciklussal menj végig a gomb elemeken). 
export function gombEsemeny(){
    const MEGJELENIT = document.querySelectorAll(".szamok button") /*All ha több gombunk van*/
    for (let i = 0; i < MEGJELENIT.length; i++) {
       MEGJELENIT[i].addEventListener("click", function() {
        KIJELZO.innerHTML += i
        
       })
       //*MEGJELENIT[i].addEventListener("click", ()=> {       })*/ /* Ugyan ezt jelenti  MEGJELENIT[i].addEventListener("click", function() { */

        
    }
}
//*JS: Ha műveleti jelre kattintunk, akkor az is kerüljön bele a kijelző tartalmába. A műveleti jelek eseménykezelőinek hozzáadását  nem kell ciklussal megoldani! Az eseménykezelőben mentsd el az aktuális műveleti jelet egy globális muvjel változóba.*//
export function muvJel() {
    const JELOSSZ = document.querySelector("#osszeadas")
    const JELKIVON = document.querySelector("#kivonas")
    const JELSZOR = document.querySelector("#szorzas")
    const JELOSZT = document.querySelector("#osztas")
    const JELEGYENLO = document.querySelector("#egyenlo")
    const JELTOROL = document.querySelector("#torles")
    const JELPONT = document.querySelector("#pont")
    let lista = [JELOSSZ, JELKIVON, JELSZOR, JELOSZT, JELEGYENLO, JELPONT, JELTOROL];
    return lista
    
    

}
export function szamOlas(lista) {

    for (let i = 0; i < lista.length; i++) {
        lista[i].addEventListener("click", function () {
            KIJELZO.innerHTML +=  lista[i].textContent;
        })
        
        
        
    }
    
    
}