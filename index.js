class Patient {
  savePatientDetails(firstName, lastName, age, temp, address, syptoms) {
    const currentPatientJSON = localStorage.getItem("patient");
    let patientArray = JSON.parse(currentPatientJSON) || [];

    const newPatient = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      temp: temp,
      address: address,
      symptoms: syptoms,
    };
    const newPatientArray = [...patientArray, newPatient];

    localStorage.setItem("patient", JSON.stringify(newPatientArray));
  }

  getAllPatients() {
    let allpatients;

    if (localStorage.getItem("patient") == null) {
      allpatients = [];
    } else {
      allpatients = JSON.parse(localStorage.getItem("patient"));
    }

    return allpatients;
  }
}

// Init Class Patient
const patient = new Patient();

// Saving the patient details
document.addEventListener("submit", function (e) {
  e.preventDefault();

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let age = document.getElementById("age").value;
  let address = document.getElementById("address").value;
  let temp = document.getElementById("temp").value;
  let symptoms = document.getElementById("symptoms").value;
  patient.savePatientDetails(firstName, lastName, age, temp, address, symptoms);

  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("age").value = "";
  document.getElementById("address").value = "";
  document.getElementById("temp").value = "";
  document.getElementById("symptoms").value = "";
});

//Display the lists
window.addEventListener("DOMContentLoaded", (event) => {
  const patients = patient.getAllPatients();
  const patientList = document.getElementById("patients-list");
  patientList.innerHTML = "";

  patients.forEach((patient) => {
    const row = document.createElement("tr");

    row.innerHTML = `
          <td>${patient.firstName}</td>
          <td>${patient.lastName}</td>
          <td>${patient.address}</td>
          <td>${patient.age}</td>
          <td>${patient.temp}</td>
          <td>${patient.symptoms}</td>
          <td>X</td>
          `;
    patientList.appendChild(row);
  });
});
