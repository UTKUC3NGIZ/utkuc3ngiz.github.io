const ip_address = document.getElementById("ip_address");
const ip_location = document.getElementById("ip_location");
const ip_timezone = document.getElementById("ip_timezone");
const ip_isp = document.getElementById("ip_isp");

$.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
  users_ip = data.trim().split('\n').reduce(function(obj, pair) {
    pair = pair.split('=');
    return obj[pair[0]] = pair[1], obj;
  }, {});

  var ip = users_ip.ip;
var api_key = "at_G3F4JGE4ZvM1KkfS5RmykDAxLMWQJ";
$(function () {
  $.ajax({
    url: "https://geo.ipify.org/api/v1",
    data: { apiKey: api_key, ipAddress: ip },
    success: function (data) {
      $("#ip_address").html(JSON.stringify(data.ip, "", 2));
      $("#ip_location").html(
        JSON.stringify(
          `${data.location.city}, ${data.location.region} ${data.location.geonameId}`
        )
      );
      $("#ip_timezone").html(JSON.stringify(data.location.timezone, "", 2));
      $("#ip_isp").html(JSON.stringify(data.isp, "", 2));

      var map = L.map("map").setView([data.location.lat, data.location.lng], 18);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      var icon_location = L.icon({
        iconUrl: "assets/images/icon-location.svg",
      });

      var marker = L.marker([data.location.lat, data.location.lng], { icon: icon_location }).addTo(map);
    },
  });
});
});

// let DENEME = document.getElementsByTagName("label")[0]

// DENEME.addEventListener("click",() =>{
//     console.log(document.getElementsByTagName("input")[0].value);
// })
