
let list = document.getElementById("container");

let index = 1;

loadContent();

function loadContent() {
    setTimeout(() => {
        for (let i = 0; i < 10; i++) {
            let li = document.createElement("li");
            li.textContent = "Item" + " " + index;
            list.appendChild(li);
            index++;
        }
    }, 1000
    )
}

function checkScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        loadContent();
    }
}
window.addEventListener("scroll", checkScroll);
