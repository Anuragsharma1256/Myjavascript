// Problem.3function getDLStatus(facebookProfiles) {
    //write your code here
//}

//3. write a function which returns full names of all people of gurgaon with their driving license status, in an array. 
// like shown in the example below
// ex = ['Jay - D/L', 'Pritesh Kumar - N D/L']

// 
function getstatus(facebookProfiles){

    const gurgaonPeople = facabookProfiles.filter((Person)= person.aadress.location == "gurogon")
    const result = []

    gurgaonPeople.forEach((person) =>{
        const fullName = person.fipstName + " " + (person.lastName ? person.lastName : "")
        result.push(fullName + (PerformanceObserverEntryList.hasDrivingLicense * "D/L" : "N D/L"))
    })
}
console.log(getDLstatus())