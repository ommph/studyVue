<template>
	<div class="leftnav">
		<ul>
			<li>
				<router-link to="/cell">
					<i class="icon iconfont icon-wodezichan"></i>
					<div>
						收银
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="/shop">
					<i class="icon iconfont icon-31dianpu"></i>
					<div>店铺</div>
				</router-link>
			</li>
			<li>
				<router-link to="/goods">
					<i class="icon iconfont icon-hanbao"></i>
					<div>商品</div>
				</router-link>
			</li>
			<li>
				<router-link to="/user">
					<i class="icon iconfont icon-zuanshi"></i>
					<div>会员</div>
				</router-link>
			</li>
			<li>
				<router-link to="/count">
					<i class="icon iconfont icon-paixing"></i>
					<div>统计</div>
				</router-link>
			</li>
			<li>
				<router-link to="/setver">
					<i class="icon iconfont icon-shezhi"></i>
					<div>设置</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'leftnav'
		
	}
</script>

<style>
	.leftnav{
		width:5%;		
		color:#fff;
		background-color:#1D8ce0;
		height:100%;
		float:left;
		font-size:10px;
	}
	.iconfont{
		font-size:24px;
	}
	.leftnav ul{
		padding:0;
		margin:0;
	}
	.leftnav ul li{
		border-bottom:1px solid #20a0ff;
		list-style:none;
		padding:10px;
		text-align:center;
	}
	.leftnav ul li a{color:#fff;text-decoration: none;font-size:14px;}
</style>