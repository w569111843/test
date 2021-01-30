<style scoped>
.list-all {
    width: 284px;
    background: #f9f9f9;
    min-height: 600px;
}
.list-children {
    line-height: 60px;
    text-align: center;
    color: #272727;
    font-size: 16px;
}
.list-children-active{
    background: #edf5ff;
    position: relative;
    color: #2779ff;
}
.list-children-active:after{
    width:4px;
    height: 60px;
    position: absolute;
    left: 0;
    top: 0;
    background: #2e76ff;
    content:"";
}
</style>
<template>
    <div class="list-all" :style="'height:' + height + 'px'">
        <div
            :class="
                index == dataActive
                    ? 'list-children list-children-active'
                    : 'list-children'
            "
            v-for="(item, index) in dataList"
            :key="item.title"
            @click="toRouter(item.path)"
        >
            {{ item.title }}
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    computed: {},
    props: {
        dataList: Array,
        dataActive: Number,
        height: String,
    },
    mounted() {},
    methods: {
        toRouter(path) {
            this.$router.push(path);
            this.$emit('switchPage',path);
        },
    },
    components: {},
};
</script>

