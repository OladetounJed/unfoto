<template>
  <div class="home">
    <section class="header">
      <div class="header__form-con">
        <h1 v-if="ifSearching">{{ (isSearching) ? 'Searching For ' : (photos.length >= 1) ? 'Result for ' : 'No Result For ' }}<span>"{{searchKey}}"</span></h1>
        <form v-else class="header__form" @submit.prevent="searchPhotos">
          <span class="header__icon"><i class="fa fa-search"></i></span>
          <input
            type="text"
            name="Search"
            class="header__search"
            placeholder="Search for photo"
            v-model="searchKey"
          />
        </form>
      </div>
    </section>
    <section class="container">
      <div class="placeholder-con" v-if="photosLoading">
        <div
          class="placeholder-con__item placeholder"
          v-for="placeholder in 10"
          :key="placeholder"
        >
          <img />

          <div class="placeholder-con__item-info">
            <h3 class="placeholder-con__item-name placeholder__child"></h3>
            <p class="placeholder-con__item-location placeholder__child"></p>
          </div>
        </div>
      </div>
      <div class="images">
        <div
          class="images__item"
          v-for="photo in photos"
          :key="photo.id"
          @click="zoomPhoto(true, photo.id)"
        >
          <img
            :src="photo.urls.regular"
            style="width: 100%;"
            class="images__item-image"
          />

          <h3 class="images__item-name">
            {{ photo.user.name }}
          </h3>
          <p class="images__item-location">{{ photo.user.location }}</p>
        </div>
      </div>
    </section>
    <section class="modal-section">
      <div class="modal" v-if="showModal">
        <p class="modal__close" @click="showModal = false">
          &times;
        </p>
        <div class="modal__body">
          <img class="modal__image" :src="selectedPhoto.urls.regular" />
          <div class="modal__info">
            <h3 class="modal__heading">
              {{ selectedPhoto.user.name }}
            </h3>
            <p class="modal__paragraph">
              {{ selectedPhoto.user.location }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [],
      photosLoading: true,
      showModal: false,
      searchKey: "",
      ifSearching : false,
      isSearching: true
    };
  },
  mounted() {
      if(this.$route.query.search){
       this.searchKey = this.$route.query.search
       this.searchPhotos()
     }
     else {
       this.getFeaturedPhotos();
     }
  },
  watch:{
    $route(){
     if(!this.$route.query.search){
       this.ifSearching = false
       this.searchKey = ""
       this.getFeaturedPhotos()
     }
    
    }

  },
  methods: {
    getFeaturedPhotos() {
      this.photosLoading = true;
      this.$store
        .dispatch("getFeaturedPhotos", "africa")
        .then(response => {
          this.photosLoading = false;
          this.photos = response.results;
        })
        .catch(error => {});
    },
    zoomPhoto(showModal, itemKey) {
      this.showModal = showModal;
      this.selectedPhoto = this.photos.find(function(element) {
        return element.id === itemKey;
      });
    },
    searchPhotos() {
      this.$router.push({ path: "/", query: { search: this.searchKey } });
      this.isSearching = true
      this.photosLoading = true;
      this.ifSearching = true
      this.$store
        .dispatch("getSearchedPhotos", this.searchKey)
        .then(response => {
          this.isSearching = false
          this.photosLoading = false;
          this.photos = response.results;
        })
        .catch(error => {});
    }
  }
};
</script>
