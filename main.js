let checkboxes = document.querySelectorAll('input');

console.log(checkboxes);

let correctCheckboxes = [
  checkboxes[0],
  checkboxes[1],
  checkboxes[7],
  checkboxes[9],
  checkboxes[12],
  checkboxes[14],
  checkboxes[19],
  checkboxes[23],
  checkboxes[27],
  checkboxes[29],
];



let points = 0;
let countPoints = () => {
  points = 0;
  if (correctCheckboxes[0].checked == true) {
    points++;
    console.log(points);
  }
  if (correctCheckboxes[1].checked == true) {
    points++;
    console.log(points);
  }
  if (correctCheckboxes[2].checked == true) {
    points++;
    console.log(points);
  }
  if (correctCheckboxes[3].checked == true) {
    points++;
    console.log(points);
  }
  if (correctCheckboxes[4].checked == true) {
    points++;
    console.log(points);
  }
  if (correctCheckboxes[5].checked == true) {
    points++;
    console.log(points);
  }
  if (correctCheckboxes[6].checked == true) {
    points++;
    console.log(points);
  }
  if (correctCheckboxes[7].checked == true) {
    points++;
    console.log(points);
  }
  if (correctCheckboxes[8].checked == true) {
    points++;
    console.log(points);
  }
  if (correctCheckboxes[9].checked == true) {
    points++;
    console.log(points);
  }
  
  

    window.alert(`Twój wynik to: ${points}/10`);

};

let divSprawdz = document.getElementById("sprawdz");

let sprawdzanieWyniku = () => {
  let points = 0;
  console.log("sprawdzanie wyniku - start");
  divSprawdz.innerHTML = `<button aria-busy="true">Prosimy poczekać…</button>`;
  countPoints();
  console.log("sprawdzanie wyniku - stop");
  divSprawdz.innerHTML = `<button onclick="sprawdzanieWyniku()">Sprawdź swój wynik</button>`;
};
