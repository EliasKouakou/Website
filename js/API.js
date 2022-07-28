
// var myHeaders=new Headers();
// myHeaders.append('Content-Type', 'application/json');
// myHeaders.append('Accept', 'application/json');
// myHeaders.append('Access-Control-Allow-Origin','*')
// myHeaders.append('Accept','*/*');
// myHeaders.append('Authorization','Basic cHJlc3RhdGFpcmVAYm5ic2l0dGVyLmNvbToxMjM0NTY=');
// myHeaders.append('GET', 'POST', 'OPTIONS');
// myHeaders.append('Origin','http://localhost:8081/json/line?id=100')

// function Fetch(){
//     // let url='http://localhost:8081/json/line?id=100'
//     let url='https://www.prevision-meteo.ch/services/json/clermont-ferrand'

//     console.log(url)
//     // fetch(url,{mode:'no-cors',method:'GET',headers:myHeaders})
//     fetch(url)
//     .then(function(response){
//         if(!response.ok){
//             console.log(response);
//             return response.json()}
//             console.log(response)
//         }
        
//         )
    
//     // .then(function(data){
//     //     return data?JSON.parse(data):{}})
//     .catch(function(err){
//         console.log(err)
//     });
    
// }


// const Fetch=async function(){
//     // let url='http://localhost:8081/json/line?id=100'
//     let url='https://www.prevision-meteo.ch/services/json/clermont-ferrand'
//     // let response=await fetch(url,{mode:'no-cors',method:'GET',headers:{myHeaders,'Content-Type':'applicatoin.json'}})
//     // // let data=await JSON.parse(JSON.stringify(response))
//     // console.log(response.json())

//     // const ResponseData = await fetch('https://www.prevision-meteo.ch/services/json/paris'); 
//     console.log(url)
//     const ResponseData = await  fetch(url)
//     // const ResponseData = await  fetch(url,{mode:'no-cors',method:'GET',headers:{myHeaders,'Content-Type':'applicatoin.json'}})
//     console.log(ResponseData)
//     const Response = await ResponseData.json();
//     console.log(Response.current_condition.condition)
// }



// const Fetch=async function(){
//     let url
//     const ResponseData=await fetch(url)
//     const Response=await ResponseData.json()
//     for(line in Response){
        
//     }
// }


// let url='https://eliaskouakou.github.io/MAHAjson/MAHA_DataBase.db.json'
// let url='https://mocki.io/v1/d845b4df-1e21-4090-b8f7-3ae9d6c096c8'
let url='https://jsonplaceholder.typicode.com/posts'
const GET=async function(){

    
    const ResponseData = await fetch(url)
    // console.log(ResponseData)
    const Data = await ResponseData.json();
    

    console.log(Data)
    // if(sessionStorage.getItem('init_Data')==null){
    //     sessionStorage.setItem('init_Data',JSON.stringify(Data))
    //     // console.log(Data)
    // }
    
    
}

GET()


// const POST=async function(Data){

//     const settings = {
//         mode:'no-cors',
//         method: 'GET',
//         body:JSON.stringify(Data),
//         headers: {'Content-Type': 'application/json; charset=utf-8',}
//     };
//     const ResponseData= await fetch(url, settings);
//     console.log(ResponseData)
//     const Data2 = await ResponseData.json();
//     if(sessionStorage.getItem('init_Data')==null){
//         sessionStorage.setItem('init_Data',JSON.stringify(Data2))
//     }
// }

// url="https://jsonplaceholder.typicode.com/posts"
const PUT=async function(Data){


    const settings = {
        credentials: "same-origin",
        mode: "same-origin",
        method: 'PUT',
        body:JSON.stringify(Data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
    try {
        const fetchResponse = await fetch(url, settings);
        const data = await fetchResponse.json();
        return data;
    } catch (e) {
        return e;
    }    
}


function POST(DATA){
    var myInit={
        mode: "cors",
        method:'POST',
        headers:{'Content-Type':'application/json;charset=utf-8'},
        body:JSON.stringify(DATA),
        }

    // let myRequest=new Request('../js/MAHA_DataBase.db.json',myInit);
    // let myRequest=new Request('../resources/databases/MAHA_DataBase.db.json',myInit);
    let myRequest=new Request(url,myInit);
    fetch(myRequest)
    .then(function(resp){return resp})
    .then(function(data){
        console.log(data)
        sessionStorage.setItem('init_Data',JSON.stringify(data))
    })
}
