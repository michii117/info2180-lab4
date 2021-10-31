var httpRequest = new XMLHttpRequest();
var url = "http://localhost/info2180-lab4/superheroes.php";

window.addEventListener("load", (event) =>{

    var searchBTN= document.getElementById("searchBTN");

    searchBTN.addEventListener("click", (event) =>{

        event.preventDefault();
        
        httpRequest.onreadystatechange = function(){
            if (httpRequest.readyState === XMLHttpRequest.DONE){
                if (httpRequest.status === 200) {
                    var response = httpRequest.responseText;
                    alert(response);
                } else {
                    alert('There was a problem with the request.');
                }
            } 
        }

        httpRequest.open('Get', url, true);
        httpRequest.send();
        
    });
});


