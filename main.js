
function sendData(){
  var user = document.getElementById("user").value;
  var pass=document.getElementById("pass").value;
  var nationality = document.getElementById("nation").value;
  var email = document.getElementById("email").value;
  console.log(user, pass, email,nationality);
  if(user==""){
   document.getElementById('err').innerText ="please enter user name";
   return false;
  }
  var payload = {
      "username": user,
      "password":pass,
      "nationlity": nationality,
      "email": email
    };
    console.log(payload);
    $.ajax(
      {

        url: 'https://onprem.boodskap.io/api/record/insert/dynamic/MIPPCMEXKG:dcXxnjeNZwX9/6666',
        data: JSON.stringify(payload),
        type: 'POST',
        contentType: "text/plain",
        success: function (response) {
          // alert(response);
          console.log(response);
          // alert("Data Submit")
        },
        error: function () {
          alert("error");
        }
      }
    );
    
    setTimeout(() => {
      document.location.reload();
    }, 1000);

}