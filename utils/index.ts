export const getImage = (image: string) => {
  if (!image) {
    return;
  }
  return new URL(`../src/assets/images/${image}`, import.meta.url).href;
};
