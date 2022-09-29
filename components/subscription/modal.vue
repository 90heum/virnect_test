<template>
    <div class="modalWrapper" v-if="isModal"
         @click="(e) => modalCheckAndHandler(e)"
         >
        <subscription-form :handleModal="handleModal"/>
    </div>
</template>

<script>
import SubscriptionForm from "~/components/subscription/form.vue";
import ClickOutside from "vue-click-outside";

export default {
    props: {
        handleModal: Function,
        isModal: Boolean
    },
    components: {
        SubscriptionForm
    },
    methods: {
        modalCheckAndHandler (e) {
            if (!this.isModal || e.target.className.includes("gudock")) return;
            this.handleModal();
        }
    },
    directives: {
        ClickOutside,
    },
}
</script>

<style lang="scss" scoped>
.modalWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 999999999;
    top: 0px;
}
.modalWrapper::before {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    background: #000000;
    opacity: 0.6;
    z-index: -1;
}
</style>