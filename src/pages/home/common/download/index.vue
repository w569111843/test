<template>
    <div class="download-files">
        <Theme msg="资料下载" url=""/>
        <div class="files_list">
            <ul>
                <li v-for="(file,index) in filesinfo" :key="index">
                    <a :href="file.docUrl">{{ filterLong(file.docName) }}</a>
                    <svg
                        viewBox="0 0 256 256"
                        @click="toDownload(file.docUrl)"
                        style="cursor: pointer"
                    >
                        <path
                            d="M120 174.4V29.333c0-4.266 3.733-8 8-8s8 3.734 8 8V174.4l50.133-49.6c3.2-3.2 8-3.2 11.2 0 3.2 3.2 3.2 8 0 11.2L140.8 191.467c-7.467 6.933-18.667 6.933-26.133 0L58.133 136c-3.2-3.2-3.2-8 0-11.2 3.2-3.2 8-3.2 11.2 0L120 174.4zm90.667 33.6c4.266 0 8 3.733 8 8s-3.734 8-8 8H45.333c-4.266 0-8-3.733-8-8s3.734-8 8-8h165.334z"
                            class="transform-group"
                        ></path>
                    </svg>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Theme from "../theme/index";
export default {
    name: "downloadfiles",
    components: {
        Theme
    },
    data() {
        return {
            filesinfo: null,
        };
    },
    mounted() {
        this.onLoad();
    },
    methods: {
        toDownload(url) {
            console.log(url);
            window.open(url, "_blank");
        },
        onLoad() {
            this.$axios
                .get("http://8.131.74.190:8080/grade-web/api/home/doc/list")
                .then(
                    (response) => (this.filesinfo = response.data.data.dataMap)
                )
                .catch(function (error) {
                    // 请求失败处理
                    console.log(error);
                });
        },
        filterLong(value) {
            if (!value) return "";
            if (value.length > 20) {
                console.log(value.length);
                return value.substring(0, 20) + "...";
            }
        },
    },
};
</script>

<style scoped>
.download-files,
.service-agency {
    width: 50%;
    height: auto;
}

/*资料下载*/
.download-files .files_list {
    margin-right: 16px;
    background-color: #f9f9f9;
    border-radius: 6px;
    height: 288px;
}

.download-files .files_list ul {
    padding-left: 17px;
}

.download-files .files_list li {
    position: relative;
    padding-top: 13px;
    display: block;
    width: 50%;
}

.download-files .files_list li a {
    color: #6a6a6a;
}

.download-files .files_list svg {
    position: absolute;
    right: 20px;
}
</style>
