p1 = document.querySelector("#p1");
x = document.querySelector("#x");
o = document.querySelector("#o");
note = document.querySelector("#note");

const show = () => {
    x.style.display = "inline-block";
    o.style.display = "inline-block";
    note.style.display = "inline-block";
}

p1.addEventListener("click", show);
