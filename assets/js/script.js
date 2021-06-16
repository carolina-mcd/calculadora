const form = document.getElementById('form');

form.addEventListener('submit', calcular);

function calcular(evento) {
  evento.preventDefault();

  const genero = valorSelect('gender');
  const idade = valorInput('age');
  const peso = valorInput('weight');
  const altura = valorInput('height');
  const levelAtividadeFisica = valorSelect('activity_level');

  const taxaMetabolica = Math.round(
    genero === 'female'
      ? (655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade))
      : (66 + (13.7 * peso) + (5 * altura) - (6.8 * idade))
  );

  const manutencaoPeso = Math.round(taxaMetabolica * Number(levelAtividadeFisica));

  const perderPeso = manutencaoPeso - 450;
  const ganharPeso = manutencaoPeso + 450;

  const layout = `
    <h2>Aqui está o resultado:</h2>

    <div class="result-content">
      <ul>
        <li>
          Seu metabolismo basal é de <strong>${taxaMetabolica} calorias</strong>.
        </li>
        <li>
          Para manter o seu peso você precisa consumir em média <strong>${manutencaoPeso} calorias</strong>.
        </li>
        <li>
          Para perder peso você precisa consumir em média <strong>${perderPeso} calorias</strong>.
        </li>
        <li>
          Para ganhar peso você precisa consumir em média <strong>${ganharPeso} calorias</strong>.
        </li>
      </ul>
    </div>
 `;

  const resultado = document.getElementById('result');

  resultado.innerHTML = layout;

}

function valorSelect(id) {
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].value;
}

function valorInput(id) {
  return Number(document.getElementById(id).value);
}
