function largestCountryName(countyNames) {
  let result = "";
  let currLength = 0;

  for (let i = 0; i < countyNames.length; i++) {
    if (countyNames[i].length > currLength) {
      currLength = countyNames[i].length;
      result = countyNames[i];
    }
  }

  return result;
}

const countryNames = ["Australia", "Germany", "United States of America"];

let ans = largestCountryName(countryNames);
console.log(ans);
