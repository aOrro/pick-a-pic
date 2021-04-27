const capitalizeFirstLetter = word => {
  return word.replace(/^\w/, word => word.toUpperCase());
};

export default capitalizeFirstLetter;
