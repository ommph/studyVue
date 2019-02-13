<template>
	<div class="pos">
		<el-row>
			<el-col :span="7" class="pos-order" id="order-list">
					<el-tabs>
						<el-tab-pane label="点餐">
							<el-table  :data="tableData" style="width:100%;" border>
								<el-table-column  align="center" prop="goodsName" label="商品名称" width="150" fixed></el-table-column>
								<el-table-column align="center" prop="count" width="50" label="数量"></el-table-column>
								<el-table-column align="center"prop="price" width="70" label="金额"></el-table-column>
								<el-table-column align="center" label="操作" fixed="right" width="100">
									<template slot-scope="scope">
										<el-button type="text" size="small" @click="delsingelGoods(scope.row)">删除</el-button>
										<el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
									</template>
								</el-table-column>								
							</el-table>
							<div class="totalDiv">
									<small>数量：</small>{{ totalCount }}&nbsp;&nbsp;&nbsp;<small>金额：</small>{{ totalMoney }}元
								</div>
							<div class="btn-list">
								<el-button type="warning">挂单</el-button>
								<el-button type="danger" @click="delAllGoods">删除</el-button>
								<el-button type="success" @click="check">结账</el-button>
							</div>
						</el-tab-pane>
						<el-tab-pane label="挂单">挂单</el-tab-pane>
						<el-tab-pane label="外卖">外卖</el-tab-pane>						
					</el-tabs>						
			</el-col>

			<el-col :span="17">
				<div class="often-goods">
					<div class="title">常用商品</div>
					<div class="often-goods-list">
						<ul>
							<li v-for="goods in oftenGoods" @click="addOrderList(goods)">
								<span>{{ goods.goodsName }}</span>
								<span class="o-price">￥{{ goods.price }}元</span>
							</li>
						</ul>
					</div>
				</div>

				<div class="goods-type">
					<el-tabs>
						<el-tab-pane label="汉堡">						
								<ul class='cookList'>	
									<li v-for="goods in type0Goods" @click="addOrderList(goods)">
										<span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
										<span class="foodName">{{ goods.goodsName }}</span>
										<span class="foodPrice">￥{{ goods.price }}元</span>
									</li>	
																					
								</ul>
						</el-tab-pane>

						<el-tab-pane label="小食">
								<ul class="cookList">
									<li v-for="goods in type1Goods" @click="addOrderList(goods)">
										<span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
										<span class="foodName">{{ goods.goodsName }}</span>
										<span class="foodPrice">￥{{ goods.price}}元</span>
									</li>
								</ul>
					    </el-tab-pane>

					    <el-tab-pane label="饮料">
					    	<ul class="cookList">
					    		<li v-for="goods in type2Goods" @click="addOrderList(goods)">
					    			<span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
					    			<span class="foodName">{{ goods.goodsName }}</span>
					    			<span class="foodPrice">￥{{ goods.price }}元</span>
					    		</li>
					    	</ul>
					    </el-tab-pane>

					    <el-tab-pane label="套餐">
					    	<ul class="cookList">
					    		<li v-for="goods in type3Goods" @click="addOrderList(goods)">
					    			<span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
					    			<span class="foodName">{{ goods.goodsName }}</span>
					    			<span class="foodPrice">￥{{ goods.prcie }}元</span>
					    		</li>
					    	</ul>
					    </el-tab-pane>

					</el-tabs>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import axios from 'axios';
	export default{
		name: 'pos',
		data(){
			return{
				tableData:[],
				oftenGoods: [],
				type0Goods: [],
				type1Goods: [],
				type2Goods: [],
				type3Goods: [],
				totalMoney: 0,
				totalCount: 0
			}
		},	
		created:function(){
			//服务端拉取常用商品数据
			axios.get('http://jspang.com/DemoApi/oftenGoods.php')
			     .then(response=>{
			     	//console.log(response);
			     	this.oftenGoods = response.data;
			     })
			     .catch(error=>{
			     	alert("由于网络原因，无法连接到服务器")
			     })
			//服务端拉取分类商品数据
			axios.get('http://jspang.com/DemoApi/typeGoods.php')
			     .then(response=>{
			     	//console.log(response);
			     	this.type0Goods = response.data[0];
			     	this.type1Goods = response.data[1];
			     	this.type2Goods = response.data[2];
			     	this.type3Goods = response.data[3];
			     })
			     .catch(erros=>{
			     	alert("由于网络原因，无法连接到服务器")
			     })     

		},
		mounted:function(){  //虚拟dom加载完后才可以执行此操作，所以使用mounted
			var oHeight = document.body.clientHeight;
			document.getElementById('order-list').style.height = oHeight + 'px';
		},
		/*
		mounted(){
			var oHeight = document.body.clientHeight;
			document.getElementById('order-list').style.height = oHeight + 'px';
		}*/	
		methods:{
			addOrderList(goods){
				this.totalMoney = 0;
				this.totalCount = 0;
				//判断这个商品是否存在这个列表中
				let isHave = false;
				for(let i=0;i<this.tableData.length;i++){
					//console.log(this.tableData[i].goodsId)
					if(this.tableData[i].goodsId == goods.goodsId){
						isHave = true;  //存在
					}
				}
				//根据isHave的值判断订单列表中是否已经有商品
				if(isHave){
					//如果存在商品就进行商品数量增加
					let arr = this.tableData.filter(o =>o.goodsId == goods.goodsId);
					arr[0].count++;
				}else{
					//不存在就增加
					let newGoods = {
						goodsId: goods.goodsId,
						goodsName: goods.goodsName,
						price: goods.price,
						count:1
					};
					this.tableData.push(newGoods);
				}
				this.getAllMoney();

				//进行数量和价格的汇总
				/*
				this.tableData.forEach(element =>{
					this.totalCount += element.count;
					this.totalMoney = this.totalMoney+(element.count*element.price);
				})*/
			},
			//删除所有商品
			delAllGoods:function(){
				this.tableData = [];
				this.totalMoney = 0;
				this.totalCount = 0;
			},
			//删除单个商品
			delsingelGoods:function(goods){
				this.tableData = this.tableData.filter(o =>o.goodsId != goods.goodsId);
				//删除单个商品之后金额和数量重新计算，也就是调用this.getAllMoney().金额清零
				this.getAllMoney(); 
			},
			//汇总数量和总和
			getAllMoney:function(){
				this.totalMoney=0;
				this.totalCount=0;
				if(this.tableData){
					this.tableData.forEach(element=>{
						this.totalCount += element.count;
						this.totalMoney = this.totalMoney+(element.count*element.price);
					})
				}
			},
			//模拟结账
			check:function(){
				if(this.tableData!=0){
					this.tableData = [];
					this.totalCount = 0;
					this.totalMoney = 0;
					this.$message({
						message: '结账成功，感谢您又为店里出了一力！',
						type: 'success'
					})
				}else{
					this.$message.error('不能空结，老板了解您的急切心情！')
				}
			}

		}
	}
</script>

<style scoped>
	ul li{list-style:none;}
	.pos-order{background-color:#f9fafc;border-right:1px solid #c0ccda;}
	.btn-list{margin-top:10px;}
	.title{height:20px;border-bottom:1px solid #d3dce6;padding:10px;background-color:#f9fafc;text-align:left;}
	.often-goods-list ul li{
		list-style: none;
		float: left;
		border: 1px solid #e5e9f2;
		padding: 10px;
		margin: 10px;
		background-color: #fff;
	}
	.o-price{
		color: #58b7ff;
	}
	.goods-type{
		clear:both;
	}
	.cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auto;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
 
   }
   .cookList li span{
       
        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 18px;
       padding-left: 10px;
       color:brown;
 
   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
   .el-tabs__nav-scroll{padding-left:10px !important;}
   .totalDiv{background-color: #fff;padding:10px;border-bottom:1px solid #E5E9F2;}

</style>