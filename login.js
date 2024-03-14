document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    const btnConcluir = document.getElementById("btnConcluir");
    const video = document.getElementById("background-video")

    video.loop = true;

    function verificarPreenchimento() {
        if (emailInput.value.trim() !== "" && senhaInput.value.trim() !== "") {
            btnConcluir.removeAttribute("disabled");
        } else {
            btnConcluir.setAttribute("disabled", "disabled");
        }
    }

    emailInput.addEventListener("input", verificarPreenchimento);
    senhaInput.addEventListener("input", verificarPreenchimento);
});