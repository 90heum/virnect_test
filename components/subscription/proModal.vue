<template>
    <div class="modalWrapper" v-if="popup"
         @click="(e) => modalCheckAndHandler(e)">
        <subscription-form :modal="modal"/>
    </div>
</template>

<script>
import SubscriptionForm from "~/components/subscription/proForm.vue";
import ClickOutside from "vue-click-outside";

export default {
    props: {
        modal: Function,
        popup: Boolean
    },
    components: {
        SubscriptionForm
    },
    methods: {
        modalCheckAndHandler (e) {
            if (!this.popup || e.target.className.includes("pro")) return;
            this.modal();
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
    top: 0;
    left: 0;
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
@media screen and (max-width: 600px) {
    .modalWrapper {
    top: -50%;
    left: 0px;
}
}
@media screen and (max-width: 425px) {
    .modalWrapper {
        top: 5%;
        left: 20px;
    }
}
</style>