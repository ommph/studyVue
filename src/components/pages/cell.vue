<template>
	<div>
		<div>
			<h2>{{msg }}</h2>		
		</div>
		<div>
			<el-button>默认按钮</el-button>	
			<el-button type="primary">主要按钮</el-button>	
			<el-button type="success">成功按钮</el-button>
			<el-button type="info">信息按钮</el-button>
			<el-button type="warning">警告按钮</el-button>
			<el-button type="danger">危险按钮</el-button>
		</div>
		<div style="margin-top:20px;">
			<el-button plain>朴素按钮</el-button>
			<el-button type="primary" plain>主要按钮</el-button>
			<el-button type="success" plain>成功按钮</el-button>
			<el-button type="info" plain>信息按钮</el-button>
			<el-button type="warning" plain>警告按钮</el-button>
			<el-button type="danger" plain>危险按钮</el-button>
		</div>
		<div style="margin-top:20px;">
			<el-button round>圆形按钮</el-button>
			<el-button type="primary" round>主要按钮</el-button>
			<el-button type="success" round>成功按钮</el-button>
			<el-button type="info" round>信息按钮</el-button>
			<el-button type="warning" round>警告按钮</el-button>
			<el-button type="danger" round>危险按钮</el-button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg: 'Button按钮'
			}
		}
	}
</script>

<style scoped>

</style>