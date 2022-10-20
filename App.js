
var domainKey = 'MIPPCMEXKG'
var apiKey = 'dcXxnjeNZwX9'
var TOKEN = domainKey + ":" + apiKey;
function sendData() {

    
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var nationality = document.getElementById("nation").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById('dob').value;
    console.log(user, pass, email, nationality);
    if (user == "") {
      document.getElementsByClassName('invalid-feedback').innerText = 'show';
    }
    // else if (pass == "") {
    //   document.getElementById('sam2').innerText = "* please fill the password"
    //   document.getElementById('sam2').style.color = "red";
    // }
    // else if (email == "") {
    //   document.getElementById('sam3').innerText = "* please fill the email"
    //   document.getElementById('sam3').style.color = "red";
    // }
    // else if (date == "") {
    //   document.getElementById('sam4').innerText = "* please fill the date of birth"
    //   document.getElementById('sam4').style.color = "red";
    // }
    // else if (nationality == "") {
    //   document.getElementById('sam5').innerText = "* please fill the nationality"
    //   document.getElementById('sam5').style.color = "red";
  
    // }
   
    else {
      var payload = {
        "username": user,
        "password": pass,
        "nationality": nationality,
        "dob": date,
        "email": email
      };
      console.log(payload);
      $.ajax(
        {
  
          url: ' https://onprem.boodskap.io/api/micro/service/mippcmexkg/userdata/insertData',
          data: JSON.stringify(payload),
          type: 'POST',
          headers:{
            "Content-Type": "application/json",
            "TOKEN":TOKEN
          },  
          success: function (response) {
            console.log(response);
          },
          error: function () {
            console.log("error");
          }
        }
      );
  
    }
    // setTimeout(function(){
    //     window.location.reload();
    //  }, 2000);
  }


function dataList() {
    var query = "{\n  \"from\":0,\n  \"size\":1000\n}"
    var body = {
      query: query,
      type: "RECORD",
      specId: 8888,
    };
  
    $.ajax({
      url: "https://onprem.boodskap.io/api/micro/service/mippcmexkg/userdata/ListData",
      method: "POST",
      type: "RECORD",
      headers: {
        'Content-Type': 'application/json',
        "TOKEN": TOKEN
      },
      data: JSON.stringify(body),
      success: function (datas) {
        // alert("success");
        requestData = datas;
        console.log(requestData);
        $('#table2 ').DataTable({
          data: requestData,
          columns: [
            { data: '_source.username' },
            { data: '_source.password' },
            { data: '_source.email' },
            { data: '_source.dob' },
            { data: '_source.nationality' },  
            {
              data: '_id', 'render': function (_id) {
                return '<button onclick="editData(\'' + _id + '\')">Edit</button>';
              }
            },
            {
              data: '_id', 'render': function (_id) {
                return '<button onclick="deleteData(\'' + _id + '\')">Delete</button>';
              },
            }
          ],
          "pageLength": 10
        });
      },
      error: function () {
        alert("error");
      }
    })  
  }
  dataList();


function deleteData(_id) {
    console.log(_id);
    var body = {
      "_id": _id
    };
  
    $.ajax({
      url: "https://onprem.boodskap.io/api/micro/service/mippcmexkg/userdata/deleteData",
      method: "POST",
      type: "RECORD",
      headers: {
        'Content-Type': 'application/json',
        "TOKEN": TOKEN
      },
      data: JSON.stringify(body),
      success: function (datas) {
        // alert("success");
  
        console.log(datas);
      },
      error: function () {
        alert("error");
      }
  
    }
    )
  
  }
  
  function editData(_id) {
    searchId = _id
    console.log(requestData);
    console.log(searchId);
    requestData.forEach(sample);
    function sample(items) {
      if (items._id == searchId) {
          u=   document.getElementById('user1').value = items._source.username;
       
       document.getElementById("pass1").value = items._source.password;
        document.getElementById("email1").value = items._source.email;
        document.getElementById("dob1").value = items._source.dob;
        document.getElementById("nation1").value = items._source.nationality;
  
        var btn = document.getElementById('btns');
        btn.addEventListener('click', save);
        btn.innerText = "save";
        console.log(items);
      }
    
      var d = document.getElementsByClassName('.inputs');
  
      if (d !== "") {
        document.getElementById('user1').removeAttribute('readonly');
        document.getElementById('pass1').removeAttribute('readonly');
        document.getElementById('dob1').removeAttribute('readonly');
        document.getElementById('nation1').removeAttribute('readonly');
      }
    
  }
  console.log(u);
  function save() {
    const payload = {
      "_id":searchId,
        "username":document.getElementById('user1').value,
        "password":document.getElementById('pass1').value,
        "email":document.getElementById('email1').value,
        "dob":document.getElementById('dob1').value,
        "nationality":document.getElementById('nation1').value
    }
    console.log(payload);
    $.ajax(
      {
  
        url: 'https://onprem.boodskap.io/api/micro/service/mippcmexkg/userdata/editData',
        data: JSON.stringify(payload),
        method:"POST",
        type: 'RECORD',
        headers: {
          "Content-Type": "application/json",
          "TOKEN": TOKEN
        },
        success: function (response) {
          // alert(response);
          
          console.log(response);
        },
        error: function () {
        console.log("error");
        }
      }
    );
    
  }
  }
  