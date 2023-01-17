// const axious = require("axios");

// const HttpError = require("../models/http-error");

// const API_KEY = "AIzaSyDQfctlBGhAnCFYAkk8rRj3CFod_vxZDKg";
// async
function getCoordsForAddress() {
  return {
    lat: 40.7484,
    lng: -73.9871,
  };

  // const response = await axious.get(
  //   `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
  //     address
  //   )}&key=${API_KEY}`
  // );

  // const data = response.data;
  // if (!data || data.status === "ZERO_RESULLTS") {
  //   const error = new HttpError(
  //     "Could not find location for the specified address.",
  //     422
  //   );
  //   throw error;
  // }
  // const coordinates = data.results[0].geometry.location;
  // return coordinates;
}

module.exports = getCoordsForAddress;
