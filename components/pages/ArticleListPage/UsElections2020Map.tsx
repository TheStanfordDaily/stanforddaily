import React from "react";
import Map from "google-map-react";

function renderMarkers(map, maps) {
  var locations = [
    [
      new maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 },
        map: map,
        icon:
          "https://wp.stanforddaily.com/wp-content/uploads/2020/11/DemocraticLogo-e1604241570153.png",
      }),
      "Jackie Fielder ’16 M.A. ’16",
      "Challenger — Calif. Senate District 11",
    ],
    [
      new maps.Marker({
        position: { lat: 44.9537, lng: -93.09 },
        map: map,
        icon:
          "https://wp.stanforddaily.com/wp-content/uploads/2020/11/DemocraticLogo-e1604241570153.png",
      }),
      "Tina Smith ’80",
      "Incumbent D-Minn.",
    ],
    [
      new maps.Marker({
        position: { lat: 41.7938, lng: -71.1449 },
        map: map,
        icon:
          "https://wp.stanforddaily.com/wp-content/uploads/2020/11/DemocraticLogo-e1604241570153.png",
      }),
      "Joe Kennedy ’03",
      "Incumbent — D-Mass. District 4",
    ],
    [
      new maps.Marker({
        position: { lat: 37.6393, lng: -120.997 },
        map: map,
        icon:
          "https://wp.stanforddaily.com/wp-content/uploads/2020/11/DemocraticLogo-e1604241570153.png",
      }),
      "Josh Harder ’08",
      "Incumbent — D-Calif. District 10",
    ],
    [
      new maps.Marker({
        position: { lat: 40.2206, lng: -74.7597 },
        map: map,
        icon:
          "https://wp.stanforddaily.com/wp-content/uploads/2020/11/DemocraticLogo-e1604241570153.png",
      }),
      "Cory Booker ’91 M.A. ’92",
      "Incumbent — D-N.J.",
    ],
    [
      new maps.Marker({
        position: { lat: 41.1489, lng: -73.983 },
        map: map,
        icon:
          "https://wp.stanforddaily.com/wp-content/uploads/2020/11/DemocraticLogo-e1604241570153.png",
      }),
      "Mondaire Jones ’09",
      "Challenger — N.Y. District 17",
    ],
    [
      new maps.Marker({
        position: { lat: 34.09, lng: -118.3617 },
        map: map,
        icon:
          "https://wp.stanforddaily.com/wp-content/uploads/2020/11/DemocraticLogo-e1604241570153.png",
      }),
      "Adam Schiff ’82",
      "Incumbent D-Calif. District 28",
    ],
    [
      new maps.Marker({
        position: { lat: 44.9429, lng: -123.0351 },
        map: map,
        icon:
          "https://wp.stanforddaily.com/wp-content/uploads/2020/11/DemocraticLogo-e1604241570153.png",
      }),
      "Jeff Merkley ’79",
      "Incumbent — D-Ore.",
    ],
    [
      new maps.Marker({
        position: { lat: 37.4337, lng: -122.4014 },
        map: map,
        icon:
          "https://wp.stanforddaily.com/wp-content/uploads/2020/11/DemocraticLogo-e1604241570153.png",
      }),
      "Josh Becker M.B.A. J.D. ’99",
      "Incumbent — Calif. Senate District 13",
    ],
    [
      new maps.Marker({
        position: { lat: 37.3337, lng: -121.8907 },
        map: map,
        icon:
          "https://wp.stanforddaily.com/wp-content/uploads/2020/11/DemocraticLogo-e1604241570153.png",
      }),
      "Zoe Lofgren ’70",
      "Incumbent — D-Calif. District 19",
    ],
    [
      new maps.Marker({
        position: { lat: 29.4201, lng: -98.5721 },
        map: map,
        icon:
          "https://wp.stanforddaily.com/wp-content/uploads/2020/11/DemocraticLogo-e1604241570153.png",
      }),
      "Joaquin Castro ’96",
      "Incumbent — D-Texas District 20",
    ],
    [
      new maps.Marker({
        position: { lat: 41.3014, lng: -83.4735 },
        map: map,
        icon:
          "https://wp.stanforddaily.com/wp-content/uploads/2020/11/republicans-303843_1280-removebg-preview-e1604241805998.png",
      }),
      "Anthony Gonzalez M.B.A. ’14",
      "Incumbent — R-Ohio District 16",
    ],
    [
      new maps.Marker({
        position: { lat: 40.001, lng: -75.8069 },
        map: map,
        icon:
          "https://wp.stanforddaily.com/wp-content/uploads/2020/11/DemocraticLogo-e1604241570153.png",
      }),
      "Chrissy Houlahan ’89",
      "Incumbent — D-Pa. District 6",
    ],
    [
      new maps.Marker({
        position: { lat: 33.7175, lng: -117.8311 },
        map: map,
        icon:
          "https://wp.stanforddaily.com/wp-content/uploads/2020/11/DemocraticLogo-e1604241570153.png",
      }),
      "Mike Levin ’01",
      "Incumbent — D-Calif. District 49",
    ],
    [
      new maps.Marker({
        position: { lat: 34.0522, lng: -118.2437 },
        map: map,
        icon:
          "https://wp.stanforddaily.com/wp-content/uploads/2020/11/DemocraticLogo-e1604241570153.png",
      }),
      "Ted Lieu ’91",
      "Incumbent — D-Calif. District 33",
    ],
  ];
  locations.forEach(location => {
    var infoWindow = new maps.InfoWindow({
      content:
        '<div id="content">' +
        '<h2 id="firstHeading" class="firstHeading" style="width:100%;margin-top:0.5em;margin-bottom:0.5em;">' +
        location[1] +
        "</h2></a>" +
        "<span>" +
        location[2] +
        "</span>" +
        "</div>",
      maxWidth: 300,
    });
    location[0].addListener("click", function() {
      infoWindow.open(map, location[0]);
    });
  });
}

export interface UsElections2020MapProps {
  mobile?: boolean;
}

export const UsElections2020Map: React.ElementType = () => {
  return (
    <Map
      bootstrapURLKeys={{ key: "AIzaSyCa4q2VcvTeoq6YdLxgOUhtTOVpdtVW7QA" }}
      defaultZoom={0}
      defaultCenter={{
        lat: 38.0,
        lng: -108.0,
      }}
      onGoogleApiLoaded={({ map, maps }) => {
        renderMarkers(map, maps);
      }}
    />
  );
};
