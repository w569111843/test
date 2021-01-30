<style scoped>
.notices {
    width: 284px;
    height: auto;
    background-color: #ffffff;
    text-align: center;
}
.notice-detail {
    margin: 11px 24px;
}
.noticeTitle {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 20px;
    color: #0c0c0c;
    text-align: center;
    margin-bottom: 7px;
}
.notice-text {
    font-size: 14px;
    color: #6a6a6a;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    line-height: 22px;
    text-align: left;
}

.notices-content {
    background: #f9f9f9;
    height: 288px;
}

.notice-time {
    font-size: 12px;
    color: #adadad;
    margin-top: 8px;
    text-align: left;
}
</style>
<style>
.is-active .el-carousel__button {
    width: 16px;
    height: 8px;
    background: #b6b6b6;
    border-radius: 5px;
}
.el-carousel__button {
    width: 8px;
    height: 8px;
    background: #d8d8d8;
    border-radius: 5px;
}
.el-carousel__container {
    height: 288px;
    width: 284px;
}
</style>
<template>
    <div class="notices">
        <Theme msg="通知公告" url="" />
        <div class="notices-content">
            <el-carousel style="height: 288px">
                <el-carousel-item v-for="(notice, index) in info" :key="index">
                    <div class="notice-detail">
                        <div class="noticeTitle">{{ notice.noticeTitle }}</div>
                        <p class="notice-text">
                            {{ notice.noticeContent }}
                        </p>
                        <div class="notice-time">{{ notice.createTime }}</div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
import Theme from "../../../components/theme/index";
export default {
    components: {
        Theme,
    },
    data() {
        return {
            info: null,
        };
    },
    mounted() {
        this.onLoad();
    },
    methods: {
        onLoad() {
            this.$axios
                .get("http://8.131.74.190:8080/grade-web/api/home/notice/list")
                .then((response) => {
                    if(response.data.data.dataMap){
                        this.info = response.data.data.dataMap;
                    }
                })
                .catch(function (error) {
                    // 请求失败处理
                    console.log(error);
                });
        },
    },
};
</script>
