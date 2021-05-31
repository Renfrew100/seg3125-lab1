function selectTab(tab){
    document.getElementById('display1').style.display="none";
    document.getElementById('display2').style.display="none";
    document.getElementById('display3').style.display="none";
    
    document.getElementById('display' + tab).style.display="block";  
}
