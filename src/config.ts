const config = {
  api: {
    accessTokenKey: 'accessToken',
    refreshTokenKey: 'refreshToken'
  },
  app: {
    confirmTime: 60000
  },
  language: {
    key: 'language',
    initial: 'uz',
    list: ['uz', 'en']
  },
  list: {
    perPage: 30
  },

  support: {
    gmail: 'mistercoderjs@gmail.com'
  }
};

// type Keys = keyof typeof config.services;
// export type ServiceType = (typeof config.services)[Keys];

export default config;
