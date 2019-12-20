function canviaMides() {
    ////////////////////////////////////////////////////
    //Primer de tot, canviem l'ample de les columnes
    
    let midaCol1;
    let midaCol2;
    let midaCol3;
    
    //Per les columnes 1 i 2 busquem un valor a l'atzar entre 0 i 250
    midaCol1 = Math.random() * 250;
    midaCol2 = Math.random() * 250;
    //I a la tercera columna li donem la resta fins arribar a 500
    midaCol3 = 500 - midaCol1 - midaCol2;
    
//    Exemple amb javascript pur
//    document.getElementById("col1").style.width = midaCol1;
//    document.getElementById("col2").style.width = midaCol2;
//    document.getElementById("col3").style.width = midaCol3;
    
    // El mateix d'adalt però amb jQuery
    $("#col1").css("width", midaCol1+"px") ;
    $("#col2").css("width", midaCol2+"px" ) ;
    $("#col3").css("width", midaCol3+"px") ;
    
    
    ////////////////////////////////////////////////////
    // Ara canviem l'alçada de les imatges de la col 1
    
    let midaCol1Fil1;
    let midaCol1Fil2;
    let midaCol1Fil3;
    
    //Les imatges 1 i 2 tindran una alçada d'entre 0 i 45%
    midaCol1Fil1 = Math.random() * 45;
    midaCol1Fil2 = Math.random() * 45;
    //I la tercera imatge, la resta fins arribar al 100%
    midaCol1Fil3 = 100 - midaCol1Fil1 - midaCol1Fil2;
    
    $("#col1fil1").css("height", midaCol1Fil1+"%") ;
    $("#col1fil2").css("height", midaCol1Fil2+"%" ) ;
    $("#col1fil3").css("height", midaCol1Fil3+"%") ;
    
    
    ////////////////////////////////////////////////////
    // Ara canviem l'alçada de les imatges de la col 2
    
    let midaCol2Fil1;
    let midaCol2Fil2;
    let midaCol2Fil3;
    
    midaCol2Fil1 = Math.random() * 45;
    midaCol2Fil2 = Math.random() * 45;
    midaCol2Fil3 = 100 - midaCol2Fil1 - midaCol2Fil2;
    
    $("#col2fil1").css("height", midaCol2Fil1+"%") ;
    $("#col2fil2").css("height", midaCol2Fil2+"%" ) ;
    $("#col2fil3").css("height", midaCol2Fil3+"%") ;
    
    
    ////////////////////////////////////////////////////
    // Ara canviem l'alçada de les imatges de la col 3
    
    let midaCol3Fil1;
    let midaCol3Fil2;
    let midaCol3Fil3;
    
    midaCol3Fil1 = Math.random() * 45;
    midaCol3Fil2 = Math.random() * 45;
    midaCol3Fil3 = 100 - midaCol3Fil1 - midaCol3Fil2;
    
    $("#col3fil1").css("height", midaCol3Fil1+"%") ;
    $("#col3fil2").css("height", midaCol3Fil2+"%" ) ;
    $("#col3fil3").css("height", midaCol3Fil3+"%") ;   
}

//Primer de tot, cridem a la nostra funció per què ens calculi les mides quan obrim la pàgina
canviaMides();

//I després, li diem que cada segón ens ho torni a fer
setInterval( canviaMides, 1000 );