class Patient {
    constructor (firstName,lastName, age, temp, address, syptoms){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.temp = temp
    this.address = address
    this.syptoms = syptoms
    }

    savePatientDetails () {

        const currentPatientJSON = localStorage.getItem("patient");
        let currentPatient = JSON.parse(currentPatientJSON) || [];

        const newPatient = {
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age,
            temp: this.temp,
            address: this.address,
            symptoms: this.syptoms
          };
          const newPatientArray = [...currentPatient, newPatient];
  
          localStorage.setItem("patient", JSON.stringify(newPatientArray));

    }
}

document.addEventListener("submit", function(e){
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const address = document.getElementById("address").value;
    const temp = document.getElementById("temp").value;
    const symptoms = document.getElementById("symptoms").value;

   const patient = new Patient(firstName,lastName, address, age, temp, symptoms);
   console.log(patient);

   patient.savePatientDetails();

});