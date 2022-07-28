
let url='http://localhost:3000/exigences' 
// https://dev.to/myogeshchavan97/how-to-easily-create-and-host-your-own-rest-api-without-writing-a-single-line-of-code-2np4




const PUT=async function(Data){
    const settings = {
        mode: "cors",
        method: 'PUT',
        body:JSON.stringify(Data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
    try {
        const ResponseData= await fetch(url, settings);
        console.log(ResponseData)
        const Data2 = await ResponseData.json();
        console.log(Data2)
        if(sessionStorage.getItem('init_Data')==null){
            sessionStorage.setItem('init_Data',JSON.stringify(Data2))
        }
    } catch (e) {
        return e;
    }    
}


const POST=async function(Data){

    const settings = {
        mode:'cors',
        method: 'POST',
        body:JSON.stringify(Data),
        headers: {'Content-Type': 'application/json; charset=utf-8',}
    };
    const ResponseData= await fetch(url, settings);
    console.log(ResponseData)
    const Data2 = await ResponseData.json();
    console.log(Data2)
    if(sessionStorage.getItem('init_Data')==null){
        sessionStorage.setItem('init_Data',JSON.stringify(Data2))
    }
}


function DELETE(DATA,id){
    var myInit={
        mode: "cors",
        method:'DELETE',
        headers:{'Content-Type':'application/json;charset=utf-8'},
        body:DATA,
        }
    
        try {
            let myRequest=new Request(url+'/'+id,myInit);
            fetch(myRequest)
            .then(function(resp){return resp})
            .then(function(data){
                console.log(data)
                sessionStorage.setItem('init_Data',JSON.stringify(data))
            })
        } catch (error) {
            
        }
   

}

var Database=sessionStorage.getItem('init_Data')
var DataBASE=JSON.parse(Database)


var data=sessionStorage.getItem('Exigence')
Exigence=JSON.parse(data)
console.log(Exigence)


function InitAddExigence(){
    let tbody=document.querySelector("tbody")
    for(let j=0;j<DataBASE.length;j++){
        AddtoTable(DataBASE[j])  
    }
}

function AddtoTable(Exigence){
    let tbody=document.querySelector("tbody")
    let tr=document.createElement('tr')
    for(let i=0;i<11;i++){
        var td=document.createElement('td')
        td.innerHTML=Exigence[Object.keys(Exigence)[i]]
        if(i==8){
            td.setAttribute('colspan',3)
        }
        tr.appendChild(td)
    }
    tbody.appendChild(tr)
}


function AddHead(){
    let thead=document.querySelector("thead")
    let tr=document.createElement('tr')
    Exigence=DataBASE[0]
    for(let i=0;i<11;i++){
        var th=document.createElement('th')
        th.innerHTML=Object.keys(Exigence)[i]
        if(i==8){
            th.setAttribute('colspan',3)
        }
        tr.appendChild(th)
    }
    thead.appendChild(tr)
}



onload=function(){
    AddHead()
    InitAddExigence()

}





///function of the page


function AddRow(){
    let Table=document.querySelector('table')
    let New=document.createElement('tr')
    for(i=0;i<11;i++){
        
        var td=document.createElement('td')
        
        if(i==0){
           td.innerHTML=parseInt(Table.children[1].children[Table.children[1].children.length-1].children[0].innerHTML)+1
        }

        if(i==8){
            td.setAttribute('colspan',3)
        }

        if(i==10){
            date= new Date()
            td.innerText=date.toLocaleString('fr',{day:'2-digit',month:'2-digit',year:'numeric'})
        }
        New.appendChild(td)
    }

    
    Table.children[1].appendChild(New)
}


function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms))
}

// function SaveRow(){
    
//     let Table=document.querySelector('table')
//     for(raw of Table.children[1].children){
//         json={}
//         for(let i=0;i<raw.children.length;i++){
//             json[Object.keys(Exigence)[i]]=raw.children[i].innerHTML
//         }
//         console.log(json)
//         // try {
//         //     POST(json)  
//         // } catch {
//         //     PUT(json)
//         // }finally{

//         // }
//     }
// }

function SaveRow(){
    
    let Table=document.querySelector('table')
    raw =Table.children[1].children[Table.children[1].children.length -1]
    json={}
    for(let i=0;i<raw.children.length;i++){
        json[Object.keys(Exigence)[i]]=raw.children[i].innerHTML
    }

    try {
        POST(json)  
    } catch (error) {
        console.log(error)
    }
    
}




function DeleteRow(){
    let Table=document.querySelector('table')
    raw =Table.children[1].children[Table.children[1].children.length -1]
    json={}
    for(let i=0;i<raw.children.length;i++){
        if(i==0){
           json[Object.keys(Exigence)[i]]=parseInt(raw.children[i].innerHTML)

        }else{
           json[Object.keys(Exigence)[i]]=raw.children[i].innerHTML 
        }
        
    }
    console.log(json['id'])
    try {
        DELETE(null,json['id'])  
    } catch (error) {
        console.log(error)
    }
}






function RemoveColumn(){
 

}




function AddColumn(){
    let X=document.querySelector('input[name=col-name]')
    console.log(X.value)
    let Table=document.querySelector('table')
    let New=document.createElement('th')
    New.innerHTML=X.value
    Table.children[0].children[0].appendChild(New)

    let tbody=document.querySelector('tbody')
    for(e of tbody.children){
        var td=document.createElement('td')
        e.appendChild(td)
    }
}