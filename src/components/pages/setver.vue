<template>
	<div>
		<el-row>
			<el-col>
				<el-tabs>
					<el-tab-pane label="订单">
						<el-table :data="tableData" border style="width:100%" align="center">
							<el-table-column prop="date" label="日期" width="180" align="center"></el-table-column>
							<el-table-column prop="name" label="姓名" width="180" align="center"></el-table-column>
							<el-table-column prop="address" label="地址" width="180" align="center"></el-table-column>
							<el-table-column label="操作" align="center">
								<template slot-scope="scope">
									<el-button type="text" size="small">查看</el-button>
									<el-button type="text" size="small">编辑</el-button>
								</template>
							</el-table-column>
						</el-table>
					</el-tab-pane>
					<el-tab-pane label="挂单">挂单</el-tab-pane>	
				</el-tabs>
			</el-col>
		</el-row>
		<el-row>
			<el-col>
				
			</el-col>
		</el-row>
	</div>
</template>

<script>
import axios from 'axios'
	export default{
		data(){
			return{
				tableData: []					
			}
		},
		created(){
			axios.get('../static/data.json')
			     .then(res=>{
			     	console.log(res);
			     	this.tableData = res.data.result.tableData;
			     })
			     .catch(error=>{
			     	console.log(error);
			     })
		}
	}
</script>

<style scoped>

</style>