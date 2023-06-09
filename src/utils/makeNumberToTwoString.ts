const makeNumberToTwoString = (number: number) => {
  return number.toString().padStart(2, "0");
};

export default makeNumberToTwoString;
