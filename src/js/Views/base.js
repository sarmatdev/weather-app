export const elements = {
  container: document.querySelector('.container'),
  weatherContainer: document.querySelector('.weather__container')
};

// Clear the whole UI
export const clearUI = () => {
  elements.container.innerHTML = '';
};
