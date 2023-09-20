/* Máscaras de CPF e CNPJ */

/* Basta adicionar o atributo oninput="CpfCnpjMask(this)" no campo do input */
function CpfCnpjMask(input) {
      const value = input.value.replace(/\D/g, '');
      if (value.length <= 11) {
        input.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      } else {
        input.value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
      }
}

/* Máscaras de CEP */

/* Basta adicionar o atributo oninput="CepMask(this)" no campo do input */
function CepMask(input) {
      const value = input.value.replace(/\D/g, '');
      input.value = value.replace(/(\d{5})(\d{3})/, '$1-$2');
}

/* Máscaras de RG */

/* Basta adicionar o atributo oninput="RgMask(this)" no campo do input */
function RgMask(input) {
      const value = input.value.replace(/\D/g, '');
      input.value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
}

/* Máscara para campos de Valor em Reais R$ */
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
