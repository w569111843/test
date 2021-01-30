<template>
    <footer>
        <div class="footer">
            <ol class="left">
                <li class="connect">
                    <h3>联系我们</h3>
                    <span>邮箱：123123123@163.com</span>
                    <span>服务热线：123456</span>
                </li>
                <li class="about">
                    <h3 style="padding-top: 16px">关于我们</h3>
                    <h3>建议意见</h3>
                </li>
            </ol>
        </div>
    </footer>
</template>

<script>
export default {
    name: "bottom",
    props: {
        msg: String,
    },
};
</script>

<style scoped>
footer {
    position: relative;
    height: 140px;
    background-color: rgb(51, 52, 55);
    color: white;
}
.footer {
    display: flex;
    position: absolute;
    top: 0px;
    left: 10%;
    justify-content: space-between;
    width: 80%;
    height: 140px;
}
.footer ol {
    list-style-type: none;
    font-size: 16px;
    font-weight: 500;
    margin-top: 16px;
    height: 108px;
}
.footer .left {
    display: flex;
}
.footer .left li {
    height: 108px;
}
.footer .left h3 {
    padding-bottom: 16px;
}
.footer .left span {
    display: block;
    height: 31px;
    font-size: 16px;
    font-weight: 500;
    color: #6a6a6a;
    line-height: 24px;
    padding-right: 32px;
}
.footer .left .about {
    padding-right: 62px;
    padding-left: 62px;
}
.about h3 {
    width: 78px;
}

.connect span {
    width: 210px;
}
.about {
    border-right: 1px solid #6a6a6a;
}
</style>
