studentArray=[];



//sumbmit function
function submit() {
    //varibles
    var n1 = document.getElementById("name1").value;
    var n2 = document.getElementById("name2").value;
    var n3 = document.getElementById("name3").value;
    var n4 = document.getElementById("name4").value;
    document.getElementById("website.Show").style.display="inline-block"
    document.getElementById("App.Show").style.display="inline-block"
    studentArray.push("Name- ");
  studentArray.push( n1 + " ;");
  studentArray.push( "School- ");
  studentArray.push( n2 + " ;");
  studentArray.push( "Age- " );
  studentArray.push( n3 + " ;");
  studentArray.push( "Gender- " );
  studentArray.push( n4 + " ;");
  var studentsArrayWithoutComma=studentArray.join(" ")
  //style
  document.getElementById("submitButton").style.display="none";
  document.getElementById("name1").style.display="none";
  document.getElementById("name2").style.display="none";
  document.getElementById("name3").style.display="none";
  document.getElementById("name4").style.display="none";
  document.getElementById("login").style.display="none"; 
  document.getElementById("Name").innerHTML=studentsArrayWithoutComma; 
}




function website() {


document.getElementById("Name").style.display="inline-block";
document.getElementById("show").style.display="table";
document.getElementById("website.Show").style.display="none";
document.getElementById("App.Show").style.display="none";
}
 function app() {
  document.getElementById("Name").style.display="inline-block";
  document.getElementById("appi").style.display="table";
  document.getElementById("website.Show").style.display="none";
  document.getElementById("App.Show").style.display="none";




 }