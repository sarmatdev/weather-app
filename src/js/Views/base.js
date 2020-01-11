export const elements = {
  container: document.querySelector('.container')
};

// Clear the whole UI
export const clearUI = () => {
  elements.container.innerHTML = '';
};
