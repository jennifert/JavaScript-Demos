require.config({
    paths: {
        'jquery': 'http://ajax.aspnetcdn.com/ajax/jquery/jquery-1.8.3',
        'jquery.bootstrap': 'http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min',
        'async': 'async',
        'goog': 'goog',
        'propertyParser' : 'propertyParser'
    },
    shim: { 
        'jquery.bootstrap': ['jquery']
    }
});

require(['jquery','jquery.bootstrap','goog!maps,3,other_params:sensor=false'], function($) {
     var myLatlng = new google.maps.LatLng(43.65644,-79.380686);

    $(function() {
        
        //start of modal google map
      $('#mapmodals').on('shown.bs.modal', function () {
        var mapOptions = {
              center: myLatlng,
              zoom: 14,
              mapTypeControl: false,
              center:myLatlng,
              panControl:false,
              rotateControl:false,
              streetViewControl: false,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(document.getElementById("map_canvas"),
                mapOptions);
      
            var contentString = '<div id="mapInfo">'+
            '<p><strong>Cineplex Odeon Yong & Dundas</strong><br>'+
            'Suite 402<br>10 Dundas Street East<br>' +
            'Toronto, ON<br>'+
            'P: (416) 977-9262</p>'+
            '<a href="http://www.google.ca/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&ved=0CF4QFjAA&url=http%3A%2F%2Fwww.cineplex.com%2FTheatres%2FTheatreDetails%2FCineplex-Odeon-Yonge-Dundas-Cinemas-formerly-AMC-.aspx&ei=wVxnUdfWM8GtqgGc5YGoCQ&usg=AFQjCNFrLpCFDXGjtGx6y1GSkSNvhdrMpA&bvm=bv.45107431,d.aWM" target="_blank">Now Playing</a>'+
            '</div>';

          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          
          var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title:"Cineplex Odeon Yong & Dundas",
                  maxWidth: 200,
                  maxHeight: 200
          });


          google.maps.event.addListener(marker, 'click', function() {
             infowindow.open(map,marker);
          });

          google.maps.event.addDomListener(window, 'load');
          google.maps.event.trigger(map, "resize");
          map.setCenter(myLatlng);
      });
      //end of modal google map
    }); //end jquery functions
});