 //map javascript file
 var map, infoWindow;


 	function initMap() {
      	var loc_sstat = {lat: 42.352271, lng: -71.05524200000001} //South station
      	var loc_andrw = {lat: 42.330154, lng: -71.057655} //Andrew
      	var loc_portr = {lat: 42.3884, lng: -71.11914899999999} //Porter
      	var loc_harsq = {lat: 42.373362, lng: -71.118956} //Harvard
      	var loc_jfk = {lat: 42.320685, lng: -71.052391}   //JFK
      	var loc_shmnl = {lat: 42.31129, lng: -71.053331} //Savin Hill
      	var loc_pktrm = {lat: 42.35639457, lng: -71.0624242} //Park Street
      	var loc_brdwy = {lat: 42.342622, lng: -71.056967} //Broadway
      	var loc_nqncy = {lat: 42.275275, lng: -71.029583} //North Quincy
      	var loc_smmnl = {lat: 42.29312583, lng: -71.06573796000001} //Shawmut
      	var loc_davis = {lat: 42.39674, lng: -71.121815} //Davis
      	var loc_alfcl = {lat: 42.395428, lng: -71.142483} //Alewife
      	var loc_knncl = {lat: 42.36249079, lng: -71.08617653} //Kendall MIT
      	var loc_chmnl = {lat: 42.361166, lng: -71.070628} //Charles/MGH
      	var loc_dwnxg = {lat: 42.355518, lng: -71.060225} //Downtown Crossing
      	var loc_qnctr = {lat: 42.251809, lng: -71.005409} //Quincy Center
      	var loc_qamnl = {lat: 42.233391, lng: -71.007153} //Quincy Adams
      	var loc_asmnl = {lat: 42.284652, lng: -71.06448899999999} //Ashmont
      	var loc_wlsta = {lat: 42.2665139, lng: -71.0203369} //Wollaston
      	var loc_fldcr = {lat: 42.300093, lng: -71.061667} //Fields Corner
      	var loc_cntsq = {lat: 42.365486, lng: -71.103802} //Central Square
      	var loc_brntn = {lat: 42.2078543, lng: -71.0011385} //Braintree
       
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.352271, lng: -71.05524200000001},
          zoom: 14
        });

        infoWindow = new google.maps.InfoWindow;

        var stop_icon = {
        	url: 'https://cdn1.iconfinder.com/data/icons/anchor/128/train.png',
        	scaledSize: new google.maps.Size(35,35)
        	//origin: new google.maps.Point(0,0),
        	//anchor: new google.maps.Point(0,0)
        };
        var sstat = new google.maps.Marker({
        	position: loc_sstat,
        	map: map,
        	icon: stop_icon,
        	title: 'South Station'
        });

        var andrw = new google.maps.Marker({
        	position: loc_andrw,
        	map: map,
        	icon: stop_icon,
        	title: 'Andrew'
        });

        var portr = new google.maps.Marker({
        	position: loc_portr,
        	map: map,
        	icon: stop_icon,
        	title: 'Porter Square'
        });

        var harsq = new google.maps.Marker({
        	position: loc_harsq,
        	map: map,
        	icon: stop_icon,
        	title: 'Harvard Square'
        });

         var jfk = new google.maps.Marker({
        	position: loc_jfk,
        	map: map,
        	icon: stop_icon,
        	title: 'JFK/UMass'
        });

         var shmnl = new google.maps.Marker({
        	position: loc_shmnl,
        	map: map,
        	icon: stop_icon,
        	title: 'Savin Hill'
        });
        var pktrm = new google.maps.Marker({
        	position: loc_pktrm,
        	map: map,
        	icon: stop_icon,
        	title: 'Park Street'
        });
        var brdwy = new google.maps.Marker({
        	position: loc_brdwy,
        	map: map,
        	icon: stop_icon,
        	title: 'Broadway'
        });
        var nqncy = new google.maps.Marker({
        	position: loc_nqncy,
        	map: map,
        	icon: stop_icon,
        	title: 'North Quincy'
        });
        var smmnl = new google.maps.Marker({
        	position: loc_smmnl,
        	map: map,
        	icon: stop_icon,
        	title: 'Shawmut'
        });
        var davis = new google.maps.Marker({
        	position: loc_davis,
        	map: map,
        	icon: stop_icon,
        	title: 'Davis'
        });
        var alfcl = new google.maps.Marker({
        	position: loc_alfcl,
        	map: map,
        	icon: stop_icon,
        	title: 'Alewife'
        });
        var knncl = new google.maps.Marker({
        	position: loc_knncl,
        	map: map,
        	icon: stop_icon,
        	title: 'Kendall'
        });
        var chmnl = new google.maps.Marker({
        	position: loc_chmnl,
        	map: map,
        	icon: stop_icon,
        	title: 'Charles/MGH'
        });
        var dwnxg = new google.maps.Marker({
        	position: loc_dwnxg,
        	map: map,
        	icon: stop_icon,
        	title: 'Downtown Crossing'
        });
        var qnctr = new google.maps.Marker({
        	position: loc_qnctr,
        	map: map,
        	icon: stop_icon,
        	title: 'Quincy Center'
        });
        var qamnl = new google.maps.Marker({
        	position: loc_qamnl,
        	map: map,
        	icon: stop_icon,
        	title: 'Quincy Adams'
        });
        var asmnl = new google.maps.Marker({
        	position: loc_asmnl,
        	map: map,
        	icon: stop_icon,
        	title: 'Ashmont'
        });
        var wlsta = new google.maps.Marker({
        	position: loc_wlsta,
        	map: map,
        	icon: stop_icon,
        	title: 'Wollaston'
        });
        var fldcr = new google.maps.Marker({
        	position: loc_fldcr,
        	map: map,
        	icon: stop_icon,
        	title: 'Fields Corner'
        });
        var cntsq = new google.maps.Marker({
        	position: loc_cntsq,
        	map: map,
        	icon: stop_icon,
        	title: 'Central Square'
        });
        var brntn = new google.maps.Marker({
        	position: loc_brntn,
        	map: map,
        	icon: stop_icon,
        	title: 'Braintree'
        });

        var redline_braintree = [
        {lat: 42.395428, lng: -71.142483}, //Alewife    
        {lat: 42.39674, lng: -71.121815}, //Davis
        {lat: 42.3884, lng: -71.11914899999999}, //Porter
        {lat: 42.373362, lng: -71.118956}, //Harvard
        {lat: 42.365486, lng: -71.103802}, //Central Square
        {lat: 42.36249079, lng: -71.08617653}, //Kendall MIT
        {lat: 42.361166, lng: -71.070628}, //Charles/MGH
        {lat: 42.35639457, lng: -71.0624242}, //Park Street
        {lat: 42.355518, lng: -71.060225}, //Downtown Crossing
        {lat: 42.352271, lng: -71.05524200000001}, //South station
        {lat: 42.342622, lng: -71.056967}, //Broadway
        {lat: 42.330154, lng: -71.057655}, //Andrew
        {lat: 42.320685, lng: -71.052391},   //JFK
        {lat: 42.275275, lng: -71.029583}, //North Quincy
        {lat: 42.2665139, lng: -71.0203369}, //Wollaston
        {lat: 42.251809, lng: -71.005409}, //Quincy Center
        {lat: 42.233391, lng: -71.007153}, //Quincy Adams
        {lat: 42.2078543, lng: -71.0011385} //Braintree
        ];

        var redline_ashmont = [
        {lat: 42.320685, lng: -71.052391},   //JFK
        {lat: 42.31129, lng: -71.053331}, //Savin Hill
        {lat: 42.300093, lng: -71.061667}, //Fields Corner
        {lat: 42.29312583, lng: -71.06573796000001},//Shawmut
        {lat: 42.284652, lng: -71.06448899999999} //Ashmont
        ];

        var redline = new google.maps.Polyline({
        	path: redline_braintree,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });

        var redline_2 = new google.maps.Polyline({
            path: redline_ashmont,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
        
        redline.setMap(map);
        redline_2.setMap(map);
        console.log ("uno");
        console.log ("hit me hard one!");

        if (navigator.geolocation) { //getting location
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            _lat = position.coords.latitude; //position as an int
            _long = position.coords.longitude;
            
            var your_coord = new google.maps.LatLng(_lat, _long);


           	var davistest = new google.maps.LatLng(42.39674, -71.121815);
           	var sstat_test = new google.maps.LatLng(42.352271, -71.05524200000001); //South station
      		var andrw_test = new google.maps.LatLng(42.330154, -71.057655) //Andrew
      		var portr_test = new google.maps.LatLng(42.3884, -71.11914899999999) //Porter
      		var harsq_test = new google.maps.LatLng(42.373362, -71.118956) //Harvard
      		var jfk_test = new google.maps.LatLng(42.320685, -71.052391)   //JFK
      		var shmnl_test = new google.maps.LatLng(42.31129, -71.053331) //Savin Hill
      		var pktrm_test = new google.maps.LatLng(42.35639457, -71.0624242) //Park Street
      		var brdwy_test = new google.maps.LatLng(42.342622, -71.056967) //Broadway
      		var nqncy_test = new google.maps.LatLng(42.275275, -71.029583) //North Quincy
      		var smmnl_test = new google.maps.LatLng(42.29312583, -71.06573796000001) //Shawmut
	      	var alfcl_test = new google.maps.LatLng(42.395428, -71.142483) //Alewife
	      	var knncl_test = new google.maps.LatLng(42.36249079, -71.08617653) //Kendall MIT
	      	var chmnl_test = new google.maps.LatLng(42.361166, -71.070628) //Charles/MGH
	      	var dwnxg_test = new google.maps.LatLng(42.355518, -71.060225) //Downtown Crossing
	      	var qnctr_test = new google.maps.LatLng(42.251809, -71.005409) //Quincy Center
	      	var qamnl_test = new google.maps.LatLng(42.233391, -71.007153) //Quincy Adams
	      	var asmnl_test = new google.maps.LatLng(42.284652, -71.06448899999999) //Ashmont
	      	var wlsta_test = new google.maps.LatLng(42.2665139, -71.0203369) //Wollaston
	      	var fldcr_test = new google.maps.LatLng(42.300093, -71.061667) //Fields Corner
	      	var cntsq_test = new google.maps.LatLng(42.365486, -71.103802) //Central Square
      		var brntn_test = new google.maps.LatLng(42.2078543, -71.0011385) //Braintree

      		var markers =[
      		davistest, //0
      		sstat_test, //1
      		andrw_test, //2
      		portr_test, //3
      		harsq_test, //4
      		jfk_test,//5
      		shmnl_test,//6
      		pktrm_test,//7
      		brdwy_test,//8
      		nqncy_test,//9
      		smmnl_test,//10
      		alfcl_test,//11
      		knncl_test,//12
      		chmnl_test,//13
      		dwnxg_test,//14
      		qnctr_test,//15
      		qamnl_test,//16
      		asmnl_test,//17
      		wlsta_test,//18
      		fldcr_test,//19
      		cntsq_test,//20
      		brntn_test//21
      		];

      		var distances =[]
      		var i;
      		for (i = 0; i < markers.length; i++){
      			distances[i] = google.maps.geometry.spherical.computeDistanceBetween(your_coord, markers[i]);
      		}
      			var smallest_index = 0;
      		for (j = 0; j < distances.length; j++){
      			console.log("we are in iteration " + j)
      			console.log("smallest index is " + smallest_index);
      			console.log("the distance right now is " + distances[j])
      			if(distances[smallest_index] > distances[j+1]){
      				smallest_index = j+1;
      			}

      			else{
      			
      			}
      		}

      		var closest_station;
      		if (smallest_index == 0){
      			closest_station = "Davis";
      		}

      		else if (smallest_index == 1){
      			closest_station = "South Station";
      		}

      		else if (smallest_index == 2){
      			closest_station = "Andrew";
      		}
      		else if (smallest_index == 3){
      			closest_station = "Porter Square";
      		}
      		else if (smallest_index == 4){
      			closest_station = "Harvard";
      		}
      		else if (smallest_index == 5){
      			closest_station = "JFK/UMass";
      		}
      		else if (smallest_index == 6){
      			closest_station = "Savin Hill";
      		}
      		else if (smallest_index == 7){
      			closest_station = "Park Street";
      		}
      		else if (smallest_index == 8){
      			closest_station = "Broadway";
      		}
      		else if (smallest_index == 9){
      			closest_station = "North Quincy";
      		}
      		else if (smallest_index == 10){
      			closest_station = "Shawmut";
      		}
      		else if (smallest_index == 11){
      			closest_station = "Alewife";
      		}
      		else if (smallest_index == 12){
      			closest_station = "Kendall/MIT";
      		}
      		else if (smallest_index == 13){
      			closest_station = "Charles/MGH";
      		}
      		else if (smallest_index == 14){
      			closest_station = "Downtown Crossing";
      		}
      		else if (smallest_index == 15){
      			closest_station = "Quincy Central";
      		}
      		else if (smallest_index == 16){
      			closest_station = "Quincy Adams";
      		}
      		else if (smallest_index == 17){
      			closest_station = "Ashmont";
      		}
      		else if (smallest_index == 18){
      			closest_station = "Wollaston";
      		}
      		else if (smallest_index == 19){
      			closest_station = "Fields Corner";
      		}
      		else if (smallest_index == 20){
      			closest_station = "Central Square";
      		}
      		else if (smallest_index == 21){
      			closest_station = "Braintree";
      		}
      		console.log("the smallest index is" + smallest_index);
      		console.log(google.maps.geometry.spherical.computeDistanceBetween(your_coord, markers[21]));

      		console.log(distances[0]);
           	console.log ("hi hi hi");
         
            console.log (_lat);
            console.log (pos);

            
            infoWindow.open(map);
            map.setCenter(pos);
          var you = new google.maps.Marker({
          	position: pos,
        	map: map,
        	title: 'Your Location'
        });
          var shortest_path = [
          pos,   
          markers[smallest_index]
          ];
          
          var shortest_path_line = new google.maps.Polyline({
        	path: shortest_path,
            geodesic: true,
            strokeColor: '#417dc1',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });

          shortest_path_line.setMap(map);
          
          console.log(google.maps.geometry.spherical.computeDistanceBetween(your_coord, davistest));

          you.addListener('click', function(){
          	infoWindow.setPosition(pos);
            infoWindow.setContent("The closest T station is " + closest_station);
          });

//pos expires here
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });

          
        
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }

        
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
    
        
      