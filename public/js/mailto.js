function sendEmail(email, body){
    Email.send({
    Host: "smtp.gmail.com",
	Username : "test70548@gmail.com",
	Password : "hi9ah9RBN5edKdx",
	To : email,
	From : "test70548@gmail.com",
	Subject : "Spam",
	Body : body,
	})
}

$(function(){
    $("#mailTo").on('click', function(){
        $("#crudCont").empty();
        $("#crudCont").append(`<br>
        <h2 class="bg-dark badge rounded-pill text-center" style="font-size:x-large;">Send</h2>
        <form id="mailToForm">
            <select name="email" class="form-select" aria-label="Default select example" id="id" required>
                <option selected>Choose email</option>
            </select>
            <br>
            <br>
            <div id="textSelection">
            </div>
            <br>
            <button class="btn btn-lg bg-dark text-white" type="submit">Send</button>
        </form>
        <br>
        
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <button class="btn btn-lg bg-dark text-white" id="gen">Generated text</button>
        <button class="btn btn-lg bg-dark text-white" id="custom">Custom text</button>
        <button class="btn btn-lg bg-dark text-white" id="clearText">Clear</button>
        </div>
    </div>`);
    $("#clearText").on('click', function(){
        $("#textSelection").empty();
    });
    $("#gen").on('click', function(){
        $("#textSelection").empty();
        $("#textSelection").append(`<br><select name="text" class="form-select" aria-label="Default select example" id="text" required>
        <option selected>Choose message</option>
        <option value="Hello">Hello</option>
        <option value="Kono Dio da">Kono Dio da</option>
        <option value="Bye">Bye</option>
    </select>
    <br>`);
    });
    $("#custom").on('click', function(){
        $("#textSelection").empty();
        $("#textSelection").append(`<br><div class="form-floating">
        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" name="text" required>
        <label for="floatingInput">Text</label>
    </div>
    <br>`);
    });
    $("#mailToForm").on("submit", async function(event) {
        event.preventDefault();
        let urlencoded = $("#mailToForm").serialize();
        let parsed = Object.fromEntries(
            urlencoded.split('&')
            .map(s => s.split('='))
            .map(pair => pair.map(decodeURIComponent)));
        const mail = parsed.email;
        const text = parsed.text;
        console.log(text);
        console.log(mail);
        sendEmail(mail,text);
    });
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
            $(this).append(`<option value="${all[i].email}">${all[i].name} ${all[i].surname} ${all[i].patronymic}</option>`)
        }
    });
    });
    
})