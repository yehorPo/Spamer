$(function(){
    const URL = 'http://localhost:5000/api/post';
    $("#clear").on('click', function(){
       $("#crudCont").empty();
    });

    $("#add").on('click', function(){
        $("#crudCont").empty();
        $("#crudCont").append(`<br>
        <h2 class="bg-dark badge rounded-pill text-center" style="font-size:x-large;">Add new</h2>
        <form id="formAdd">
            <div class="form-floating">
                <input type="text" class="form-control" id="floatingPassword" placeholder="name" name="name" required>
                <label for="floatingPassword">Name</label>
            </div>
            <div class="form-floating">
                <input type="text" class="form-control" id="floatingPassword" placeholder="surname" name="surname" required>
                <label for="floatingPassword">Surname</label>
            </div>
            <div class="form-floating">
                <input type="text" class="form-control" id="floatingPassword" placeholder="patronymic" name="patronymic" required>
                <label for="floatingPassword">Patronymic</label>
            </div>
            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" required>
                <label for="floatingInput">Email address</label>
            </div>
            <br>
            <button class="btn btn-lg bg-dark text-white" type="submit">Add</button>
        </form>`);
        $("#formAdd").on("submit", async function(event) {
            event.preventDefault();
            let urlencoded = $("#formAdd").serialize();
            let parsed = Object.fromEntries(
                urlencoded.split('&')
                .map(s => s.split('='))
                .map(pair => pair.map(decodeURIComponent)));
            console.log(parsed);
            await fetch(URL, {
                method: "POST",
                mode:"cors",
                headers:{
                    'Content-Type': 'application/json; charset=utf-8',
                    'mode': 'cors',
                    'Access-Control-Allow-Origin': '*',
                    'Connection': 'keep-alive',
                    'Keep-Alive': 'timeout=5'
                },
                body: JSON.stringify(parsed)
            }).then(function(resp){
                response = resp.status;
                console.log(response);
            })
        });
    });

    $("#edit").on('click', function(){
        $("#crudCont").empty();
        $("#crudCont").append(`<br>
        <h2 class="bg-dark badge rounded-pill text-center" style="font-size:x-large;">Edit</h2>
        <form id="formEdit">
            <select name="_id" class="form-select" aria-label="Default select example" id="id" required>
                <option selected>Choose id</option>
            </select>
            <div class="form-floating">
                <input type="text" class="form-control" id="floatingPassword" placeholder="name" name="name" required>
                <label for="floatingPassword">Name</label>
            </div>
            <div class="form-floating">
                <input type="text" class="form-control" id="floatingPassword" placeholder="surname" name="surname" required>
                <label for="floatingPassword">Surname</label>
            </div>
            <div class="form-floating">
                <input type="text" class="form-control" id="floatingPassword" placeholder="patronymic" name="patronymic" required>
                <label for="floatingPassword">Patronymic</label>
            </div>
            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" required>
                <label for="floatingInput">Email address</label>
            </div>
            <br>
            <button class="btn btn-lg bg-dark text-white" type="submit">Edit</button>
        </form>`);
        $("#id").one('focus', async function(){
            $(this).empty();
            let all = await fetch(URL, {
                method: "GET",
                headers:{
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept':'*/*',
                    'Access-Control-Allow-Origin': '*',
                    'Connection': 'keep-alive'
                }
            }).then(r => r.json());
            console.log(all);
            let length = all.length;
            for(let i=0; i<length;i++){
                $(this).append(`<option value="${all[i]._id}">${all[i].name} ${all[i].surname} ${all[i].patronymic}</option>`)
            }
            
        });
        $("#formEdit").on("submit", async function(event) {
            event.preventDefault();
            let urlencoded = $("#formEdit").serialize();
            let parsed = Object.fromEntries(
                urlencoded.split('&')
                .map(s => s.split('='))
                .map(pair => pair.map(decodeURIComponent)));
            console.log(parsed);
            await fetch(URL, {
                method: "PUT",
                mode:"cors",
                headers:{
                    'Content-Type': 'application/json; charset=utf-8',
                    'mode': 'cors',
                    'Access-Control-Allow-Origin': '*',
                    'Connection': 'keep-alive',
                    'Keep-Alive': 'timeout=5'
                },
                body: JSON.stringify(parsed)
            }).then(function(resp){
                response = resp.status;
                console.log(response);
            })
        });
    });

    $("#delete").on('click', function(){
        $("#crudCont").empty();
        $("#crudCont").append(`<br>
        <h2 class="bg-dark badge rounded-pill text-center" style="font-size:x-large;">Delete</h2>
        <form id="formDelete">
            <select name="_id" class="form-select" aria-label="Default select example" id="id" required>
                <option selected>Choose id</option>
            </select>
            <br>
            <button class="btn btn-lg bg-dark text-white" type="submit">Delete</button>
        </form>
    </div>`);
    $("#id").one('focus', async function(){
        $(this).empty();
        let all = await fetch(URL, {
            method: "GET",
            headers:{
                'Content-Type': 'application/json; charset=utf-8',
                'Accept':'*/*',
                'Access-Control-Allow-Origin': '*',
                'Connection': 'keep-alive'
            }
        }).then(r => r.json());
        console.log(all);
        let length = all.length;
        for(let i=0; i<length;i++){
            $(this).append(`<option value="${all[i]._id}">${all[i].name} ${all[i].surname} ${all[i].patronymic}</option>`)
        }
        
    });
    $("#formDelete").on("submit", async function(event) {
        event.preventDefault();
        let urlencoded = $("#formDelete").serialize();
        let parsed = Object.fromEntries(
            urlencoded.split('&')
            .map(s => s.split('='))
            .map(pair => pair.map(decodeURIComponent)));
        console.log(parsed);
        console.log(parsed._id);
        const urlWithID = 'http://localhost:5000/api/post/'+parsed._id;
        await fetch(urlWithID, {
            method: "DELETE",
            mode:"cors",
            headers:{
                'Content-Type': 'application/json; charset=utf-8',
                'mode': 'cors',
                'Access-Control-Allow-Origin': '*',
                'Connection': 'keep-alive',
                'Keep-Alive': 'timeout=5'
            },
            body: JSON.stringify(parsed)
        }).then(function(resp){
            response = resp.status;
            console.log(response);
        })
    });
    });
    
})