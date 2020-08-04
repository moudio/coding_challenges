const locations = [
  ['A', 'B', 'C'],
  ['B', 'A', 'D'],
  ['C', 'Y', 'Z'],
  ['X', 'A', 'B', 'C'],
];

const myLocations = ['A', 'D', 'B', 'E', 'C'];

function find_travel_buddies(myLocations, usersLocations) {
  //loop through each user's locations
  //compare each of those locations with the other user
  //if they share more than half of myLocations, they are travel
  //buddies
  //store their indexes in a buddies array

  //return the buddies array
  const buddies = [];
  usersLocations.forEach((userLocation, index) => {
    if (compareLocations(userLocation, myLocations)) {
      buddies.push(index);
    }
  });

  return buddies;
}

function compareLocations(userLocation, myLocations) {
  const result = userLocation.filter((destination) => {
    return myLocations.includes(destination);
  });
  if (Math.floor(myLocations.length / 2) < result.length) {
    return true;
  }
  return false;
}

console.log(find_travel_buddies(myLocations, locations));
