function createGrid(data){
    $("#jsGrid").jsGrid({
        width: "100%",
        sorting: true,
        paging: true,
        editing: false,
        data: data,
        fields: [
            { name: "_id", title: "ID", type: "text" },
            { name: "name", title: "Name", type: "text" },
            { name: "surname", title: "Surname", type: "text" },
            { name: "patronymic", title: "Patronymic", type: "text" },
            { name: "email", title: "Email", type: "text" }
        ]
    }); 
}
const URL = 'http://localhost:5000/api/post';
$( async function(){
    let data = await fetch(URL, {
        method: "GET",
        headers:{
            'Content-Type': 'application/json; charset=utf-8',
            'Accept':'*/*',
            'Access-Control-Allow-Origin': '*',
            'Connection': 'keep-alive'
        }
    }).then(r => r.json());
    console.log(data);
    createGrid(data);
})