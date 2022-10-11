
class Patient {
    constructor(firstName, lastName, age, temp, address, syptoms) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.temp = temp;
        this.address = address;
        this.syptoms = syptoms;
    }

    savePatientDetails() {
        const currentPatientJSON = localStorage.getItem("patient");
        let patientArray = JSON.parse(currentPatientJSON) || [];

        const newPatient = {
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age,
            temp: this.temp,
            address: this.address,
            symptoms: this.syptoms
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

// Saving the patient details
document.addEventListener("submit", function (e) {
    e.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;
    let temp = document.getElementById("temp").value;
    let symptoms = document.getElementById("symptoms").value;

    const patient = new Patient(
        firstName,
        lastName,
        address,
        age,
        temp,
        symptoms
    );

    patient.savePatientDetails();

    //Display the lists

    const patientList = document.getElementById("patients-list");
    patientList.innerHTML = "";

    patient.getAllPatients().forEach((patient) => {
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

    })

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("address").value = "";
    document.getElementById("temp").value = "";
    document.getElementById("symptoms").value = "";


});

