/* Basta adicionar o atributo oninput="NomeDaFunction(this)" no campo do input para atribuir a function no campo*/

function CpfCnpjMask(input) {
      const value = input.value.replace(/\D/g, '');
      if (value.length <= 11) {
        input.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      } else {
        input.value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
      }
}

function CepMask(input) {
      const value = input.value.replace(/\D/g, '');
      input.value = value.replace(/(\d{5})(\d{3})/, '$1-$2');
}

function RgMask(input) {
      const value = input.value.replace(/\D/g, '');
      input.value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
}


function ReaisMask(inputElement) {
  const value = inputElement.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  const formattedValue = (Number(value) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  inputElement.value = formattedValue;
}

function soNumeros(input) {
  const valorInput = input.value;
  const rmvLetras = valorInput.replace(/[^0-9]/g, '');
  input.value = rmvLetras;
}

function HoraMask(input) {
    const value = input.value.replace(/\D/g, '');
    input.value = value.replace(/(\d{2})(\d{2})/, '$1:$2');
  }

function celularMask(input) {
    const celular = input.value.replace(/\D+/g, "").slice(0, 11);
    const tamanho = celular.length;

    if (tamanho === 11) {
        input.value = `(${celular.slice(0, 2)}) ${celular.slice(2, 7)}-${celular.slice(7)}`;
    } else if (tamanho >= 7) {
        input.value = `(${celular.slice(0, 2)}) ${celular.slice(2, 7)}-${celular.slice(7, 11)}`;
    } else if (tamanho >= 2) {
        input.value = `(${celular.slice(0, 2)}) ${celular.slice(2)}`;
    } else {
        input.value = `(${celular}`;
    }
  }
