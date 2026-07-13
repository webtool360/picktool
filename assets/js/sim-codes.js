/* PART 1 OF 5 - CORE DATABASE & MAJOR OPERATORS */

const simDatabase = {
    jazz: {
        service: [
            { title: "Balance Check", code: "*111#", detail: "Check current balance" },
            { title: "Advance Balance", code: "*112#", detail: "Get emergency loan" },
            { title: "Share Balance", code: "*100*Number*Amount#", detail: "Share balance with friends" },
            { title: "My Number", code: "*99#", detail: "Check your own SIM number" },
            { title: "SIM Lagao", code: "*551#", detail: "Check SIM lagao offer status" },
            { title: "Call Forwarding", code: "*21*Number#", detail: "Forward incoming calls" },
            { title: "Remaining Minutes", code: "*110#", detail: "View bundle minutes" }
        ],
        package: [
            { title: "Daily Super", code: "*212#", detail: "Daily calls and data" },
            { title: "Weekly All-in-One", code: "*700#", detail: "Weekly bundles" },
            { title: "Monthly Data", code: "*117*30#", detail: "30-day data package" },
            { title: "Hourly Bundle", code: "*987#", detail: "60 mins talk time" },
            { title: "Super Ghanta", code: "*638#", detail: "1-hour internet" },
            { title: "WhatsApp Offer", code: "*225#", detail: "Daily WhatsApp bundle" },
            { title: "Night Bundle", code: "*117*12#", detail: "12 AM to 6 AM data" }
        ],
        vas: [
            { title: "Jazz Tune", code: "*230#", detail: "Set your ringback tune" },
            { title: "Missed Call Alert", code: "*180#", detail: "Get SMS for missed calls" },
            { title: "Call Block", code: "*168#", detail: "Block unwanted calls" },
            { title: "Jazz TV", code: "*117*80#", detail: "Stream TV on mobile" }
        ]
    },
    telenor: {
        service: [
            { title: "Balance Check", code: "*444#", detail: "Check your balance" },
            { title: "Advance Balance", code: "*0#", detail: "Get emergency balance" },
            { title: "My Number", code: "*710#", detail: "Check your number" },
            { title: "Internet Settings", code: "*131#", detail: "Get internet configuration" },
            { title: "Call Waiting", code: "*43#", detail: "Enable call waiting" },
            { title: "Balance Share", code: "*1*1*Number*Amount#", detail: "Transfer balance" }
        ],
        package: [
            { title: "Daily Hybrid", code: "*345*001#", detail: "Daily calls/data" },
            { title: "Weekly Internet", code: "*345*144#", detail: "7-day data package" },
            { title: "Monthly Starter", code: "*345*24#", detail: "Basic monthly offer" },
            { title: "Good Time Offer", code: "*345*20#", detail: "Hourly offer" },
            { title: "Mega Internet", code: "*345*131#", detail: "Heavy data usage" },
            { title: "3 Day Bundle", code: "*345*213#", detail: "3 days validity bundle" }
        ],
        vas: [
            { title: "Telenor Tune", code: "*300#", detail: "Manage tunes" },
            { title: "Call Forward", code: "*21*Number#", detail: "Diversion settings" },
            { title: "Find a Friend", code: "*121#", detail: "Locate friend location" }
        ]
    },
    /* ... More operators continue in Part 2 ... */
             /* PART 2 OF 5 - ZONG AND UFONE DATA */

    zong: {
        service: [
            { title: "Balance Check", code: "*222#", detail: "Check balance" },
            { title: "Advance Balance", code: "*911#", detail: "Get emergency loan" },
            { title: "My Number", code: "*8#", detail: "Check your SIM number" },
            { title: "Balance Share", code: "*828#", detail: "Share balance" },
            { title: "Call Forward", code: "*21*Number#", detail: "Forward incoming calls" },
            { title: "SMS Settings", code: "*700#", detail: "SMS bundle info" },
            { title: "Data Settings", code: "*6464#", detail: "Internet configurations" },
            { title: "Remaining SMS", code: "*102#", detail: "Check remaining SMS" },
            { title: "Balance Recharge", code: "*101*PIN#", detail: "Recharge card" }
        ],
        package: [
            { title: "Daily Data", code: "*6464#", detail: "Daily bundles menu" },
            { title: "Weekly SMS", code: "*700#", detail: "Weekly text bundle" },
            { title: "Monthly Mini", code: "*6464#", detail: "Monthly basic package" },
            { title: "Super Weekly", code: "*20#", detail: "Unlimited calls/data" },
            { title: "Night Offer", code: "*6464#", detail: "Late night internet" },
            { title: "Social Offer", code: "*6464#", detail: "Facebook/WhatsApp bundle" },
            { title: "Zong Full", code: "*6464#", detail: "All-in-one bundle" },
            { title: "Student Offer", code: "*6464#", detail: "Discounted rates" }
        ],
        vas: [
            { title: "Zong Tune", code: "*230#", detail: "Set your caller tune" },
            { title: "Missed Call Alert", code: "*6464#", detail: "Subscribe to alerts" },
            { title: "Caller ID", code: "*31#", detail: "Enable caller ID" },
            { title: "Conference Call", code: "Menu", detail: "Enable via settings" }
        ]
    },
    ufone: {
        service: [
            { title: "Balance Check", code: "*124#", detail: "Check balance" },
            { title: "Advance Balance", code: "*456#", detail: "Get emergency loan" },
            { title: "My Number", code: "*780*3#", detail: "Check your SIM number" },
            { title: "Balance Share", code: "*828#", detail: "Transfer balance" },
            { title: "Call Forward", code: "*21*Number#", detail: "Call forwarding" },
            { title: "Internet Settings", code: "*131#", detail: "Get settings" },
            { title: "Balance Recharge", code: "*123*PIN#", detail: "Card recharge" }
        ],
        package: [
            { title: "Power Hour", code: "*99#", detail: "Hourly data/calls" },
            { title: "Weekly Internet", code: "*7701#", detail: "Weekly data bucket" },
            { title: "Monthly Data", code: "*3#", detail: "Monthly data bundle" },
            { title: "Daily Package", code: "*888#", detail: "All-in-one daily" },
            { title: "Super Card", code: "*555#", detail: "Super card subscription" },
            { title: "U-Load", code: "*123#", detail: "Load status" },
            { title: "3-Day Offer", code: "*3350#", detail: "3-day validity" }
        ],
        vas: [
            { title: "Caller Tune", code: "*666#", detail: "Manage caller tunes" },
            { title: "Missed Call Alert", code: "*180#", detail: "Activate alerts" },
            { title: "Call Block", code: "*800#", detail: "Block unwanted callers" },
            { title: "Ufone Radio", code: "*111#", detail: "Access radio service" }
        ]
    },
    /* ... More data continues in Part 3 ... */
             /* PART 3 OF 5 - SCOM (AJK & GB) DATA & CLOSING DATABASE */

    scom: {
        service: [
            { title: "Balance Check", code: "*125#", detail: "Check current balance" },
            { title: "Advance Balance", code: "*135#", detail: "Get emergency loan" },
            { title: "My Number", code: "*789#", detail: "Check your SIM number" },
            { title: "Balance Share", code: "*128*Amount*Number#", detail: "Share balance" },
            { title: "Card Recharge", code: "*126*PIN#", detail: "Load scratch card" },
            { title: "Check Remaining MBs", code: "*125#", detail: "View internet usage" }
        ],
        package: [
            { title: "Daily Internet", code: "*725#", detail: "Daily data bundle" },
            { title: "Weekly Internet", code: "*70#", detail: "Weekly data bucket" },
            { title: "Monthly Data", code: "*735#", detail: "Monthly data bundle" },
            { title: "Kashmir Offer", code: "*77#", detail: "Special AJK call rates" },
            { title: "Student Package", code: "*112#", detail: "Discounted student bundle" }
        ],
        vas: [
            { title: "Missed Call Alert", code: "*741#", detail: "Activate missed call alerts" },
            { title: "Caller Tune", code: "*111#", detail: "Set smart tune" },
            { title: "Help Line", code: "111", detail: "Call customer support" }
        ]
    }
}; // <-- THIS BRACKET FINISHES THE simDatabase OBJECT!
/* PART 4 OF 5 - LOGIC SCRIPT */

