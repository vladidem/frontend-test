import shortid from 'shortid';

const sizes = [
  {
    width: 640,
    height: 480,
  },
  {
    width: 1280,
    height: 720,
  },
  {
    width: 300,
    height: 600,
  },
  {
    width: 600,
    height: 600,
  },
  {
    width: 1980,
    height: 1080,
  },
  {
    width: 1600,
    height: 1200,
  },
];

const randomSize = () => sizes[Math.floor(Math.random() * sizes.length)];

const generateUnsplashImages = (amount) =>
  [...Array(amount).keys()].map((key) => {
    const { width, height } = randomSize();
    const signature = Math.floor(Math.random() * 100000);
    return {
      id: shortid.generate(),
      url: `https://source.unsplash.com/random/${width}x${height}/?sig=${signature}`,
      width,
      height,
    };
  });

export { generateUnsplashImages };
