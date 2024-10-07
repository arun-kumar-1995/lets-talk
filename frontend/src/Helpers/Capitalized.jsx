const Capitalized = (string) => {
  const words = string.split(" ");
  return words.map((word) => word.charAt(0).toUpperCase());
};

export default Capitalized;
