
const list = document.querySelectorAll("#list li");

let dragged= null;
list.forEach(li => {
    li.addEventListener("dragstart", () => {
        dragged = li;
        li.classList.add("dragging");
    });

    li.addEventListener("dragend", () => {
        dragged = null;
        li.classList.remove("dragging");
    });

    li.addEventListener("dragover", (e) => {
        e.preventDefault();
        li.classList.add("hovered");
    });

    li.addEventListener("dragleave", () => {
        li.classList.remove("hovered");
    });

    li.addEventListener("drop", () => {
        li.classList.remove("hovered");
        if (dragged !== li) {
            const list = li.parentNode;
            const children = Array.from(list.children);
            const draggedIndex = children.indexOf(dragged);
            const targetIndex = children.indexOf(li);
            if (draggedIndex < targetIndex) {
                list.insertBefore(dragged, li.nextSibling);
            } else {
                list.insertBefore(dragged, li);
            }
        }
    });

});