function ValidaCPF(cpf) {
  cleanCPF(cpf)
  function cleanCPF(cpf) {
    let cpfLimpo = cpf.replace(/\D+/g, "");
    let cpfSeparado = cpfLimpo.split("");
    let newArrayNumber = cpfSeparado.map(d => Number(d))
    validaCPF(newArrayNumber);
  }
  function validaCPF(cpfArray) {
    if (cpfArray.length > 11) {
      console.log("limite de caracteres ultrapassado");
      return;
    } else {
      primeiroDígito(cpfArray);
    }
  }
  function primeiroDígito(cpfArray) {
   
  };
  }

ValidaCPF("123.532.622.44");
