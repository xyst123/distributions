const dataURLtoBlob = (dataURL) => {
  const array = dataURL.split(',');
  const mime = array[0].match(/:(.*?);/)[1];
  const string = atob(array[1]);
  let { length } = string;
  const uint8Array = new Uint8Array(length);
  while (length--) {
    uint8Array[length] = string.charCodeAt(length);
  }
  return new Blob([uint8Array], { type: mime });
};

const saveImage = (dataURL, name) => {
  const blob = dataURLtoBlob(dataURL);
  const objectURL = URL.createObjectURL(blob);
  const alink = document.createElement('a');
  alink.href = objectURL;
  alink.download = name;
  alink.click();
};

const delay = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });
