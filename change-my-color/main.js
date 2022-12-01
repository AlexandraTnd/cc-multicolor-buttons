window.addEventListener("load", function () {
    let changingColorButton = document.getElementById("change-color");

    changingColorButton.addEventListener("click", function () {
        if (changingColorButton.classList.contains("btn-red")) {
            changingColorButton.classList.remove("btn-red");
        } else {
            changingColorButton.classList.add("btn-red")
        }
    })
})