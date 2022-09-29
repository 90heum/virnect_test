<template>
  <div
    class="modalWrapper"
    v-if="comPopup"
    @click="(e) => modalCheckAndHandler(e)"
  >
    <subscription-form :comModal="comModal" />
  </div>
</template>
<script>
import SubscriptionForm from "~/components/subscription/comForm.vue";
import ClickOutside from "vue-click-outside";

export default {
  props: {
    comModal: Function,
    comPopup: Boolean,
  },
  components: {
    SubscriptionForm,
  },
  methods: {
    modalCheckAndHandler(e) {
      if (!this.comPopup || e.target.className.includes("com")) return;
      this.comModal();
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style lang="scss" scoped>
.modalWrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 999999999;
  top: 0px;
  left: 0px;
}
.modalWrapper::before {
  content: "";
  height: 300vw;
  width: 300vw;

  position: absolute;
  background: #000000;
  opacity: 0.6;
  z-index: -1;
}
</style>