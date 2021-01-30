<template>
    <div>
        <div class="banner">
            <Grade usertype="a"></Grade>
        </div>

        <Statedata v-if="usertype === 'a'"></Statedata>

        <div class="content">
            <div class="row1">
                <News />
                <Homenotice />
            </div>
            <div class="row2">
                <Downloadfiles />
                <Serviceagency style="width: 50%" />
            </div>
        </div>
    </div>
</template>

<script>
import Grade from "./common/grade/index";
import Statedata from "./common/state-data/index";
import Homenotice from "./common/home-notice/index";
import Downloadfiles from "./common/download/index.vue";
import Serviceagency from "./common/service-agency/index";
import News from "./common/news/index";

export default {
    components: {
        Grade,
        Statedata,
        Homenotice,
        Downloadfiles,
        Serviceagency,
        News,
    },
    mounted() {
        this.userName = this.$cookies.get("userName");
        this.usertype = this.$cookies.get("userType");
    },
    data() {
        return {
            usertype: "",
            userName: "",
        };
    },
};
</script>

<style scoped>
.row1,
.row2 {
    display: flex;
    flex-wrap: wrap;
    height: auto;
    margin-bottom: 28px;
}
.content {
    width: 1184px;
}
</style>
