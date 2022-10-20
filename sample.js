
//   const update = {
//     "query": "{\n \"size\":1000\n}",

//     "type": "RECORD",
//     "specId": 6666
//   };

//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       "TOKEN": "4d2d7d08-33ef-4816-b322-20c7d59f43d3"
//     },
//     body: JSON.stringify(update),
//   };
//   var url = ' https://onprem.boodskap.io/api/micro/service/mippcmexkg/userdata/ListData'
//   fetch(url, options)
//     .then(data => {
//       if (!data.ok) {
//         throw Error(data.status);
//       }
//       return data.json();
//     }).then(update => {
//       var x=(update[0].username);
// document.getElementById('dataList').innerHTML=x
//     })
//     .catch(err =>
//       console.log("error"));




var btn = document.createElement('button');
btn.setAttribute('onclick', 'save()');
btn.innerText = "Save";
document.getElementById('btns').append(btn);
function save() {
  const payload = {
    "username": document.getElementById('user1').value,
    "password": document.getElementById('pass1').value,
    "email": document.getElementById('email1').value,
    "dob": document.getElementById('dob1').value,
    "nationality": document.getElementById('nation1').value
  }
  $.ajax(
    {

      url: 'https://onprem.boodskap.io/api/micro/service/mippcmexkg/userdata/editData',
      data: JSON.stringify(payload),
      type: 'POST',
      headers: {
        contentType: "text/plain",
        "TOKEN": "cc51df35-4422-4b22-bb2e-b568483ba4cd"
      },

      success: function (response) {
        // alert(response);
        console.log(response);
      },
      error: function () {
        alert("error");
      }
    }
  );
  console.log(payload);
}



  //   datas.forEach(sample);
    //   function sample(item) {
    //     var items = item;
    //     if (items._id == _id) {
    //       var x = document.getElementById("user1").value = items._source.username;
    //       document.getElementById("pass1").value = items._source.password;
    //       document.getElementById("email1").value = items._source.email;
    //       document.getElementById("dob1").value = items._source.dob;
    //       document.getElementById("nation1").value = items._source.nationality;

    //       console.log(d);
    //       if (d !== "") {
    //         document.getElementById('user1').removeAttribute('readonly');
    //         document.getElementById('pass1').removeAttribute('readonly');
    //         document.getElementById('dob1').removeAttribute('readonly');
    //         document.getElementById('nation1').removeAttribute('readonly');
    //       }
    //     }
    //     console.log(items);
    //   }