export const deleteElementFromArray = (id, array) => {
  const idx = array.findIndex((element) => element.id === id);

  return [...array.slice(0, idx), ...array.slice(idx + 1)];
};

export const changeElementInArray = (id, array, newValue) => {
  const idx = array.findIndex((element) => element.id === id);
  return [...array.slice(0, idx), { ...array[idx], ...newValue }, ...array.slice(idx + 1)];
};
