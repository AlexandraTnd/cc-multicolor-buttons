window.addEventListener("load", function () {
    let btn = document.getElementById("btn");
    let span = document.getElementById("message");

    btn.addEventListener("click", function () {
        span.classList.add("redspan");
    })
})