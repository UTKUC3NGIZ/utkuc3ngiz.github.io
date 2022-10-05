const ip_address = document.getElementById("ip_address");
const ip_location = document.getElementById("ip_location");
const ip_timezone = document.getElementById("ip_timezone");
const ip_isp = document.getElementById("ip_isp");

$.get("https://www.cloudflare.com/cdn-cgi/trace", function (data) {
  var ip = data.ip;
  var api_key = "at_G3F4JGE4ZvM1KkfS5RmykDAxLMWQJ";
  let mapFunction = function (inputIp = ip) {
    $(function () {
      $.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: { apiKey: api_key, ipAddress: inputIp },
        success: function (data) {
          $("#ip_address").html(JSON.stringify(data.ip).replace(/\"/g, ""));
          $("#ip_location").html(
            JSON.stringify(
              `${data.location.city}, ${data.location.region} ${data.location.geonameId}`
            ).replace(/\"/g, "")
          );
          $("#ip_timezone").html(JSON.stringify(data.location.timezone, "", 2).replace(/\"/g, ""));
          $("#ip_isp").html(JSON.stringify(data.isp, "", 2).replace(/\"/g, ""));


          var map = L.map("map").setView(
            [data.location.lat, data.location.lng],
            18
          );

          L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution:
              '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          }).addTo(map);

          var icon_location = L.icon({
            iconUrl: "assets/images/icon-location.svg",
          });

          var marker = L.marker([data.location.lat, data.location.lng], {
            icon: icon_location,
          }).addTo(map);
          console.log(data)
        },
      });
    });
  };
  mapFunction();
  let clickButton = document.getElementsByTagName("label")[0];
  clickButton.addEventListener("click", () => {
    map.remove();
    mapFunction(document.getElementsByTagName("input")[0].value);
    let newMap = document.createElement("div");
    newMap.classList = "map_div";
    newMap.id = "map";
    document.body.appendChild(newMap);
    
  });
});


