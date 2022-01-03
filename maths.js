$(document).ready(function () {
  function calculateOutputs() {
    const employees = $("#numberOfEmployees").val();
    const salary = $("#averageCompanySalary").val();
    const rate = $("#annualAbsenceRate").val();
    if (employees && salary && rate) {
      if (rate <= 100) {
        // work out the correct values for the outputs.
        const yearOutput = (employees * salary * rate) / 100;
        const monthOutput = yearOutput / 12;
        $("#1Month").html(`£${monthOutput.toFixed(2)}`);
        $("#1Year").html(`£${yearOutput.toFixed(2)}`);
      } else {
        // set the outputs to £0.00
        $("#1Month").html("£0.00");
        $("#1Year").html("£0.00");
        alert(
          "Please enter a number between 0 and 100 into Annual Absence Rate."
        );
      }
    } else {
      // set the outputs to £0.00
      $("#1Month").html("£0.00");
      $("#1Year").html("£0.00");
    }
  }

  $("#numberOfEmployees, #averageCompanySalary, #annualAbsenceRate").keyup(
    function () {
      calculateOutputs();
    }
  );
});
