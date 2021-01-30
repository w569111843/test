<style scoped>
.down-content-left {
    float: left;
}
.down-content {
    padding: 0 128px;
    overflow: hidden;
}
.down-content-right {
    float: left;
    margin-left: 18px;
    padding-top: 20px;
}
.el-icon-download {
    font-size: 16px;
    color: #417bf0;
    position: absolute;
    right: 43px;
    top: 17px;
    cursor: pointer;
}
.el-icon-download-disable {
    color: #aaa;
    cursor: not-allowed;
}
.down-content-list {
    padding-left: 38px;
    width: 764px;
    padding-right: 80px;
    line-height: 48px;
    position: relative;
    background: #f9f9f9;
    color: #272727;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.down-page {
    text-align: right;
    margin: 20px 0;
}
.down-list-content {
    min-height: 480px;
}
</style>
<template>
    <div>
        <el-breadcrumb
            separator-class="el-icon-arrow-right"
            style="padding-left: 128px"
        >
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>资料下载</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="down-content">
            <div class="down-content-left">
                <List
                    :dataList="listData"
                    :dataActive="dataActive"
                    @switchPage="switchPage"
                ></List>
            </div>
            <div class="down-content-right">
                <Theme :msg="title" />
                <div class="down-list-content">
                    <div
                        class="down-content-list"
                        v-for="item in dataList"
                        :key="item.id"
                    >
                        {{ item.docName }}
                        <i
                            :class="
                                status == 0
                                    ? 'el-icon-download-disable'
                                    : 'el-icon-download'
                            "
                            @click="status == 0 ? '' : toDown(item.docUrl)"
                        ></i>
                    </div>
                </div>
            </div>
            <div class="down-page">
                <el-pagination
                    style="display: inline-block"
                    background
                    layout="prev, pager, next"
                    :total="totalNumber"
                    :page-size="10"
                >
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import List from "../components/list/index";
import Theme from "../components/theme/index";
export default {
    data() {
        return {
            dataActive: 0,
            title: "规范标准文档",
            listData: [
                {
                    title: "规范标准文档",
                    path: "/downloadCenter",
                },
                {
                    title: "定级材料",
                    path: "/downloadCenter/grading",
                },
            ],
            dataList: [],
            totalNumber: 0,
        };
    },
    computed: {},
    mounted() {
        this.onLoad();
    },
    methods: {
        onLoad() {
            var nowPath = this.$route.path;
            this.checkPage(nowPath);
            this.selectList();
        },
        switchPage(path) {
            this.checkPage(path);
        },
        toDown(url) {
            window.open(url, "_blank");
        },
        checkPage(nowPath) {
            if (nowPath == "/downloadCenter") {
                this.dataActive = 0;
                this.title = "规范标准文档";
            } else if (nowPath == "/downloadCenter/grading") {
                this.dataActive = 1;
                this.title = "定级材料";
            }
        },
        selectList() {
            this.$axios
                .post("http://8.131.74.190:8080/grade-web/api/home/doc/list")
                .then((response) => {
                    if (response.data.data.dataMap) {
                        var arr = response.data.data.dataMap;
                        this.dataList = arr;
                        this.totalNumber = parseInt(
                            response.data.data.totalRecords
                        );
                    }
                })
                .catch(function (error) {
                    // 请求失败处理
                    console.log(error);
                });
        },
    },
    components: { List, Theme },
};
</script>

