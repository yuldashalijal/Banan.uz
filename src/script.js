"use strict";

let usd = 11355;
let oy = 12;

let wrap = document.querySelector(".wrapper"),
  brend = document.querySelector("#brend"),
  letter = document.querySelector("#sortlash"),
  bx = document.querySelector(".bx");



function repentCard() {
  product.forEach((el, ind, arr) => {
    let car = document.createElement("div");
    car.setAttribute(
      "class",
      "card w-[350px] h-[550px] rounded-[5px] shadow-md hover:shadow-2xl cursor-pointer bg-white"
    );

    car.innerHTML = `
            <img class="w-[290px] hover:shadow-lg dark:hover:rounded-[5px] py-2 mx-auto" src="${
              el.img
            }" alt="...">
            <div class="px-10 py-2 absolute">
              <p class="font-medium text-[18px] text-gray-700">${el.name}</p>
              <p class="font-semibold text-lg">${el.brend}</p>

              <h2 class="mt-8 text-[20px] text-4xl font-bold">${
                el.narxi * usd
              } so'm</h2>
              <p class="bg-yellow-400 text-center rounded-[6px] hover:bg-yellow-300">${Math.ceil(
                (el.narxi * usd) / oy
              )} so'm x ${oy} oy</p>
              <div class="mt-5 flex justify-between">
                <button class="p-2 px-9 mr-6 text-[18px] text-white rounded-[12px] ${
                  el.isActive
                    ? "bg-blue-400"
                    : "bg-red-400 hover:bg-red-500 line-through"
                } hover:bg-blue-500 focus:ring-4 focus:ring-blue-200">Sotib olish</button>
                <i class='bx bx-cart-download text-[32px] p-2 px-3 rounded-[12px] text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-200'></i>
              </div>

            </div>

    `;

    wrap.append(car);
  });
}

repentCard()

function optionDinamic() {
  const sortBrend = [];

  product.forEach((el) => {
    if (!sortBrend.includes(el.brend)) {
      sortBrend.push(el.brend);
    }
  });

  sortBrend.sort();
  sortBrend.forEach((el) => {
    const option = document.createElement("option");
    option.innerHTML = el;
    brend.append(option);
  });
}

optionDinamic()



function cardReanders(data) {
  wrap.innerHTML = "";
  data.forEach((el, ind, arr) => {
    let car = document.createElement("div");
    car.setAttribute(
      "class",
      "card w-[350px] h-[550px] rounded-[5px] shadow-md hover:shadow-2xl cursor-pointer bg-white"
    );

    car.innerHTML = `
            <img class="w-[290px] hover:shadow-lg dark:hover:rounded-[5px] py-2 mx-auto" src="${
              el.img
            }" alt="...">
            <div class="px-10 py-2 absolute">
              <p class="font-medium text-[18px] text-gray-700">${el.name}</p>
              <p class="font-semibold text-lg">${el.brend}</p>

              <h2 class="mt-8 text-[20px] text-4xl font-bold">${
                el.narxi * usd
              } so'm</h2>
              <p class="bg-yellow-400 text-center rounded-[6px] hover:bg-yellow-300">${Math.ceil(
                (el.narxi * usd) / oy
              )} so'm x ${oy} oy</p>
              <div class="mt-5 flex justify-between">
                <button class="p-2 px-9 mr-6 text-[18px] text-white rounded-[12px] ${
                  el.isActive
                    ? "bg-blue-400"
                    : "bg-red-400 hover:bg-red-500 line-through"
                } hover:bg-blue-500 focus:ring-4 focus:ring-blue-200">Sotib olish</button>
                <i class='bx bx-cart-download text-[32px] p-2 px-3 rounded-[12px] text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-200'></i>
              </div>

            </div>

    `;

    wrap.append(car);
  });
}



letter.addEventListener("change", (el) => {
  wrap.innerHTML = `<span class="loader"></span>`;
  if (el.target.value === "A-z") {
    let productSort = product.sort((a, b) => {
      return a.brend.localeCompare(b.brend);
    });
    
    setTimeout(() => {
      cardReanders(productSort);
    }, productSort.length * 100);
  } else {
    let productSort = product.sort((a, b) => {
      return b.brend.localeCompare(a.brend);
    });
    
    setTimeout(() => {
      cardReanders(productSort);
    }, productSort.length * 100);
  }
});

brend.addEventListener("change", (el) => {
  wrap.innerHTML = `<span class="loader"></span>`;
  const brendSort = product.filter((item) => {
    return item.brend === el.target.value;
  });
  
  setTimeout(() => {
    cardReanders(brendSort);
  }, brendSort.length * 100);
})

//? const productSort = product.sort((a, b) => a.brend.localeCompare(b.brend));
//? console.log(productSort);