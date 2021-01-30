<style scoped>
.layout {
    position: relative;
    overflow: auto;
    height: 100%;
}
.el-header,.el-main,.el-footer{
    padding:0;
}
</style>
<template>
    <div class="layout">
        <el-container>
            <el-header height="72"><Top></Top></el-header>
            <el-main><router-view></router-view></el-main>
            <el-footer height="140"><Bottom></Bottom></el-footer>
        </el-container>
    </div>
</template>
<script>
import Top from "./components/nav/index";
import Bottom from "./components/bottom";
export default {
    data() {
        return {};
    },
    computed: {},
    mounted() {},
    methods: {},
    components: { Top, Bottom },
};
</script>

