//getMean util function to get an array of numbers and returns its mean.
//mean = sum_of_elements / length_of_array
export const getMean = (array: number[]): string => {
  const sum = array.reduce((a, b) => a + b, 0);
  return (sum / array.length).toFixed(3);
};

//getMedian util function to get an array of numbers and returns its median.
//to calculate median sort the array and send its middle element,
//if array's length is even then send mean of 2 middle elements
export const getMedian = (array: number[]): string => {
  array.sort((a, b) => a - b);
  let median;
  let length = array.length;

  if (length % 2 !== 0) {
    median = array[Math.floor(length / 2)];
  } else {
    const medianMiddleOne = array[length / 2 - 1];
    const medianMiddleTwo = array[length / 2];
    median = (medianMiddleOne + medianMiddleTwo) / 2;
  }
  return median.toFixed(3);
};

//getMode util function to get an array of numbers and returns its mode.
//mode is the element which occurs highest no. of times. there can be more than one mode
//to calculate mode find the element(s) having most frequency
//if no element is repeated then there is no mode
export const getMode = (array: number[]): string => {
  const frequencyObject: {
    [key: string]: number;
  } = {};
  array.forEach((elem) => {
    //if elem already exists in frequencyObject then increment its value by 1
    //otherwise create new key and set its value to 1
    if (!frequencyObject[elem]) {
      frequencyObject[elem] = 1;
    } else {
      frequencyObject[elem] = frequencyObject[elem] + 1;
    }
  });

  let modes: string[] = [];
  let maxFrequency = 0;
  //loop through frequencyObject to find the element(s) having most frequency
  for (const key in frequencyObject) {
    if (frequencyObject[key] > maxFrequency) {
      modes = [Number(key).toFixed(3)];
      maxFrequency = frequencyObject[key];
    } else if (frequencyObject[key] === maxFrequency) {
      modes.push(Number(key).toFixed(3));
    }
  }

  //if no element is repeated then modes array and frequencyObject's length will be same
  if (array.length === Object.keys(frequencyObject).length) {
    return 'N/A';
  }

  return modes?.join(', ');
};

//util function to calculate gamma.
export const calculateGamma = (
  ash: number,
  hue: number,
  magnesium: number
): number => {
  return Number(Number(((ash * hue) / magnesium)).toFixed(3));
};
