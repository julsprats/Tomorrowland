
// Get the radio buttons
const dayPassRadio = document.querySelector("#dayPass");
const fullMadnessPassRadio = document.querySelector("#fullMadnessPass");

// Get the credit card input element
const creditCardInput = document.querySelector("#cardInput");

// Get Pay Now Button
const payNowButton = document.querySelector("#payNowButton");

// Get Order Summary Section
const orderSummary = document.querySelector("#orderSummary");

const dayPassVal = 1100.00;
const fullMadnessPassVal = 3000.00;

function payNowClicked() {
    // Clear the order summary section and the input fields
    orderSummary.innerHTML = '';

    const creditCardValue = creditCardInput.value;

    // Get dayPassQuantity and fullMadnessPassQuantity 
    let dayPassQuantity = parseInt(document.querySelector("#dayPassQuantity").value,10);
    let fullMadnessPassQuantity = parseInt(document.querySelector("#fullMadnessPassQuantity").value, 10);
    //console.log("creditCardValue:", creditCardValue);
    //console.log("dayPassQuantity:", dayPassQuantity);
    //console.log("fullMadnessPassQuantity:", fullMadnessPassQuantity);
    //console.log("dayPassRadio checked:", dayPassRadio.checked);
    //console.log("fullMadnessPassRadio checked:", fullMadnessPassRadio.checked); 

   //If creditCardInput.toString().length is >= 6 && dayPassQuantity || fullMadnessPassQuantity >= 1
    //Append Order Summary Section
    if (dayPassQuantity >= 1 || fullMadnessPassQuantity >= 1 ){
        createOrderSummary(dayPassQuantity,fullMadnessPassQuantity);
        
    }
    else {
     //Append Error Message 
     const errorMessageDiv = document.createElement("div");
     errorMessageDiv.innerHTML = `
     <div class = "error-mesage">
     You must select a minimum of 1 DayPass or Full Madness Pass ticket
     `;
     orderSummary.appendChild(errorMessageDiv);

    }

}


function createOrderSummary(dayPassQuantity,fullMadnessPassQuantity) {
    // Create the orderSummaryTable element here
    const orderSummaryTable = document.createElement("table");
    let subtotal = 0;
    let tax = 0;
    let finalPrice = 0;

    
    //If DayPass Radio is checked
    if (dayPassRadio.checked && dayPassQuantity >= 1 ){
        // total =  daypass quantity * daypass price
        subtotal = (dayPassQuantity * dayPassVal).toFixed(2);

        // tax = multiply total by 13% 
         tax = (subtotal*0.13).toFixed(2);

        // finalPrice = subtotal+tax
         finalPrice = (Number(subtotal) + Number(tax)).toFixed(2);
        
        // append number of tickets to html
        orderSummaryTable.innerHTML = `
        <h3>Order Summary</h3>
        <tabel>
        <tr>
            <th class="tableheading">Number of tickets</th>
            <th class="tabledata">${dayPassQuantity}</th>
        </tr>
        <tr>
            <th class="tableheading">Price per ticket</th>
            <th class="tabledata">$${dayPassVal.toFixed(2)}</th>
        </tr>
        <tr>
            <th class="tableheading">Subtotal</th>
            <th class="tabledata">$${subtotal}</th>
        </tr>
        <tr class="tax">
            <th class="tableheading">Tax(13%)</th>
            <th class="tabledata">$${tax}</th>
        </tr>
        <tr>
            <th class="tableheading"><b>Final Price</b></th>
            <th class="tabledata">$${finalPrice}</th>
        </tr>
        </table>
        
        `;
        //append orderSummary table to orderSummary section
        orderSummary.appendChild(orderSummaryTable);
        
    }


    // if Madness pass radio is checked
            
    if (fullMadnessPassRadio.checked && fullMadnessPassQuantity >= 1){
        // total =  daypass quantity * daypass price
        subtotal = (fullMadnessPassQuantity * fullMadnessPassVal).toFixed(2);

        // tax = multiply total by 13% 
         tax = (subtotal*0.13).toFixed(2);

        // finalPrice = subtotal+tax
         finalPrice = (Number(subtotal) + Number(tax)).toFixed(2);
        
        // append number of tickets to html
        orderSummaryTable.innerHTML = `
        <h3>Order Summary</h3>
        <tr>
            <th>Number of tickets</th>
            <th>${fullMadnessPassQuantity}</th>
        </tr>
        <tr>
            <th>Price per ticket</th>
            <th>$${fullMadnessPassVal}</th>
        </tr>
        <tr>
            <th>Subtotal</th>
            <th>$${subtotal}</th>
        </tr>
        <tr>
            <th>Tax(13%)</th>
            <th>$${tax}</th>
        </tr>
        <hr>
        <tr>
            <th><b>Final Price</b></th>
            <th>$${finalPrice}</th>
        </tr>
        `;
        //append orderSummary table to orderSummary section
        orderSummary.appendChild(orderSummaryTable);
    }




}


//Need to restrict user to be able to enter quantity in a field when the respective radio button is checked
