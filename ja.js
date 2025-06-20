let obj = document.getElementById("DOM");
obj.addEventListener("click", () => {
    let head_obj = document.getElementById("head");
    console.log(head_obj);
    head_obj.style.color = "red";
    head_obj.innerText = "WELCOME RIKASH!!";});