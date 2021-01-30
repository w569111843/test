
<style scoped>
.el-menu--horizontal > .el-menu-item {
    line-height: 72px;
    height: 72px;
    font-size: 14px;
    width: 114px;
    text-align: center;
}
.nav-all {
    width: 100%;
    background: #2779ff;
    height: 72px;
    text-align: right;
}

.el-menu.el-menu--horizontal {
    border: none;
}
</style>
<template>
    <div class="nav-all">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#2779ff"
            text-color="#fff"
            style="height: 72px; display: inline-block; margin-right: 125px"
            router
            active-text-color="#fff"
        >
            <el-menu-item
                :index="item.path"
                v-for="(item, index) in routerList"
                :key="index"
                >{{ item.name }}</el-menu-item
            >
        </el-menu>
    </div>
</template>

<script>
import routerList from "../../../router/page.json";

export default {
    data() {
        return {
            activeIndex: "/home",
            routerList,
        };
    },
    computed: {},
    mounted() {
        this.onLoad();
    },
    methods: {
        onLoad() {
            var nowPath = this.$route.path;
            this.activeIndex = nowPath;
        },
    },
    components: {},
};
</script>

