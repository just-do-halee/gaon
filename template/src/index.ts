export const sum = (a: number, b: number): number => {
  if ('development' === process.env.MODE) {
    console.log('blazingly fast!');
  }
  return a + b;
};

sum(2, 5);
