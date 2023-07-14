var studentArray=[];
var showStudents=[];
var studentName;

for(var i= 1; i<=4; i++){
    studentName= document.getElementById("nameOfTheStudent"+i).value;
    studentArray.push(studentName)
}

function submit(){
    for(var i= 1; i<=4; i++){
        studentName= document.getElementById("nameOfTheStudent"+i).value;
        studentArray.push(studentName)
    }
    document.getElementById("displayNameWithCommas").innerHTML= studentArray
    document.getElementById("submitButton").style.display = "none";
    document.getElementById("sortButton").style.display = "inline-block";

}
function sorting(){
    studentArray.sort();

    var showOrgStudents=[];
    var lengthStudent= studentArray.length;
    for(var i= 0; i<lengthStudent; i++){
        showOrgStudents.push("<h4>name-"+studentArray[i]+"</h4>")
    }
    var removeCommas=showOrgStudents.join(" ")
    document.getElementById("displayNameWithoutCommas").innerHTML= removeCommas
}