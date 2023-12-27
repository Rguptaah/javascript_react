const applicationId = 7468;
let applicationEmail = "rahul@rahul.com";
var applicationPassword = "12345";
applicationCity = "Noida";
let applicationState;

// applicationId = 456; Its a contsant cannot  be changed
console.log(applicationId);

/*
Prefer to not use of var
because of issue in block scope and functional scope
*/

console.table({
    ApplicationID : applicationId,
    ApplicationEmail: applicationEmail,
    ApplicationPass: applicationPassword,
    ApplicationCity: applicationCity,
    ApplicationState: applicationState
});


