window.addEventListener("load", function () {
    let jumpingBtn = document.getElementById("flip-flop");

    jumpingBtn.addEventListener("click", function() {
        if (jumpingBtn.innerHTML === "Go Right!") {
            jumpingBtn.classList.add("btnright");
            jumpingBtn.innerHTML = "Go Left!";
        } else {
            jumpingBtn.classList.remove("btnright");
            jumpingBtn.innerHTML = "Go Right!";
        }
    })
})