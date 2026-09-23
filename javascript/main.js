const btnCv = document.getElementById("btnCv")

btnCv.addEventListener("click", () => {
    const link = document.createElement("a")
    link.href= "";
    link.download= "";
    link.click();
})
