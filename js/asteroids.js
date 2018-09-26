
//var url = "https://api.nasa.gov/planetary/apod?api_key=oAbFeFwglLmUTUFWWYHXm1Xy61sSZmROULa45j72";

var url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-01-01&end_date=2018-01-07&api_key=oAbFeFwglLmUTUFWWYHXm1Xy61sSZmROULa45j72"; 

$(document).ready(function(){

    $.ajax({
        url: url,
        success: function(result){
        if("copyright" in result) {
          $("#copyright").text("Image Credits: " + result.copyright);
        }
        else {
          $("#copyright").text("Image Credits: " + "Public Domain");
        }
        
        if(result.media_type == "video") {
          $("#apod_img_id").css("display", "none"); 
          $("#apod_vid_id").attr("src", result.url);
        }
        else {
          $("#apod_vid_id").css("display", "none"); 
          $("#apod_img_id").attr("src", result.url);
        }
        $("#reqObject").text(url);
        $("#returnObject").text(JSON.stringify(result, null, 4));  
        $("#apod_explaination").text(result.explanation);
        $("#apod_title").text(result.title);
        $('#apod_date').text(result.date);
      }
      });

});

