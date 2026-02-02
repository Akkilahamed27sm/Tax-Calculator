function calculateTax() {

    // ---------- INPUT ----------
    const totalIncome = +document.getElementById("salary").value || 0;

    let taxableIncome = totalIncome;

    // ---------- SLAB TAX (AY 2026-27) ----------
    let tax = 0;

    if (taxableIncome <= 400000) tax = 0;

    else if (taxableIncome <= 800000)
        tax = (taxableIncome - 400000) * 0.05;

    else if (taxableIncome <= 1200000)
        tax = 20000 + (taxableIncome - 800000) * 0.10;

    else if (taxableIncome <= 1600000)
        tax = 60000 + (taxableIncome - 1200000) * 0.15;

    else if (taxableIncome <= 2000000)
        tax = 120000 + (taxableIncome - 1600000) * 0.20;

    else if (taxableIncome <= 2400000)
        tax = 200000 + (taxableIncome - 2000000) * 0.25;

    else
        tax = 300000 + (taxableIncome - 2400000) * 0.30;

    tax = Math.round(tax);

    // ---------- SECTION 87A ----------
    let rebate87A = 0;

    if (taxableIncome <= 1200000) {
        rebate87A = tax;
        tax = 0;
    }

    // ---------- SURCHARGE (>50L) ----------
    let surcharge = 0;

    if (tax > 0) {
        if (taxableIncome > 5000000 && taxableIncome <= 10000000)
            surcharge = tax * 0.10;
        else if (taxableIncome > 10000000 && taxableIncome <= 20000000)
            surcharge = tax * 0.15;
        else if (taxableIncome > 20000000 && taxableIncome <= 50000000)
            surcharge = tax * 0.25;
        else if (taxableIncome > 50000000)
            surcharge = tax * 0.37;
    }

    surcharge = Math.round(surcharge);

    // ---------- CESS ----------
    const cess = Math.round((tax + surcharge) * 0.04);
    const totalTax = tax + surcharge + cess;

    // ---------- RESULT ----------
    document.getElementById("result").innerHTML = `
        <h3>Tax Computation Summary</h3>

        <p><strong>Total Income:</strong> ₹${taxableIncome.toLocaleString()}</p>

        ${
          rebate87A > 0
            ? `<p style="color:green"><strong>Section 87A Rebate:</strong> ₹${rebate87A.toLocaleString()}</p>`
            : ``
        }

        <p><strong>Income Tax:</strong> ₹${tax.toLocaleString()}</p>
        <p><strong>Surcharge:</strong> ₹${surcharge.toLocaleString()}</p>
        <p><strong>Cess (4%):</strong> ₹${cess.toLocaleString()}</p>

        <hr>

        <h3>Total Tax Payable: ₹${totalTax.toLocaleString()}</h3>
    `;
}

function emailReport() {
    alert("Email integration can be added later.");
}