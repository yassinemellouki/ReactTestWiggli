const getIdFromUrl = (url) => {
  const urlSplited = url.split("/");
  const ID = urlSplited[urlSplited.length - 2];
  return parseInt(ID);
};

export { getIdFromUrl };
