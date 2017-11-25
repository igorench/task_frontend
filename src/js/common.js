document.addEventListener('DOMContentLoaded', function(){
    var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 52.43063965 , lng: 16.93203807},
            zoom: 16
        });
    }
    initMap();
    var marker = new google.maps.Marker({
        position: {lat: 52.43063965 , lng: 16.93203807},
        map: map,
        title:"This is our place!"
    });
});

