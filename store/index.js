export const state = () => ({});

export const getters = {};

export const mutations = {};

export const actions = {
  getPhotos(context, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(`/search/photos?query=${payload}`)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
