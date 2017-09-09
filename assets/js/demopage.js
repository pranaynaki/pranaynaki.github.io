
var url;
function geturl() {
    url = document.getElementById("inputurl").value;
    //alert(url);
}

$("#getreq").click(function(){
    $("#msg").hide('slow');
    geturl();
    if(url === "") url = "https://cdn.preterhuman.net/texts/literature/books_by_title/G%20-%20M/JK%20Rowling%20-%20(2)%20Harry%20Potter%20and%20the%20Chamber%20of%20Secrets%2087000%20words.txt";
    
    $.get("http://54.172.144.234", {str: url}, function(data, status){
        $("#msg").html(data);
        $("#msg").show("slowly");
    });
    

});