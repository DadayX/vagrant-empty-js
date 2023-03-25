$(document).ready(function(){
function addData(id,flow,data){
   console.log("data=>"+data);
    var res="";
    $.ajax({
        url:"API/"+flow+".php",
        type:"POST",
        data:"id="+id+"&"+data,
        dataType:"JSON",
        success:function(data){
            if(data.status=="0"){
                res="Insertion reussi.";
                //alert(res);
                $(".modal-body").html(res);
                $("#okModal").modal('show');
            }else{
                res="Erreur sur l'insertion";
                $(".modal-body").html(res);
                $("#errorModal").modal('show');
            }
        }
    });  
    return res;
}
/*DMCC process*/
function addNewDmccData(data){
    var res="";
    res=addData(1,"dmcc",data);
    return res;
}
function getDmccData(){
    var ident=1;
    $.ajax({
        url:"API/dmcc.php",
        type:"GET",
        data:"id="+ident,
        dataType:"JSON",
        success: function(data){
            var long=data.length;
            var tab=data;
            var i=0;
                var Nom="";  
                var Description="";
                var Prix_TTC=""  ;
                var Canal_d_achat="";   
                var limite_d_achat="";
                var Cumulabilite= "" ;
                var validite="";	   
                var Type_Promotion="";
                var Date_Fin="" ;	
                var Date_debut ="";

                var html="";
            for(i=0;i<long;i++){
                Nom =tab[i].Nom ;            
                Description=tab[i].Description ;  
                Prix_TTC=tab[i].Prix_TTC ; 
                Canal_d_achat=tab[i].Canal_d_achat;     
                limite_d_achat=tab[i].limite_d_achat ;
                Cumulabilite=tab[i].Cumulabilite   ;
                validite=tab[i].validite ;	   
                Type_Promotion=tab[i].Type_Promotion;
                Date_Fin=tab[i].Date_Fin ;  	
                Date_debut =tab[i].Date_debut ;	
                $("#res").html(Nom+"|"+Description+"</br>");
                html+="<tr>";
                html+="<td>"+Nom+"</td>";
                html+="<td>"+Description+"</td>";
                html+="<td class='process'>"+Prix_TTC+"</td>";
                html+="<td>"+Canal_d_achat+"</td>";
                html+="<td>"+limite_d_achat+"</td>";
                html+="<td>"+Cumulabilite+"</td>";
                html+="<td>"+validite+"</td>";
                html+="<td>"+Type_Promotion+"</td> ";                                    
                html+="<td>"+Date_Fin+"</td>";
                html+="<td>"+Date_debut+"</td>";
                html+="</tr>";
                $("#tableDmcc").html(html);
            }
            
        },
        error: function(data,status,error){
            console.log(error);
        }
    });
}
/*IN process*/
function showDataIN(id){
    var ident=id;
    if(id==1){
        $.ajax({
            url:"API/in.php",
            type:"GET",
            data:"id="+id,
            dataType:"JSON",
            success: function(data){
                var long=data.length;
                var i=0;
                    var Refill_Profile_ID="";
                    var offerId="";
                    var ChargingIndicator="";
                    var Nom_IN="";
                    var Type_Validite="";
                    var Renouvellement_Auto="";
                    var myUsage="";
                
                for(i=0;i<long;i++){
                    Refill_Profile_ID=data[i].Refill_Profile_ID;
                    offerId=data[i].offerId;
                    ChargingIndicator=data[i].ChargingIndicator;
                    Nom_IN=data[i].Nom_IN;
                    Type_Validite=data[i].Type_Validite;
                    Renouvellement_Auto=data[i].Renouvellement_Auto;
                    myUsage=data[i].myUsage;
                    $("#res").html(Refill_Profile_ID+"|"+offerId+"</br>");
                }
                
            },
            error: function(data,status,error){
                $("#res").append(error);
            }
        });
    }else{
        $.ajax({
            url:"API/in.php",
            type:"GET",
            data:"id="+id,
            dataType:"JSON",
            success: function(data){
                var long=data.length;
                var i=0;
                    var Da_Id="";
                    var offerId="";
                    var mytype="";
                    var nom="";
                    var myusage="";
                    var description="";
                    var da_quantity="";
                    var da_validity="";
                    var friends_Family="";
                    var html="";
                for(i=0;i<long;i++){
                    Da_Id=data[i].Da_Id;
                    offerId=data[i].offerId;
                    mytype=data[i].mytype;
                    nom=data[i].nom;
                    myusage=data[i].myusage;
                    description=data[i].description;
                    da_quantity=data[i].da_quantity;
                    da_validity=data[i].da_validity;
                    friends_Family=data[i].friends_Family;
                    $("#res").html(nom+"|"+description+"</br>");
                     html+="<tr>";
                     html+="<td>"+Da_Id+"</td>";
                     html+="<td class=\"process\">"+offerId+"</td>";
                     html+="<td>"+mytype+"</td>";
                     html+="<td>"+nom+"</td>";
                     html+="<td>"+myusage+"</td>";
                     html+="<td>"+description+"</td>";
                     html+="<td>"+da_quantity+"</td>";
                     html+="<td>"+da_validity+"</td> ";                                    
                     html+="<td>"+friends_Family+"</td>";
                     html+="<td>";
                     html+="<div class='table-data-feature'>";
                     html+="<button class='item' data-toggle='tooltip' data-placement='top' title='Modifier'  name='valider2' id='valider2'>";
                     html+="<i class='zmdi zmdi-edit' id='valider2'></i>";
                     html+="</button>";                                                     
                     html+="</div>";
                     html+="</td>";
                     html+="</tr><tr class='spacer'></tr>";
                
                }
                $("#tableDA").html(html);
            },
            error: function(data,status,error){
                $("#res").append(error);
            }
        });
    }
    
}
/*********Dedicated Account **********/
function addNewDA(data){
    var res="";
    res=addData(2,"in",data);
    return res;
}
function getDA(){
    showDataIN(2);
}

/*********subscription **************/
function addNewSubs(data){
    var res="";
    res=addData(1,"in",data);
    return res;
}
function getSubs(){
    showDataIN(1);
}


/*DWH*/
function validateNewSubs(data){
    var res="";
        res=addData(1,"dwh",data);
    return res;
}
function getDwhSubs(){
    $.ajax({
        url:"API/dwh.php",
        type:"GET",
        data:"id="+id,
        dataType:"JSON",
        success: function(data){
            var long=data.length;
            var i=0;
                var Refill_Profile_ID="";
                var offerId="";
                var ChargingIndicator="";
                var Nom_IN="";
                var Type_Validite="";
                var Renouvellement_Auto="";
                var myUsage="";
                var ID_dwh="";
            
            for(i=0;i<long;i++){
                Refill_Profile_ID=data[i].Refill_Profile_ID;
                offerId=data[i].offerId;
                ChargingIndicator=data[i].ChargingIndicator;
                Nom_IN=data[i].Nom_IN;
                Type_Validite=data[i].Type_Validite;
                Renouvellement_Auto=data[i].Renouvellement_Auto;
                myUsage=data[i].myUsage;
                ID_dwh=data[i].ID_dwh;
                $("#res").html(Refill_Profile_ID+"|"+offerId+"</br>");
            }
            
        },
        error: function(data,status,error){
            $("#res").append(error);
        }
    });
}
    
 ////////////////////////////////////////MAIN CODE/////////////////////////////////////////
    getDmccData();
    showDataIN(2);
    //DMCC Form
    $("#formulaire1").submit(function(e){
        e.preventDefault();
        //var donnees=$(this).serialize();
        //alert(donnees);
        $("#confirmModal").modal('show');
       
     
    });
    $("#validerDmcc").click(function(){
        var donnees=$("#formulaire1").serialize();
        addNewDmccData(donnees);
        $("#confirmModal").modal('dispose');
        $("#res").html("");
    });
    $("#fermer").click(function(){
        var url="DA.html"
        $( location ).attr("href", url);
    });



    //IN_SOUS Form
    $("#formulaire2").submit(function(e){
        e.preventDefault();
        var donnees=$(this).serialize();
        addNewSubs(donnees);
        $("#res").html("");
       
     
    });

///////////////////////////////////////////////    IN_DA Form //////////////////////////////////////////
    $("#formulaire3").submit(function(e){
        e.preventDefault();
        $("#confirmModalDA").modal('show');   
    });


    $("#validerDA").click(function(){
        var donnees=$("#formulaire3").serialize();
        addNewDA(donnees);
        $("#confirmModalDA").modal('dispose');
        $("#res").html("");
        $("#tableDA").html("");
        showDataIN(2);
    });
    
    $("#newDA").click(function(e){
        e.preventDefault();
        $("#AddDAModal").modal('show');
    });

    $("td#valider2").click(function(e){
        e.preventDefault();
        alert("test");
        //$("#UpdateDAModal").modal('show');
    });


    //DWH Form
    $("#formulaire4").submit(function(e){
        e.preventDefault();
        var donnees=$(this).serialize();
        validateNewSubs(donnees);
        $("#res").html("");
     
    });
});