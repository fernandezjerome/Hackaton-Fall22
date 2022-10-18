// import { getData } from "./modules/dataMiner.js";
const ajaxImg = document.querySelector(".sql__img");
const ajaxContent = document.querySelector(".sql__content");

function getData() {
    fetch("./data.json")
        .then((res) => res.json())
        .then((data) => {
            callback(data);
        })

        .catch((error) => console.log(error));
}

function callback(data) {
    const buttons = Array.from(
        document.querySelectorAll(".intro__buttons .sql-btn")
    );
    let prevTarget;
    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            if (prevTarget !== undefined) {
                // console.log(`prevTarget`, prevTarget);
                prevTarget.classList.remove("selected");
            }
            const target = event.target;
            target.classList.add("selected");
            prevTarget = target;
            const key = target.dataset.name;
            // console.log(data[key]);
            makeInfo(data[key]);
        });
    });
}

function makeInfo(data) {
    // console.log(data);

    (ajaxContent.innerHTML = `
    <h3 class="info__title">${data.title}</h3>
    <p class="info__content">${data.content}</p>
  
    <div class="sql__appoved">
    <img src="images/check-icon.svg" alt="appoved icon"/>
    <p class="info__content">${data.info1}</p></div>
  
    <div class="sql__appoved">
    <img src="images/check-icon.svg" alt="appoved icon"/>
    <p class="info__content">${data.info2}</p></div>
  
    <div class="sql__appoved">
    <img src="images/check-icon.svg" alt="appoved icon"/>
    <p class="info__content">${data.info3}</p></div>`),
        (ajaxImg.innerHTML = `
    <div class="info__img">
    <img src="images/${data.img}" alt="${data.alt}" />
    </div> `);
}

getData();
