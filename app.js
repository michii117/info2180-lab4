var httpRequest = new XMLHttpRequest();
var url = "http://localhost/info2180-lab4/superheroes.php";

window.addEventListener("load", (event) =>{

    var searchBTN= document.getElementById("searchBTN");

    searchBTN.addEventListener("click", (event) =>{

        event.preventDefault();
        var searchHero = document.querySelector('input[name="searchHero"]').value;


        if(searchHero==""){
            url= url + "?query=default";

        }else{
            var name= searchHero.split(" ");
            var output= "";

            for (i=0; i< name.length; i++){
                output= output + name[i] + "%20";
            }

            searchHero = output.slice(0, -3);
            url= url + "?query=" + searchHero;


        }


        
        httpRequest.onreadystatechange = function(){
            if (httpRequest.readyState === XMLHttpRequest.DONE){
                if (httpRequest.status === 200) {
                    var response = httpRequest.responseText;
                    var resultdiv= document.getElementById("result");
                    resultdiv.innerHTML=response;

                    

                    
                    
                } else {
                    alert('There was a problem with the request.');
                }
            } 
        }

        httpRequest.open('Get', url, true);
        httpRequest.send();
        url = "http://localhost/info2180-lab4/superheroes.php";
    });
});
