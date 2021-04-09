<template>
  <div class="home">
    <section class="header">
      <div class="header__form-con">
        <h1 v-if="ifSearching">
          {{
            isSearching
              ? "Searching For "
              : photos.length >= 1
              ? "Result for "
              : "No Result For "
          }}<span>"{{ searchKey }}"</span>
        </h1>
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
      <div class="images" v-else>
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

          <div class="images__item-info">
            
          <h3 class="images__item-name">
            {{ photo.user.name }}
          </h3>
          <p class="images__item-location">{{ photo.user.location }}</p>

          </div>

        </div>
      </div>
    </section>
       <ImagePopup
      v-if="showModal"
      :image="selectedPhoto"
      @closeModal="showModal = false"
    />
 
   
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
      ifSearching: false,
      isSearching: true,
      selectedPhoto: ""
    };
  },
  mounted() {
    if (this.$route.query.search) {
      this.searchKey = this.$route.query.search;
      this.searchPhotos();
    } else {
      this.getFeaturedPhotos();
    }
  },
  watch: {
    $route() {
      if (!this.$route.query.search) {
        this.ifSearching = false;
        this.searchKey = "";
        this.getFeaturedPhotos();
      }
    }
  },
  methods: {
    getFeaturedPhotos() {
      this.photosLoading = true;
      this.$store
        .dispatch("getPhotos", "africa")
        .then(response => {
          this.photosLoading = false;
          this.photos = response.results;
        })
        .catch(error => {});
    },
    zoomPhoto(showModal, itemKey) {
      this.selectedPhoto = this.photos.find(function(element) {
        return element.id === itemKey;
      });
      this.showModal = showModal;
    },

    searchPhotos() {
      this.$router.push({ path: "/", query: { search: this.searchKey } });
      this.isSearching = true;
      this.photosLoading = true;
      this.ifSearching = true;
      this.$store
        .dispatch("getPhotos", this.searchKey)
        .then(response => {
          this.isSearching = false;
          this.photosLoading = false;
          this.photos = response.results;
        })
        .catch(error => {
          this.isSearching = false;
          this.photosLoading = false;
        });
    }
  }
};
</script>
