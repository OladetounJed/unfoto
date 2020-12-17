import Vue from "vue";
export const globalENV = () => {
  const globalObjects = {};
  switch (process.env.NODE_ENV) {
    case "development":
      globalObjects.apiClientId = "ehvujvFwz-J0t9jR8afwI8oRLLO3BJBwIEObcT7Qz7E";
      globalObjects.baseURL = `https://api.unsplash.com/photos`;

      break;

    // Works like live but for testing

    case "production":
      globalObjects.baseURL = `https://api.unsplash.com/photos`;

      break;
  }

  return globalObjects;
};

export const vueInst = Vue;
