
let url='http://localhost:3000/exigences' 
// https://dev.to/myogeshchavan97/how-to-easily-create-and-host-your-own-rest-api-without-writing-a-single-line-of-code-2np4

var Database=sessionStorage.getItem('init_Data')
var DataBASE=JSON.parse(Database)

function InitAddExigence(){
    let tbody=document.querySelector("tbody")
    for(let j=0;j<DataBASE.length;j++){
        AddExigence2(DataBASE[j])  
    }
}



var data=sessionStorage.getItem('Exigence')
Exigence=JSON.parse(data)

onload=function(){
    AddHead(Exigence)
    InitAddExigence(Exigence)

}
// function InitAddExigence(){
//     let thead=document.querySelector("thead")
//     for(let j=0;j<DataBASE.length;j++){
//         AddExigence2(DataBASE[j])  
//     }
// }

function AddExigence2(Exigence){
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


function AddHead(Exigence){
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


function AddExigence(){
    console.log(Exigence)
    POST(Exigence)
    // var Exi=DataBASE.filter(x=>x['id']==Exigence.id)
    // if(Exi.length==0){
    //     let tbody=document.querySelector("tbody")
    //     let tr=document.createElement('tr')
        
    //     for(let i=0;i<Object.keys(Exigence).length;i++){
    //         var td=document.createElement('td')
    //         td.innerHTML=Exigence[Object.keys(Exigence)[i]]
    //         if(i==8){
    //             td.setAttribute('colspan',3)
    //         }
    //         tr.appendChild(td)
    //     }
    //     tbody.appendChild(tr)
    //     console.log('add')  
    //     }
    
}


function SaveExigence(){
    let td=document.querySelectorAll('td')
    for(t of td){
    
        if(t.innerHTML==Exigence.id){
            var X=t
        }
    }
    var parent=X.parentElement
    var j=0
    for(child of parent.children){
        child.innerHTML=Exigence[Object.keys(Exigence)[j]]
        j=j+1
    }
    console.log('save')
    console.log(Exigence)
    // PUT(Exigence)

}


function DeleteExigence(){


    // let td=document.querySelectorAll('td')
    // for(t of td){
    //     if(t.innerHTML==Exigence.id){
    //         var X=t
    //     }
    // }
    // try{
    //     var parent=X.parentElement
    //     var tbody=document.querySelector('tbody')
    //     tbody.removeChild(parent)
        
    // }catch(err){console.log(err)}
    // console.log('delete')
}



function AddRow(){
    let Table=document.querySelector('table')
    let New=document.createElement('tr')
    for(i=0;i<11;i++){
        
        var td=document.createElement('td')
        
        if(i==8){
            td.setAttribute('colspan',3)
        }
        New.appendChild(td)
    }
    
    // console.log(New)
    // console.log(Table.children[1].children)
    Table.children[1].appendChild(New)
}


function SaveLine(){
    console.log(Exigence)
    DataBASE.push(Exigence)
    sessionStorage.setItem('init_Data',JSON.stringify(DataBASE))    


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



function RemoveRow(){
    var index=document.querySelector('input#id').value
    var child=[document.querySelectorAll('tr')].map(i=>i.value=index)
    var parent=child.parentElement
    var tbody=document.querySelector('tbody')
    tbody.removeChild(parent)
}

function RemoveColumn(){

}
