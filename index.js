
  console.log(uuid); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'



let clearForm = () => {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("age").value = "";
  document.getElementById("address").value = "";
  document.getElementById("temp").value = "";
  document.getElementById("symptoms").value = "";
}


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

    console.log(newPatient, 'New patoemt creatred')
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
  getOnePatient(firstName) {
    let allPatients = this.getAllPatients();

    for (let i = 0; i < allPatients.length; i++) {
      if (allPatients[i].firstName === firstName) {
        console.log(allPatients[i], firstName);

        return allPatients[i];
      }
    }
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

  clearForm()
  window.location.href = "/index.html";
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
          <td class="button"><a href="/edit.html">Update!</a></td>
          `;
    patientList.appendChild(row);
  });


});

//When the Edit button is clicked

// const clickEditButton = (firstName) => {

//   let patient = new Patient;
//   let selectedPatient = patient.getOnePatient(firstName);

//   console.log(selectedPatient, 'Selected item');

//   document.getElementById("edit-firstName").value = selectedPatient.firstName;
//   document.getElementById("edit-lastName").value = selectedPatient.lastName;
//   document.getElementById("edit-age").value = selectedPatient.age;
//   document.getElementById("edit-address").value = selectedPatient.address;
//   document.getElementById("edit-temp").value = selectedPatient.temp;
//   document.getElementById("edit-symptoms").value = selectedPatient.symptoms;


//   // Get the modal
//   let modal = document.getElementById("myModal");

//   modal.style.display = "block";

//   //Handle the submit

//   let submitEditForm = document.getElementById("modalBtn");

//   submitEditForm.onclick = function (){
//     console.log('button clicked')
//     let updatedFirstName = document.getElementById("edit-firstName").value;
//     let updatedlastName = document.getElementById("edit-lastName").value;
//     let updatedage = document.getElementById("edit-age").value;
//     let updatedaddress = document.getElementById("edit-address").value;
//     let updatedtemp = document.getElementById("edit-temp").value;
//     let updatedSymptoms = document.getElementById("edit-symptoms").value;
  
  
//     let Updatedpatient = new Patient(
//       updatedFirstName,
//       updatedlastName,
//       updatedaddress,
//       updatedage,
//       updatedtemp,
//       updatedSymptoms,
//     );

//     console.log(Updatedpatient, 'updated newly');


//     let allPatientList = JSON.parse(localStorage.getItem("patient"));

//     const updatedPatientArray = [...allPatientList, Updatedpatient];

//     localStorage.setItem("patient", JSON.stringify(updatedPatientArray));

//     modal.style.display = "none";
//   }

// }
