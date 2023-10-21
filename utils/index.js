export const getImage = (image) => {
  if (!image) {
    return;
  }
  return new URL(`../src/assets/images/${image}`, import.meta.url).href;
};
