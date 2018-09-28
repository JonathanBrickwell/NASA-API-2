var url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-01-01&end_date=2018-01-07&api_key=oAbFeFwglLmUTUFWWYHXm1Xy61sSZmROULa45j72"; 

$(document).ready(function(){


      $.ajax({
        url: url,
        data: 'json',
        success: function(result){

        var objects = result.near_earth_objects;

        // Prolazak kroz json objekt pomoću petlje.
        // Pristupanje prvog djetetu u objektu pomoću value[1].name.
        $.each(objects, function(index, value){
          
          $("table tbody").append("<tr><td>" + value[1].name + "</td><td>" 
          + value[1].is_potentially_hazardous_asteroid + "</td><td>"
          + value[1].estimated_diameter.meters.estimated_diameter_min + " m" + "</td><td>"
          + value[1].estimated_diameter.meters.estimated_diameter_max + " m" + "</td><td>");
        });
      }
      });

});

