//Opgavebeskrivelse

// Lav nogle hardcodede filtreringer:
// en der viser alle el drevne fartøjer
// en der viser alle fartøjer med mere end 2 sæder
// alle el-drevne fartøjer ejet af Jonas
// alle rugbrøds drevne fartøjer med plads til mere end en.
// Lav nogle if statements i showTheseVehicles funktionen så tabellen bliver smukkere: uden undefined og tomme felter og true;
// Flyt filtreringerne over på 4 knapper der viser de filtreringer der før var hardcodede + 1 knap til at vise alle (ufiltreret)
// Style tabellen endnu mere

const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);

// function showTheseVehicles(arr) {
//   arr.forEach((each) => {
//     tbodyPointer.innerHTML += `<tr>
//   <td>${each.type}</td>
//   <td>${each.fuel}</td>
//   <td>${each.passengers}</td>
//   <td>${each.stops}</td>
//   <td>${each.ownedBy}</td>
//   <td>${each.isElectric}</td>
//   <td>${each.isTandem}</td>
// </tr>`;
//   });
// }

// Vis alle fartøjer ved start
tbodyPointer.innerHTML = "";
showTheseVehicles(vehicles);

//alle fartøjer
document.querySelector(".show_all").addEventListener("click", showAll);

function showAll() {
  tbodyPointer.innerHTML = "";
  showTheseVehicles(vehicles);
}

//ved klik på den første knap vises kun el-drevne fartøjer
document.querySelector(".el").addEventListener("click", electricTrue);

function electricTrue() {
  const electricVehicles = vehicles.filter((vehicle) => vehicle.isElectric);
  tbodyPointer.innerHTML = "";
  showTheseVehicles(electricVehicles);
}

//ved klik på den anden knap vises alle fartøjer med mere end 2 sæder
document.querySelector(".two_seats").addEventListener("click", twoSeats);

function twoSeats() {
  const tandemVehicles = vehicles.filter((vehicle) => vehicle.isTandem);
  tbodyPointer.innerHTML = "";
  showTheseVehicles(tandemVehicles);
}

//ved klik på den tredje knap vises alle el-drevne fartøjer ejet af Jonas
document.querySelector(".jonas").addEventListener("click", jonas);

function jonas() {
  const jonasVehicles = vehicles.filter((vehicle) => vehicle.ownedBy === "Jonas");
  tbodyPointer.innerHTML = "";
  showTheseVehicles(jonasVehicles);
}

//ved klik på den fjerde knap vises alle rugbrøds drevne fartøjer med plads til mere end en
document.querySelector(".rugbroed").addEventListener("click", rugbroed);

function rugbroed() {
  const rugbroedVehicles = vehicles.filter((vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1);
  tbodyPointer.innerHTML = "";
  showTheseVehicles(rugbroedVehicles);
}

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = ""; // Ryder tabellen før visning
  arr.forEach((each) => {
    const type = each.type ?? "N/A";
    const fuel = each.fuel ?? "N/A";
    const passengers = each.passengers !== undefined && each.passengers !== null ? each.passengers : "N/A";
    const stops = Array.isArray(each.stops) ? each.stops.join(", ") : each.stops !== undefined && each.stops !== null ? each.stops : "N/A";
    const ownedBy = each.ownedBy ?? "N/A";
    const isElectric = each.isElectric === true ? "Ja" : "Nej";
    const isTandem = each.isTandem === true ? "Ja" : "Nej";

    tbodyPointer.innerHTML += `<tr>
      <td>${type}</td>
      <td>${fuel}</td>
      <td>${passengers}</td>
      <td>${stops}</td>
      <td>${ownedBy}</td>
      <td>${isElectric}</td>
      <td>${isTandem}</td>
    </tr>`;
  });
}
