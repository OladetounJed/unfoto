<template>
     <section class="modal-section">
      <div class="modal">
        <p class="modal__close" @click="closeModal()">
          &times;
        </p>
        <div class="modal__body">
          <img class="modal__image" :src="image.urls.regular" />
          <div class="modal__info">
            <h3 class="modal__heading">
              {{ image.user.name }}
            </h3>
            <p class="modal__paragraph">
              {{ image.user.location }}
            </p>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
export default {
    props: {
          image: {
      type: Object,
      required: true
    }

    },
    methods: {
        closeModal () {
      this.$emit('closeModal')
    }
    }
  
    
}
</script>