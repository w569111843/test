<template>
	<div class="header">
	<div class="row">
		<div class="logo">
			
		</div>
		<div class="col-nav">
			<ul class="pc-nav">
				<li v-for="site in sites">
					<a :href="site.url">{{site.name}}</a>
				</li>
			</ul>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		name: "top",
		data() {
			return {
				sites: [{
						name: '首页',
						url: '../home'
					},
					{
						name: '新闻',
						url: '/html/html-tutorial.html'
					},
					{
						name: '通知公告',
						url: '../notice'
					},
					{
						name: '评估服务机构',
						url: '/js/js-tutorial.html'
					},
					{
						name: '资料下载',
						url: '/js/js-tutorial.html'
					},
					{
						name: '问题解答',
						url: '/js/js-tutorial.html'
					},
					{
						name: '退出',
						url: '/js/js-tutorial.html'
					}
				]
			}
		}
	}
</script>

<style>
	
	.header{
	    display:-webkit-box;
	    -webkit-box-pack:center;
	    -webkit-box-align:center;
	    width: 100%;
	    height: 72px;
	    background-color: #2779FF;
	    line-height: 72px;
	}
	.header .row{
	    display: flex;
	    width: 80%;
	}
	.header .row .logo{
	    width: 400px;
	    
	}
	.header .row .col-nav{
	    flex: 1;
	}
	.header .row ul{
	    display: flex;
	    width: 100%;
	    height: 72px;
	
	    align-items: center;
	    list-style-type: none;
	}
	.header .row ul li {
	    display: block;
	    flex: 1;
	    height: 72px;
	}
	.header .row ul a{
	    display: block;
	    width: 100%;
	    color: white;
	    font-size: 16px;
	    font-weight: 400;
	    line-height: 72px;
	    text-align: center;
	}
	.header .row ul a:hover{
	    background-color: #23527c;
	}
</style>
