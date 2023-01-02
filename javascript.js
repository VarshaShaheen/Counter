const countEl = document.getElementById("counter-el")

updateVisitCount()

function updateVisitCount(){
    fetch("https://api.countapi.xyz/update/varshaShaheen/youtube?amount=1")
    .then(res=>res.json())
    .then(res=> {
        countEl.innerHTML=res.value;
    })
}