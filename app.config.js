export default () => ({
  expo: {
    extra: {
      TMDB_API: process.env.TMDB_API,
      eas: {
        projectId: "bb6e3074-8028-4564-8628-97d302b9fa11",
      },
    },
    name: "movie-app",
    slug: "movie-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "dark",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    owner: "saadsiddiqui-dev",
    updates: {
      url: "https://u.expo.dev/bb6e3074-8028-4564-8628-97d302b9fa11",
    },
    runtimeVersion: {
      policy: "sdkVersion",
    },
    android: {
      package: "com.saadsiddiqui.movieapp",
      versionCode: 1,
    },
  },
});
