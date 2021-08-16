
function val(ss){
    var result=ss.split("_"); //string to array convertion using split
    if(result[4]=='Donate-now'){
    document.getElementById("heading").style.display="flex";
    document.getElementById("sidebar").style.display="none";
    document.getElementById("mainbar").style.display="none";
    
    }else if(result[4]=='give-products'){
        document.getElementById("heading").style.display="none";
        document.getElementById("sidebar").style.display="flex";
        document.getElementById("mainbar").style.display="none";
        
    }else if(result[4]=='disaster-relife'){
        document.getElementById("heading").style.display="none";
        document.getElementById("sidebar").style.display="none";
        document.getElementById("mainbar").style.display="flex";
    }
    
    }

