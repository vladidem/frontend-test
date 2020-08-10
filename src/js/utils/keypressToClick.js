const keypressToClick = (event) => {
  const code = event.charCode || event.keyCode;

  // if space or enter
  if (code === 32 || code === 13) {
    event.target.click();
  }
};

export default keypressToClick;
