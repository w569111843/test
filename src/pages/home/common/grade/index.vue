<template>
	<div class="grade">
	  <h2>欢迎，</h2>
	  <p>北京元心科技有限公司</p>
	  <div class="Local-administration" v-if="usertype === 'a'">
	    <button type="button" class="btn">定级审核</button>
	    <button type="button" class="btn">地方信息概况</button>
	  </div>
	  <div class="industrial" v-else-if="usertype === 'b'">
	    <button type="button" class="btn">查看全国企业信息概况</button>
	  </div>
	  <div class="company" v-else>
	    <button type="button" class="btn">自主定级</button>
	    <button type="button" class="btn">查看定级结果</button>
	    <button type="button" class="btn">规范落实</button>
	  </div>
	</div>
</template>

<script>
	export default {
	  props: {
	    usertype: String
	  }
	}
</script>

<style scoped>
	.grade{
	    position: absolute;
	    top: 8px;
	    right: 10%;
	    width: 284px;
	    height: 284px;
	    background-color: rgba(0,0,0,0.29);
	    border-radius: 6px;
	}
	.grade h2,p{
	    display: block;
	    width: 284px;
	    margin-top: 25px;
	    margin-left: 42px;
	    color: white;
	
	}
	.grade p{
	    margin-top: 6px;
	
	}
	.grade .Local-administration,.industrial,.company{
	    display: none;
	}
	/*
	    根据读取的用户进行选择显示样式
	*/
	.grade .Local-administration{
	    position: absolute;
	    bottom: 37px;
	    display: block;
	    width: 284px;
	    text-align: center;
	}
	
	.grade .industrial{
	    position: absolute;
	    bottom: 70px;
	    display: block;
	    width: 284px;
	    text-align: center;
	}
	.grade .company{
	    position: absolute;
	    bottom: 17px;
	    display: block;
	    width: 284px;
	    text-align: center;
	}
	.grade .btn{
	    width: 200px;
	    height: 40px;
	    margin-top: 10px;
	    background: #2779FF;
	    border-radius: 2px;
	    border-style: none;
	    font-size: 18px;
	    font-weight: 400;
	    color: #FFFFFF;
	}
</style>
