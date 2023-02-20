let divSprawdz = document.getElementById("sprawdz");

let wynik = 12;

let sprawdzanieWyniku = () => {
  console.log("sprawdzanie wyniku - start");
  divSprawdz.innerHTML = `<button aria-busy="true">Prosimy poczekać…</button>`;

  alert(`Twój wynik to: ${wynik}`);
  console.log("sprawdzanie wyniku - stop");
};

let checkboxes = document.querySelectorAll('input[type="checkbox"]');

console.log(checkboxes);

let correctCheckboxes =
  [
 
  checkboxes[0],
  checkboxes[1], 
  checkboxes[11], 
  checkboxes[14], 
  checkboxes[17], 
  checkboxes[19], 
  checkboxes[24], 
  checkboxes[28], 
  checkboxes[32],
]

// 4, 4, 4, 4, 2, 4, 2;
// łącznie 24
