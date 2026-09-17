function ValidaCPF(cpf) {
  function cleanCPF() {
    let cpfLimpo = cpf.replace(/\D+/g, "");
    let cpfArray = Array.from(cpfLimpo);
    validaCPF(cpfArray);
  }
  function validaCPF(cpfArray) {
    if (cpfArray.length > 11) {
      console.log('limite de caracteres ultrapassado');
      return;
    }
  }
  cleanCPF();
}

ValidaCPF("123.532.622.441");
