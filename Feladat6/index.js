
let gomb = document.getElementById("hozzaAd")
let keret = document.getElementById("keret")
gomb.addEventListener("click", function () {
    let szovegDoboz = document.createElement("input")
    szovegDoboz.setAttribute("id", "szovegDoboz")
    

    let deleteGomb = document.createElement("button")
    deleteGomb.setAttribute("id", "deleteGomb")

    let kicsiKeret =document.createElement("div")
    kicsiKeret.setAttribute("id","kicsiKeret")
    kicsiKeret.appendChild(szovegDoboz)
    kicsiKeret.appendChild(deleteGomb)
    deleteGomb.addEventListener("click", function () {
        kicsiKeret.remove()
    })
    keret.appendChild(kicsiKeret)
    szovegDoboz.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            let szovegLabel = document.createElement("label")
            szovegLabel.textContent = szovegDoboz.value
          
            keret.replaceChild(szovegLabel, szovegDoboz)
        }
    })
    

})
