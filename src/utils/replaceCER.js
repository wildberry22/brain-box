const replaceCER = (str) => {
  return str
    .replaceAll("&quot;", '"')
    .replaceAll("&#039;", "'")
    .replaceAll("&rsquo;", "'")
    .replaceAll("&amp;", "&")
    .replaceAll("&ocirc;", "ô")
    .replaceAll("&uuml;", "ü")
    .replaceAll("&eacute;", "É");
};

export default replaceCER;