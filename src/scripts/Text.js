const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const convertMonthName = (month) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return months[month];
};

export { capitalize, convertMonthName };