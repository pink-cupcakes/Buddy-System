const getDistance = (lat1,lon1,lat2,lon2) => {
  let R = 3959;
  let dLat = deg2rad(lat2-lat1);
  let dLon = deg2rad(lon2-lon1); 
  let a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  let d = R * c;
  return d;
};

const deg2rad = (deg) => deg * (Math.PI/180);

// const dist = getDistance(37.423965, -122.056387, 37.408116, -121.759242);

module.exports.getDistance = getDistance