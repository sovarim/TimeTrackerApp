export const hexToRgba = (hex: string, opacity: number) => {
  const [r = 'ff', g = 'ff', b = 'ff'] = hex.slice(1).match(/.{1,2}/g) || [];

  return `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, ${opacity})`;
};
