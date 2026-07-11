function generatePasswords() {
    const len = Math.min(Math.max(document.getElementById("length").value, 6), 26);
    const type = document.getElementById("type").value;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    const sets = {
        digit: "0123456789",
        alpha: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        special: "!@#$%^&*()_+[]{}|;:,.<>?"
    };

    let charset = "";
    if (type === "digit") charset = sets.digit;
    else if (type === "alpha") charset = sets.alpha;
    else if (type === "special") charset = sets.special;
    else charset = sets.digit + sets.alpha + sets.special;

    for (let i = 0; i < 3; i++) {
        let password = "";
        for (let j = 0; j < len; j++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        resultDiv.innerHTML += `<p>${password}</p>`;
    }
}
