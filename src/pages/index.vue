<style scoped>
.layout {
    position: relative;
    overflow: auto;
    height: 100%;
}
.el-header,
.el-main,
.el-footer {
    padding: 0;
}
</style>
<style>
.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
    color: #6a6a6a;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    color: #000;
}
.el-breadcrumb{
    font-size: 16px;
    line-height: 67px;
    border-bottom:1px solid #c6c6c6 ;
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

