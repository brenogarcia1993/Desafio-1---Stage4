let operation;

let num1;
let num2;

let funcNum1 = () => {
  num1 = parseInt(prompt("Insira o primeiro número..."));
};

let funcNum2 = () => {
  num2 = parseInt(prompt("Insira o segundo número..."));
};

while (operation != 6) {
  operation = parseInt(
    prompt(`
    Olá! Insira o códido do operador matemático para iniciarmos o cálculo.
    1. Somar
    2. Subtrair
    3. Multiplicar
    4. Dividir
    5. Resto de divisão
    6. Sair do programa
    `)
  );

  if (operation == 6) {
    alert(`Programa finalizado.`);
  } else if (operation >= 1 && operation <= 5) {
    funcNum1();
    funcNum2();
    comparate();
  } else {
    alert(`Opção inválida`);
  }

  function comparate() {
    if (num1 == num2) {
      alert("Números iguais");
    } else {
      alert("Números diferentes");
    }

    switch (operation) {
      case 1:
        let soma = num1 + num2;
        let test1 = soma % 2 == 0 ? "par" : "impar";
        alert(`O resultado da soma é ${soma} -> ${test1}`);
        break;
      case 2:
        let subtrair = num1 - num2;
        let test2 = subtrair % 2 == 0 ? "par" : "impar";
        alert(`O resultado da subtração é ${subtrair} -> ${test2}`);
        break;
      case 3:
        let multiplicar = num1 * num2;
        let test3 = multiplicar % 2 == 0 ? "par" : "impar";
        alert(`O resultado da multiplicação é ${multiplicar} -> ${test3}`);
        break;
      case 4:
        let dividir = num1 / num2;
        let test4 = dividir % 2 == 0 ? "par" : "impar";
        alert(`O resultado da divisão é ${dividir} -> ${test4}`);
        break;
      case 5:
        let resto = num1 % num2;
        let test5 = resto % 2 == 0 ? "par" : "impar";
        alert(`O resto é ${resto} -> ${test5}`);
        break;
      default:
        break;
    }
  }
}
