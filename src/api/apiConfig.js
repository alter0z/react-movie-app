const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  key: '2ba1ea9298a74029941311c2c6a65e6e',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
