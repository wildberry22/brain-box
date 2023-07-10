const replaceCER = (str) => {
  return str
    .replaceAll("&quot;", '"')
    .replaceAll("&rdquo;", "”")
    .replaceAll("&ldquo;", "“")
    .replaceAll("&#039;", "'")
    .replaceAll("&rsquo;", "'")
    .replaceAll("&shy;", " ")
    .replaceAll("&amp;", "&")
    .replaceAll("&pi;", "π")
    .replaceAll("&oacute;", "ó")
    .replaceAll("&ocirc;", "ô")
    .replaceAll("&Uuml;", "Ü")
    .replaceAll("&uuml;", "ü")
    .replaceAll("&aring;", "å")
    .replaceAll("&Eacute;", "É")
    .replaceAll("&eacute;", "é");
};

export default replaceCER;