function showCodes() {
    const provider = document.getElementById('provider').value;
    const category = document.getElementById('category').value;
    const resultDiv = document.getElementById('results');
    
    // Clear previous results
    resultDiv.innerHTML = "";
    
    // Only proceed if user has selected both fields
    if (provider && category) {
        // Validate if the provider and category exist in our simDatabase
        if (simDatabase[provider] && simDatabase[provider][category]) {
            const codes = simDatabase[provider][category];
            
            // Add a title to the results
            resultDiv.innerHTML = `<h3 style="color:#3b5998; margin-bottom:15px; text-transform:capitalize;">${provider} ${category} Codes</h3>`;
            
            // Loop through the data and create the list items
            codes.forEach(item => {
                resultDiv.innerHTML += `
                    <div class="code-item">
                        <div style="display:flex; justify-content:space-between;">
                            <strong>${item.title}</strong>
                            <span style="color:#3b5998; font-weight:bold;">${item.code}</span>
                        </div>
                        <small style="color:#666;">${item.detail}</small>
                    </div>`;
            });
        } else {
            resultDiv.innerHTML = "<p>No codes available for this selection yet.</p>";
        }
    } else {
        resultDiv.innerHTML = "<p style='color:#777;'>Please select both a Provider and a Category to see results.</p>";
    }
}
