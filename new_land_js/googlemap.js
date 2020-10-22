 google.maps.event.addDomListener(window, 'load', function() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: new google.maps.LatLng(55.77526,37.59705),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      navigationControl: false,
      scrollwheel: false,  //scroll zoom
scaleControl: false,      // scroll move
    draggable: false, 
      navigationControlOptions: { 
    style: google.maps.NavigationControlStyle.SMALL 
  }  
    });

    var infoWindow = new google.maps.InfoWindow;

    var onMarkerClick = function() {
      var marker = this;
      var latLng = marker.getPosition();
      infoWindow.setContent(marker.title);

      infoWindow.open(map, marker);
    };
    google.maps.event.addListener(map, 'click', function() {
      infoWindow.close();
    });
    
    var marker1 = new google.maps.Marker({
      map: map,
	  title: '<div class="title-map">улица Фадеева, дом 7, строение 1</div>',
      position: new google.maps.LatLng(55.77526,37.59705)
    });

    google.maps.event.addListener(marker1, 'click', onMarkerClick);
    

  });