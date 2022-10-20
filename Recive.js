
const update = {
    "query": "{\n \"size\":1000\n}",

    "type": "RECORD",
    "specId": 6666
};  

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
};
var url = 'https://onprem.boodskap.io/api/elastic/search/query/MIPPCMEXKG:dcXxnjeNZwX9/RECORD?specId=6666'
fetch(url, options)
    .then(data => {
        if (!data.ok) {
            throw Error(data.status);
        }
        return data.json();
    }).then(update => {
        // console.log(update.result);
        var x = JSON.parse(update.result).hits.hits
        console.log(x);
        x.forEach(sample);
        function sample(item, index) {
            var x = item
            // console.log(x)
            var tbody = document.getElementById("body");
            var btn1 = document.createElement("button");
            btn1.innerText = "Edit";
            // console.log(btn1);
            var btn2 = document.createElement("button");
            btn2.innerText = "Delete"
            var row = document.createElement('tr');
            // console.log(row)
            var A = document.createElement('td');
            var B = document.createElement('td');
            var C = document.createElement('td');
            var D = document.createElement('td')
            var E = document.createElement('td');
            var F = document.createElement('td');
            row.append(A);
            row.append(B);
            row.append(C);
            row.append(D);
            row.append(E);
            row.append(F);
            tbody.append(row);
            A.innerText = x._source.username;
            B.innerText = x._source.password;
            C.innerText = x._source.email;
            D.innerText = x._source.nationlity;
            E.append(btn1);
            F.append(btn2);
            btn1.addEventListener('click', Edit);
            btn2.addEventListener('click', Delete);

            function Edit() {
                console.log(x);
                var Z1 = document.getElementById("username").value = x._source.username;
                var Z2 = document.getElementById("passs").value = x._source.password;
                var Z3 = document.getElementById("mail").value = x._source.email;
                var Z4 = document.getElementById("nations").value = x._source.nationlity;
                console.log(Z1);

                var save = document.getElementById("btns")
                console.log(save);
                save.addEventListener('click', Saving)
                function Saving() {
                    console.log(Z1);

                    var payload = {
                        "username": document.getElementById('username').value,
                        "password": document.getElementById('passs').value,
                        "email": document.getElementById('mail').value,
                        "nationlity": document.getElementById('nations').value
                    };
                    console.log(payload);
                    $.ajax(
                        {

                            url: 'https://onprem.boodskap.io/api/record/insert/static/MIPPCMEXKG:dcXxnjeNZwX9/6666' + '/' + x._id,
                            data: JSON.stringify(payload),
                            type: 'POST',
                            contentType: "text/plain",
                            success: function (response) {
                                // alert(response);
                                console.log(response);
                                

                                alert("Data edit save")
                                setTimeout(() => {
                                    document.location.reload();
                                }, 1000);
                            },
                            error: function () {
                                alert("error");
                            }
                        }
                    );


                }

            }

            function Delete() {
                var url1 = 'https://onprem.boodskap.io/api/record/delete/MIPPCMEXKG:dcXxnjeNZwX9/6666/' + x._id;
                console.log(url1);
                fetch(url1, {
                    method: 'DELETE',
                })
                    .then(res => res.text()) // or res.json()
                    .then(res => alert("Delete"))
                setTimeout(() => {
                    document.location.reload();
                }, 1000);
            
            }
        }

    }).catch(e => {
        console.log(e);
    });
