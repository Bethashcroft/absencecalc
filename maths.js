/* 
  Event listener for when the document / page is ready and loaded in the browser
  When this happens all off the functions and code inside of the function here will be ready and or run.
*/
$(document).ready(function () {
  // Function to calculate the outputs from the 3 values
  function calculateOutputs() {
    // get the value from the input with the id "numberOfEmployees"
    const employees = $("#numberOfEmployees").val();
    // get the value from the input with the id "averageCompanySalary"
    const salary = $("#averageCompanySalary").val();
    // get the value from the input with the id "annualAbsenceRate"
    const rate = $("#annualAbsenceRate").val();
    // If all the three values are present (not 0 / false / null / undefined)
    if (employees && salary && rate) {
      // make sure the rate is less than or equal to 100
      if (rate <= 100) {
        // work out the correct values for the outputs.
        // work out the value that would be the cost for a year
        const yearOutput = (employees * salary * rate) / 100;
        // work out the value for a month (year divided by 12)
        const monthOutput = yearOutput / 12;
        // set the month and year values in the html inside of the elements with the specific IDs
        $("#1Month").html(`£${monthOutput.toFixed(2)}`);
        $("#1Year").html(`£${yearOutput.toFixed(2)}`);
        // if the rate is more than 100
      } else {
        // set the outputs to £0.00
        $("#1Month").html("£0.00");
        $("#1Year").html("£0.00");
        // Show a browser alert with a message
        alert(
          "Please enter a number between 0 and 100 into Annual Absence Rate."
        );
      }
      // if all the values are not present...
    } else {
      // set the outputs to £0.00
      $("#1Month").html("£0.00");
      $("#1Year").html("£0.00");
    }
  }

  // event listener for when a key is released when the user is typing in any of the elements with the three ids listed below
  $("#numberOfEmployees, #averageCompanySalary, #annualAbsenceRate").keyup(
    function () {
      // run this function whenever this happens.
      calculateOutputs();
    }
  );
});
