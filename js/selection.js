"use strict";


var Selec={};



function store(element){
    console.log(element)
    if(element.className=='end'){
        Selec[element.value]=element.checked;
    }
    
    console.log(Selec)
};

function Ok(){
    sessionStorage.setItem('Selection',JSON.stringify(Selec))  
}


const funct={
    "Conception physique":["Conception mécanique","Conception électrique","Conception hydraulique et pneumatique"],
    "Conception mécanique":["Maintenabilité","Stabilité","Facteurs géometriques","Aspects physiques et géometriques","Ergonomie"],
    "Aspect fonctionnel":["Exigence Générale","Démarrage et arrêt","Commande",'Opération agricole hautement automatisée'],
    "Démarrage et arrêt":["Mise en marche",'Mise à l arrêt',"Remise en marche aprés interruption"],
    "Mise à l arrêt":["Arrêt normal","Arrêt de service","Arrêt d urgence","Interruption de l alimentation"],
    "Commande":["Système de commande","Organes de service","Commande manuelle"],
    "Système de commande":["Matériel","Logiciel"],
    "Opération agricole hautement automatisée":["Mise en marche de l opération hautement automatisée","Mobilité"],
    "Mobilité":["Perception","Planification","Action"],
    "Perception":["Détection","Localisation"],
    "Localisation":["Globale","Locale"],
    "Planification":["Décision","Interprétation"],
    "Informations pour les utilisateurs":["Exigence Générale","Surveillance","Signaux et dispositifs d'avertissement","Inscriptions,signes et avertissements écrits","Documents d'accompagnement"],
}

var e
function Disable(element){
    Selec[element.value]=false
    if (element.value in funct ){      
        var l=funct[element.value]

        for (e in l ){
            try{
                var X=document.getElementById(l[e])
                X.disabled="disabled";
                try{X.checked=false; Selec[X.value]=false }catch{}
                       
                Disable(X)  ;
            }catch(err){
                
            }
            
        }
    }
}


function Enable(element){ 

    if (element.value in funct ){
            var L=funct[element.value]   
            // console.log(L)
            if (element.checked || element.selected){
                
                for (e in L ){
                    try{
                        var El=document.getElementById(L[e]);   
                        // console.log(El)
                        El.disabled=false;
                     
                    }catch(err){
                        console.log(err);
                    }   
                }
            }else{
                for (e in L){
                    try{
                        var El=document.getElementById(L[e]);
                        El.disabled="disabled";
                        try{El.checked=false; }catch{};        
                        Disable(El)  ;
                        
                    }catch(err){
                        console.log(err);
                    }
                    
                }
            }
    }
}




function Cancel(){
    var E
    
    for(E in funct){
        
        var Xe=document.getElementById(E);
        try{
            Xe.checked=false;
            Disable(Xe);
        }catch(err){
            console.log(err);
        };
        
    };
}






