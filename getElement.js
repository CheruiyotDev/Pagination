const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (selection) {
    return element;
  }
  throw new Error(
    'Ensure you have made the correct selection check and try again'
  );
};

export default getElement;
