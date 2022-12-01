window.addEventListener("load", function () {
    let btn = document.getElementById("count");
    
    btn.addEventListener("click", function () {
        btn.innerHTML = +btn.innerHTML + 1;
    })
})