/*  Wizard */
jQuery(function ($) {
  "use strict";
  //$("form#wrapped").attr("action", "send_email_1.php");
  $("#wizard_container")
    .wizard({
      stepsWrapper: "#wrapped",
      submit: ".submit",
      unidirectional: false,
      beforeSelect: function (event, state) {
        // if ($("input#website").val().length != 0) {
        //   return false;
        // } else {
        //     console.log($("input#email").val());
        //     console.log("dans le premier cas d'erreur");
        //     return false
        // }
        if (!state.isMovingForward) return true;
        var inputs = $(this).wizard("state").step.find(":input");
        return !inputs.length || !!inputs.valid();
      },
    })
    .validate({
      errorPlacement: function (error, element) {
        if (element.is(":radio") || element.is(":checkbox")) {
          error.insertBefore(element.next());
        } else {
          error.insertAfter(element);
        }
      },
    });
  //  progress bar
  $("#progressbar").progressbar();
  $("#wizard_container").wizard({
    afterSelect: function (event, state) {
      $("#progressbar").progressbar("value", state.percentComplete);
      $("#location").text(
        "" + state.stepsComplete + " of " + state.stepsPossible + " completed"
      );
    },
  });
});

$("#wizard_container").wizard({
  transitions: {
    branchtype: function ($step, action) {
      var branch = $step.find(":checked").val();
      if (!branch) {
        $("form").valid();
      }
      return branch;
    },
  },
});

// Input name and email value
function getVals(formControl, controlType) {
  switch (controlType) {
    case "first-name_field":
      // Get the value for input
      var value = $(formControl).val();
      $("#first-name_field").text(value);
      break;

    case "last-name_field":
      // Get the value for input
      var value = $(formControl).val();
      $("#last-name_field").text(value);
      break;

    case "email_field":
      // Get the value for input
      var value = $(formControl).val();
      $("#email_field").text(value);
      break;

    case "profession_field":
      // Get the value for input
      var value = $(formControl).val();
      $("#profession_field").text(value);
      break;

    case "phone_field":
      // Get the value for phone input
      var value = $(formControl).val();
      $("#phone_field").text(value);
      break;

    case "visit_date":
      // Get the value for date input
      var value = $(formControl).val();
      $("#visit_date").text(value);
      break;

    case "visit_duration_field":
      // Get the value for date input
      var value = $(formControl).val();
      $("#visit_duration_field").text(value);
      break;

    case "visit_duration_other":
      // Get the value for textarea when "Autre" is selected
      var value = $(formControl).val();
      $("#visit_duration_field").text(value);
      break;

    case "exampleRadios1":
      // Get the value of the first radio button
      if ($(formControl).is(":checked")) {
        var value = $(formControl).val();
        $("#visit_duration_field").text(value);
      }
      break;

    case "exampleRadios2":
      // Get the value of the second radio button
      if ($(formControl).is(":checked")) {
        var value = $(formControl).val();
        $("#visit_duration_field").text(value);
      }
      break;

    case "exampleRadios3":
      // Get the value of the third radio button
      if ($(formControl).is(":checked")) {
        var value = $(formControl).val();
        $("#visit_duration_field").text(value);
      }
      break;

    case "reason_field":
      // Get the value for date input
      var value = $(formControl).val();
      $("#reason_field").text(value);
      break;

    case "reason_other_field":
      // Get the value for date input
      var value = $(formControl).val();
      $("#reason_other_field").text(value);
      break;

    case "heard_about_field":
      // Get the value for phone input
      var value = $(formControl).val();
      $("#heard_about_field").text(value);
      break;

    case "heard_about__other_field":
      // Get the value for phone input
      var value = $(formControl).val();
      $("#heard_about__other_field").text(value);
      break;
  }
}

const autreRaison = document.querySelector("#autre-raison");
const reason = document.querySelector("#reason");

const autreEntendu = document.querySelector("#autre-entendu");
const heardAbout = document.querySelector("#heard_about");

autreRaison.style.display = "none";
autreEntendu.style.display = "none";

// Ajoutez un gestionnaire d'événement pour détecter les changements dans le menu déroulant
reason.addEventListener("change", function () {
  if (reason.value === "Autre") {
    // Si l'option "Autre" est sélectionnée, affichez le champ de texte
    autreRaison.style.display = "block";
    autreRaison.setAttribute("required", true);
  } else {
    // Sinon, masquez le champ de texte
    autreRaison.style.display = "none";
    autreRaison.removeAttribute("required");
  }
});
heardAbout.addEventListener("change", function () {
  if (heardAbout.value === "Autre") {
    // Si l'option "Autre" est sélectionnée, affichez le champ de texte
    autreEntendu.style.display = "block";
    autreEntendu.setAttribute("required", "required");
  } else {
    // Sinon, masquez le champ de texte
    autreEntendu.style.display = "none";
    autreEntendu.removeAttribute("required");
  }
});

//RADIO AUTRE
// Sélectionnez les boutons radio de la durée de visite
const radioButtons = document.querySelectorAll('input[name="exampleRadios"]');
const autre = document.querySelector(".autre");
// Sélectionnez le champ de texte visit_duration_other
const visitDurationOther = document.getElementById("duration_visit");
visitDurationOther.style.display = "none";
autre.style.display = "none";
// Ajoutez un gestionnaire d'événements à chaque bouton radio
radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener("change", function () {
    // Vérifiez si l'option "Autre" est sélectionnée
    if (radioButton.id === "exampleRadios_Autre") {
      // Affichez le champ de texte visit_duration_other
      visitDurationOther.style.display = "block";
      visitDurationOther.setAttribute("required", true);
      autre.style.display = "block";
    } else {
      // Masquez le champ de texte visit_duration_other
      visitDurationOther.style.display = "none";
      visitDurationOther.removeAttribute("required");
      autre.style.display = "none";
    }
  });
});
