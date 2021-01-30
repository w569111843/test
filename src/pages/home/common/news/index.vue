<style scoped>
.news-img {
    width: 284px;
    height: 288px;
    border-radius: 6px;
}
.news-img img {
    width: 284px;
    height: 288px;
    border-radius: 6px;
}
.news-left {
    float: left;
    margin-right: 3px;
}
.news-right {
    float: left;
    margin: 0px 6px;
    width: 600px;
}
.news-block {
    width: 280px;
    overflow: hidden;
    margin: 0 10px 33px 10px;
    float: left;
}
.news-block-left {
    float: left;
    margin-right: 15px;
    width: 78px;
}
.news-block-right {
    float: left;
    width: 187px;
}
.news-day {
    text-align: center;
    width: 72px;
    font-size: 48px;
    color: #2779ff;
    line-height: 48px;
    margin-bottom: 10px;
}

.news-date {
    font-size: 14px;
    color: #000;
    line-height: 12px;
}
.news-title {
    line-height: 24px;
    font-size: 16px;
    color: #000;
    font-weight: 550;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.news-text {
    font-size: 14px;
    color: #6a6a6a;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 22px;
    text-align: left;
}
</style>
<template>
    <div>
        <Theme msg="新闻" url="" />
        <div class="news-content" style="overflow: hidden">
            <div class="news-left">
                <el-carousel style="height: 288px">
                    <el-carousel-item
                        v-for="item in newsList"
                        :key="item.newsImg"
                    >
                        <div class="news-img">
                            <img :src="item.newsImg"/>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="news-right">
                <div class="news-block" v-for="item in newsList" :key="item.id">
                    <div class="news-block-left">
                        <div class="news-day">
                            {{ moment(item.updateTime).day() }}
                        </div>
                        <div class="news-date">
                            {{ moment(item.updateTime).format("YYYY年MM月") }}
                        </div>
                    </div>
                    <div class="news-block-right">
                        <div class="news-title">{{ item.newsTitle }}</div>
                        <div class="news-text">
                            {{ item.newsDesc }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Theme from "../theme/index";
import moment from "moment";
export default {
    data() {
        return {
            newsList: [],
            moment,
        };
    },
    computed: {},
    mounted() {
        this.onLoad();
    },
    methods: {
        onLoad() {
            this.$axios
                .get("http://8.131.74.190:8080/grade-web/api/home/news/list")
                .then((response) => {
                    if (response.data.data.dataMap) {
                            this.newsList=response.data.data.dataMap;

                    }
                })
                .catch(function (error) {
                    // 请求失败处理
                    console.log(error);
                });
        },
        toDay(val) {},
        toDate(val) {},
    },
    components: {
        Theme,
    },
};
</script>

