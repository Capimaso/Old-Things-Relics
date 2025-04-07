let itens = [["Luger","luger.png",200],["M1911","m1911.png",150]]
const itemsContainer = document.querySelector(".btns");
const itemsInfo = document.querySelector(".infos");
const logo = document.getElementById("logo");
let itemCount = itens.length;

for (let i = 0; i<itemCount; i++){
    let itemSrc = document.createElement("img");
    itemSrc.src = itens[i][1];
    itemSrc.width = 200;
    let itemName = document.createElement("button");
    itemName.innerText = itens[i][0];
    itemName.id = "item"
    let itemPrice = document.createElement("button");
    itemPrice.innerText = itens[i][2] + "$";
    itemPrice.id = "price"
    itemsContainer.appendChild(itemSrc);
    itemsContainer.appendChild(itemsInfo);
    itemsInfo.appendChild(itemName);
    itemsInfo.appendChild(itemPrice);
}