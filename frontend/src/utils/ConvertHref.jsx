const ConvertHref = (textStr) => {
  const words = textStr.trim().replace(/\s+/g, " ").split(" ");
  return words.map((word) => word.toLowerCase()).join("-");
};

export default ConvertHref;
