export const state = () => ({
   
  });
  
  export const getters = {
   
   
  };
  
  export const mutations = {
   
  };
  
  export const actions = {
   
    getFeaturedPhotos(context, payload) {
        let client_id = "ehvujvFwz-J0t9jR8afwI8oRLLO3BJBwIEObcT7Qz7E";
      return new Promise((resolve, reject) => {
        this.$axios
          .$get(`https://api.unsplash.com/search/photos?client_id=${client_id}&query=${payload}`)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
   
    
    getSearchedPhotos(context, payload) {
        let client_id = "ehvujvFwz-J0t9jR8afwI8oRLLO3BJBwIEObcT7Qz7E";
      return new Promise((resolve, reject) => {
        this.$axios
          .$get(`https://api.unsplash.com/search/photos?client_id=${client_id}&query=${payload}`)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  
    
  };
  