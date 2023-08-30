let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');


myExtrasInput.addEventListener("change", addExtra);



function addExtra() {
    /* din map kode her... */
    myExtras.push(myExtrasInput.value);
updateExtras();
}


function updateExtras() {

const extrasHTML = myExtras.map(extra => `<li>${extra}</li>`).join('');
myExtrasListElement.innerHTML = extrasHTML;

    /* din map kode her... */

}

