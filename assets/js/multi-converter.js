const units = {

length: {
"Meter": 1,
"Kilometer": 1000,
"Centimeter": 0.01,
"Millimeter": 0.001,
"Mile": 1609.344,
"Yard": 0.9144,
"Foot": 0.3048,
"Inch": 0.0254
},

mass: {
"Kilogram": 1,
"Gram": 0.001,
"Milligram": 0.000001,
"Ton": 1000,
"Pound": 0.45359237,
"Ounce": 0.0283495231
},

volume: {
"Liter": 1,
"Milliliter": 0.001,
"Cubic Meter": 1000,
"Gallon": 3.78541,
"Quart": 0.946353,
"Pint": 0.473176,
"Cup": 0.236588
}

};

const category = document.getElementById("category");
const fromUnit = document.getElementById("from-unit");
const toUnit = document.getElementById("to-unit");
const amount = document.getElementById("amount");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convert-btn");

function loadUnits() {

const selected = category.value;

fromUnit.innerHTML = "";
toUnit.innerHTML = "";

for (let unit in units[selected]) {

const option1 = document.createElement("option");
option1.value = unit;
option1.textContent = unit;
fromUnit.appendChild(option1);

const option2 = document.createElement("option");
option2.value = unit;
option2.textContent = unit;
toUnit.appendChild(option2);

}

}

function convert() {

const value = parseFloat(amount.value);

if (isNaN(value)) {
result.innerHTML = "Please enter a valid number.";
return;
}

const selected = category.value;

const from = fromUnit.value;
const to = toUnit.value;

const baseValue = value * units[selected][from];
const converted = baseValue / units[selected][to];

result.innerHTML =
`${value} ${from} = <strong>${converted.toFixed(6)}</strong> ${to}`;

}

category.addEventListener("change", loadUnits);

convertBtn.addEventListener("click", convert);

window.addEventListener("load", loadUnits);
