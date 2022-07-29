
// let url='http://localhost:3000/exigences'
// let url='https://mahaapp.000webhostapp.com/resources/databases/MAHA_DataBase.db.json'
// let url='http://maha.epizy.com/resources/databases/MAHA_DataBase.db.json'
let url='https://api.jsonbin.io/v3/b/62e3ac502c868775a53e7e2a'

const GET=async function(){
    const settings = {
        mode:'cors',
        method: 'GET',
        headers: {'Content-Type': 'application/json; charset=utf-8','X-MASTER-Key': '$2b$10$VtbT3yNh5czEH1kwdD2bRuBXW0N8jhIUsM9sOLI6tNEJShsSJb9Mq'}
    };
    const ResponseData = await fetch(url,settings)
    console.log(ResponseData)
    const Data = await ResponseData.json();
    sessionStorage.setItem('init_Data',JSON.stringify(Data.record)) 
}

GET()



var Database=sessionStorage.getItem('init_Data')
var DataBASE=JSON.parse(Database)


function filter(list){
    var L=[]
    for(element of list){
        if (L.includes(element)==false){
            L.push(element)
        }else{      
        }
    }
    return L
}

function DataListInit(){

    try {
        for(let j=1;j<8;j++){
        var Val=DataBASE.map(x=>x['type'+j])
        var newVal=filter(Val)
        try{
            var LT=document.querySelector('datalist[id=LT'+j+']')
            for (v of newVal){
                
                var opt=document.createElement('option')
                opt.setAttribute('value',v)
                LT.appendChild(opt)
            }
        }catch{}        
    }   
    } catch (error) {
        
    }
    
}
DataListInit()


var DATE=new Date()

var Exigence={
    'id':null,
    'type1':null,
    'type2':null,
    'type3':null,
    'type4':null,
    'type5':null,
    'type6':null,
    'type7':null,
    'exigence':null,
    'source':null,
    'date_du_jour':null,
}


function Display(){
    Exigence.id=parseInt(document.querySelector('input#id').value) || null
    Exigence.type1=document.querySelector('input#T1').value || null
    Exigence.type2=document.querySelector('input#T2').value || null
    Exigence.type3=document.querySelector('input#T3').value || null
    Exigence.type4=document.querySelector('input#T4').value || null
    Exigence.type5=document.querySelector('input#T5').value || null
    Exigence.type6=document.querySelector('input#T6').value || null
    Exigence.type7=document.querySelector('input#T7').value || null
    Exigence.exigence=document.querySelector('textarea#exigence').value || null
    Exigence.source=document.querySelector('textarea#source').value || null
    Exigence.date_du_jour=DATE.toLocaleString('fr',{day:'2-digit',month:'2-digit',year:'numeric'}) || null
    sessionStorage.setItem('Exigence',JSON.stringify(Exigence))
    
}


var instruction

const POST=async function(DATA){

    const settings = {
        mode:'cors',
        method: 'POST',
        body:JSON.stringify(DATA),
        headers: {'Content-Type': 'application/json; charset=utf-8','X-MASTER-Key': '$2b$10$VtbT3yNh5czEH1kwdD2bRuBXW0N8jhIUsM9sOLI6tNEJShsSJb9Mq'}
    };
    try {
        const ResponseData= await fetch(url, settings);
        console.log(ResponseData)
        const Data = await ResponseData.json();
        if(sessionStorage.getItem('init_Data')==null){
            sessionStorage.setItem('init_Data',JSON.stringify(Data.record))
        }
    } catch (error) {
        
    }
    
}

function Add(){  
    Display()   
    instruction='Add'

    POST(Exigence)
    sessionStorage.setItem('Instruction',JSON.stringify(instruction))


}

const PUT=async function(DATA){
    const settings = {
        mode: "cors",
        method: 'PUT',
        body:JSON.stringify(DATA),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-MASTER-Key': '$2b$10$VtbT3yNh5czEH1kwdD2bRuBXW0N8jhIUsM9sOLI6tNEJShsSJb9Mq'
        }
    };
    try {
        const ResponseData= await fetch(url, settings);
        console.log(ResponseData)
        const Data = await ResponseData.json();
        console.log(Data)
        if(sessionStorage.getItem('init_Data')==null){
            sessionStorage.setItem('init_Data',JSON.stringify(Data.record))
        }
    } catch (e) {
        
    }    
}

function Save(){
    Display()
    instruction='Save'

    PUT(Exigence)
    sessionStorage.setItem('Instruction',JSON.stringify(instruction))
}

function DELETE(DATA,id){
    var myInit={
        mode: "cors",
        method:'DELETE',
        headers:{'Content-Type':'application/json;charset=utf-8','X-MASTER-Key': '$2b$10$VtbT3yNh5czEH1kwdD2bRuBXW0N8jhIUsM9sOLI6tNEJShsSJb9Mq'},
        body:DATA,
        }
    
        try {
            let myRequest=new Request(url+'/'+id,myInit);
            fetch(myRequest)
            .then(function(resp){return resp})
            .then(function(data){
                console.log(data)
                sessionStorage.setItem('init_Data',JSON.stringify(data.record))
            })
        } catch (error) {
            
        }
   

}

function Delete(){
    Display()
    instruction='Delete'
    console.log(Exigence.id)
    DELETE(null,Exigence.id)
    sessionStorage.setItem('Instruction',JSON.stringify(instruction))
    
}


function Cancel(){
    var X=[]
    X.push(document.querySelectorAll('input[type=number]'))
    X.push(document.querySelectorAll('input[type=text]'))
    X.push(document.querySelectorAll('textarea'))
    for (x of X){
        for (xe of x){
            if(xe.id!='id'){xe.value=''}
        }  
    }
}



function displayAllInfo(){
    
    Display()

    try {
        var id=Exigence.id
    var tdb=DataBASE.filter(X=>X['id']==id)
    if(tdb.length>0){
        for(let j=1;j<8;j++){
            try {
                 var ip=document.querySelector('input[id=T'+j.toString()+']')
                 ip.value=tdb[0]['type'+j]
            } catch (error) {}
        }
        for(let j=8;j<10;j++){
            try {
                var tx=document.querySelectorAll('textarea') 
                    tx[j-8].value=tdb[0][Object.keys(Exigence)[j]]
           } catch (error) {}
        }
    }else{
        Cancel()
    }
    } catch (error) {
        
    }
    
}



