<template>
    <div class="statedata">
        <div class="state">
            <div class="theme">
                <i class="icon-square"
                    ><span class="square1"></span><span class="square2"></span
                ></i>
                <h3 class="theme-detail">状态信息</h3>
            </div>
            <div class="statedetail">
                <div class="left">
                    <h4>已申报</h4>
                    <span>60</span>
                </div>
                <div class="right">
                    <h4>待审核</h4>
                    <span>60</span>
                </div>
            </div>
        </div>
        <div class="data">
            <div class="theme">
                <i class="icon-square"
                    ><span class="square1"></span><span class="square2"></span
                ></i>
                <h3 class="theme-detail">数据信息</h3>
            </div>
            <div class="datadetail">
                <div class="left">
                    <h4>已申报</h4>
                    <span>60</span>
                </div>
                <div class="right">
                    <h4>待审核</h4>
                    <span>60</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "statedata",
};
</script>

<style>
.statedata {
    width: 1184px;
    margin: 0 auto;
    overflow: hidden;
}
.left {
    width: 268px;
    float: left;
    margin-right: 8px;
}
.right {
    width: 268px;
    float: left;
    margin-left: 8px;
}
.state {
    margin-right: 10px;
	display: inline-block;
}
.data {
    margin-left: 9px;
	display: inline-block;
}
.statedata .left {
    background-image: url("");
}
.datadetail{
	overflow: hidden;
	display: inline-block;
}
.statedetail {
    overflow: hidden;
}
.statedata .left,
.right {
    height: 141px;
    background-color: #f9f9f9;
    border-radius: 6px;
    text-align: center;
    padding-top: 28px;
    padding-left: 15px;
}
.statedata h4 {
    display: block;
    line-height: 27px;
    font-size: 18px;
}
.statedata span {
    display: block;

    line-height: 59px;
    font-weight: 500;
    font-size: 40px;
    color: #2779ff;
}
</style>
