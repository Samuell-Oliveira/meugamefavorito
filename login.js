document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    const btnConcluir = document.getElementById("btnConcluir");

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
window.addEventListener('resize', function() {
    document.getElementById('sessão').style.height = window.innerHeight + 'px';
});