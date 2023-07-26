

function  fetchRandomImage () {

    var xhrRequest= new XMLHttpRequest();
    xhrRequest.onload=function(){
        // console.log(xhrRequest.response);
        var responseJSON=JSON.parse(xhrRequest.response);

        // console.log(responseJSON);
        var imageURL=responseJSON.message;

        let arr=imageURL.split('/');
    //     for(let i of arr){
    //         // console.log(i) ;
    //    }
       $('#breed').text(arr[4]);
        $('#dog-image').attr('src',imageURL);
    }

    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random', true);
    xhrRequest.send();



}




$('#fetch-dog-image-button').click(fetchRandomImage);
