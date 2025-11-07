const form = document.querySelector("form");

const OperatorOutput = document.querySelector("#Operator_output");
const FactionOutput = document.querySelector("#Faction_output");
const ContactOutput = document.querySelector("#Contact_output");
const OverrideOutput = document.querySelector("#Override_output");
const TermsOutput = document.querySelector("#Terms_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();
  // 1. Saml værdierne fra formularen
  const formData = new FormData(form);

  const operator = formData.get("operator_id");

  const faction = formData.get("faction");

  const contact = formData.get("contact_channel");

  const override = formData.get("override_key");

  const accept = formData.get("accept_terms");

  // 2. Vis værdierne i de rigtige output-felter
  OperatorOutput.textContent = operator;
  FactionOutput.textContent = faction;
  ContactOutput.textContent = contact;
  OverrideOutput.textContent = override;
  TermsOutput.textContent = accept;

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
