function geoFindMyLatitude() {

    const status = document.querySelector('#status-latitude');
  
    function success(position) {
      const latitude  = position.coords.latitude;
        
      status.textContent = `Latitude: ${latitude} °`;
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }

  function geoFindMyLongitude() {

    const status = document.querySelector('#status-longitude');
  
    function success(position) {
      const longitude = position.coords.longitude;
  
      status.textContent = `Longitude: ${longitude} °`;
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }

  function goBack(){
    window.history.go(-document.getElementById("nbpages").value)
  }

  function Copier(){
    navigator.clipboard.writeText(document.getElementById("textecopie").value).then(function(){
        alert("Copié !")
    }, function(){
        alert("Erreur lors de la copie")
    });
  }

  function Coller(){
    navigator.clipboard.readText().then(
        clipText => document.getElementById("textecolle").value = clipText);
  }
  
  document.querySelector('#latitude').addEventListener('click', geoFindMyLatitude);
  document.querySelector('#longitude').addEventListener('click', geoFindMyLongitude);

  document.querySelector('#reculer').addEventListener('click', goBack)

  document.querySelector('#copier').addEventListener('click', Copier)
  document.querySelector('#coller').addEventListener('click', Coller)