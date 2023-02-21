const JsonStrigify = (data) => {
  const string = data.replace(/\n/g, " ");
  const final = string.replaceAll('"', "'");

  return final;
};

export default JsonStrigify;
