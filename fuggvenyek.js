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