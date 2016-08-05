// module your team is building will accept two inputs: 
$(document).ready(function(){
//the total amount of the sale and amount tendered by the customer. 
var calcButton = document.getElementById("btnCalculate"); //weight calcuating button

$("#btnCalculate").click(function() { // when this element is clicked call this function, JavaScript callback, one function calling another function.

	// Put variables as whole numbers because the decimals get confused as dots in the program.
	// We want to make sure that all of our operations are integers, whole numbers so the remainders are droped and moved to the next level in the program to determine which coin is to be generated.
	var DOLLARS = 100;
	var QUARTERS = 25;
	var DIMES = 10;
	var NICKELS = 5;
	var PENNIES = 1;
	
	// STEP #1: Convert variables into consistent units measurements.
	// since all over our coin variables are in full amount of cents instead of a fraction of dollar, we need to multiply user inputs by 100 (cents).
	//By eleminating the decimal we are keeping our units consistent so the math can be accurate. MUST ALWAYS KEEP CONSISTENT UNIT...MAKES CENTS.

	var salesAmount = parseFloat($("#saleInput").val()); // takes the salesInput by user, converts from a string to a floating point number then stored it in salesAmount variable.

	// Total sales amount entered by user
	//Took the value from the customer amount input and converted from a string (number) to a integer floating point number then subtracted that amount by the salesAmount.
	var customerAmount = parseFloat($("#customerInput").val());

	//parseInt the different between customerAmount and saleAmount value input mutiplied by 100 and assign that value to total_change variable.
	var total_change = parseInt((customerAmount - salesAmount) * 100);
	


	/***********EXCEPTION HANDLER LOOPS**********/

	//check user input validation to make sure a number is chosen.
	if (isNaN(salesAmount) || isNaN(total_change) || (salesAmount < 0) || (customerAmount < 0)) {
		alert("Please enter a valid whole number to calculate change.");
		return;		
	}

	if (customerAmount.toFixed(2) != customerAmount) {
		alert("The customer's amount can only have 2 decimal places");
		return;
	}

	//Taking sales amount, cutting off 2 decimals and seeing if it is equal to the original salesAmount, which should only be different if there is more than 2 decimal places.
	//Therefore if it is not equal then we know there is more than 2 decimal places.
	//Any time there is more than 2 decimal places the toFixed amount is not equal to the original amount and we alert the user.
	if (salesAmount.toFixed(2) != salesAmount) {
		alert("The sales's amount can only have 2 decimal places");
		return;
	}


	/***********DOLLARS**********/

	//Total amount given by customer entered by user divided by DOLLARS 100 variable.
	//Then took that quotient and converted it into an Integer.
	//Assigned that whole number amount to amount_dollars, then did a jQuery call to the id="dollarAmount" and took that text and printed to that html text field.
	var amount_dollars = parseInt(total_change / DOLLARS);
	$("#dollarAmount").text("$" + amount_dollars);


	/***********QUARTERS**********/	

	//Override the original total_change variable value with a the remainder since the original value is no longer needed.
	total_change = total_change % DOLLARS;

	//Took the total_change value (remainder) divided by 25 (quarters) then converted into an integer.
	var amount_quarters = parseInt(total_change / QUARTERS);
	$("#quarterAmount").text(amount_quarters);  //Printed out the amount_quarters into the p tag's text field.
	

	/***********DIMES**********/	

	//Override the original total_change variable value with a the remainder since the original value is no longer needed.
	total_change = total_change % QUARTERS;

	//Took the total_change value (remainder) divided by 10 (dimes) then converted into an integer.
	var amount_dimes = parseInt(total_change / DIMES);
	$("#dimeAmount").text(amount_dimes);  //Printed out the amount_dimes into the p tag's text field.


	/***********NICKELS**********/	

	//Override the original total_change variable value with a the remainder since the original value is no longer needed.
	total_change = total_change % DIMES;

	//Took the total_change value (remainder) divided by 5 (nickels) then converted into an integer.
	var amount_nickels = parseInt(total_change / NICKELS);
	$("#nickelAmount").text(amount_nickels);  //Printed out the amount_nickels into the p tag's text field.


	/***********PENNIES**********/	

	//Override the original total_change variable value with a the remainder since the original value is no longer needed.
	total_change = total_change % NICKELS;

	//Took the total_change value (remainder) divided by 1 (pennies) then converted into an integer.
	var amount_pennies = parseInt(total_change); //Took off  divide by / PENNIES because its the same as divide by 1 or itself (value).
	$("#pennyAmount").text(amount_pennies);  //Printed out the amount_pennies into the p tag's text field.

	});
});