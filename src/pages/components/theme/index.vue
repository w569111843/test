<template>
    <div class="theme">
        <i class="icon-square"
            ><span class="square1"></span><span class="square2"></span
        ></i>
        <h3 class="theme-detail">{{ msg }}</h3>
        <i class="icon-more" @click="toLink" v-if="url"><span></span></i>
    </div>
</template>

<script>
export default {
    props: {
        msg: String,
        url: String,
    },
    methods: {
        toLink() {
            this.$router.push(this.url);
        },
    },
};
</script>

<style>
</style>
