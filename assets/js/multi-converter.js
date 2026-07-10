document.addEventListener("DOMContentLoaded", function() {
const categorySelect = document.getElementById("category");
const fromUnitSelect = document.getElementById("from-unit");
const toUnitSelect = document.getElementById("to-unit");
const convertBtn = document.getElementById("convert-btn");
const resultDiv = document.getElementById("result");
const units = {
length: {
m: { name: "Meters", base: 1 },
km: { name: "Kilometers", base: 1000 },
cm: { name: "Centimeters", base: 0.01 },
mm: { name: "Millimeters", base: 0.001 },
in: { name: "Inches", base: 0.0254 },
ft: { name: "Feet", base: 0.3048 }
},
mass: {
kg: { name: "Kilograms", base: 1 },
g: { name: "Grams", base: 0.001 },
mg: { name: "Milligrams", base: 0.000001 },
lb: { name: "Pounds", base: 0.453592 },
oz: { name: "Ounces", base: 0.0283495 }
},
volume: {
L: { name: "Liters", base: 1 },
mL: { name: "Milliliters", base: 0.001 },
m3: { name: "Cubic Meters", base: 1000 },
gal: { name: "Gallons (US)", base: 3.78541 }
}
};
function updateUnits() {
const category = categorySelect.value;
const selectedUnits = units[category];
fromUnitSelect.innerHTML = "";
toUnitSelect.innerHTML = "";
for (const unit in selectedUnits) {
fromUnitSelect.innerHTML += <option value="${unit}">${selectedUnits[unit].name}</option>;
toUnitSelect.innerHTML += <option value="${unit}">${selectedUnits[unit].name}</option>;
}
}
categorySelect.addEventListener("change", updateUnits);
updateUnits();
convertBtn.addEventListener("click", function() {
const category = categorySelect.value;
const amount = parseFloat(document.getElementById("amount").value);
const fromUnit = fromUnitSelect.value;
const toUnit = toUnitSelect.value;
if (isNaN(amount)) {
resultDiv.innerHTML = "Please enter a valid number.";
return;
}
const baseValue = amount * units[category][fromUnit].base;
const result = baseValue / units[category][toUnit].base;
resultDiv.innerHTML = ${amount} ${units[category][fromUnit].name} = ${result} ${units[category][toUnit].name};
});
});
