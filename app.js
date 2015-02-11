var express = require('express');
var path =require("path");//请求样式或者脚本的地址,加载静态脚本

var port = process.env.PORT || 3000;
var app = express();

app.set("views","./views/pages/");//视图页面根目录
app.set("view engine",'jade');
//app.set(express.bodyParser());

app.use(express.static(path.join(__dirname,"bower_components")));//获取静态资源
app.listen(port);

console.log("web strat"+port);

// index page
app.get('/',function(req,res){
	res.render('index',{
		title:'imooc 首页',
		movies:[{
			title:'机械战警',
			_id:1,
			poster:'./img/rose.jpg'
		},{
			title:'机械战警',
			_id:1,
			poster:'./img/rose.jpg'
		},{
			title:'机械战警',
			_id:1,
			poster:'./img/rose.jpg'
		},{
			title:'机械战警',
			_id:1,
			poster:'./img/rose.jpg'
		},{
			title:'机械战警',
			_id:1,
			poster:'./img/rose.jpg'
		},{
			title:'机械战警',
			_id:1,
			poster:'./img/rose.jpg'
		},{
			title:'机械战警',
			_id:1,
			poster:'./img/rose.jpg'
		}]
	});
});

// list page
app.get('/admin/list',function(req,res){
	res.render('list',{
		title:'imooc 列表页',
		movies:[{
			title:'机械战警',
			_id:1,
			doctor:'何塞.帕迪利亚',
			country:'美国',
			year:2014,
			poster:'http://baidu.com',
			language:'English',
			flash:'./img/flash3440.swf',
			summary:'sdfsdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
		}

		]
	});

});

// detail page
app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title:'详情页面',
		movie:{
			doctor:'何塞.帕迪里亚',
			country:'美国',
			title:'机械战警',
			year:2014,
			poster:'http://baidu.com',
			language:'英语',
			flash:'./img/flash3440.swf',
			summary:'sdfsdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
		}
	});

});

// 后台录入页
app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title:'后台录入',
		movie:{
			title:'',
			doctor:'',
			country:'',
			year:'',
			poster:'',
			flash:'',
			summary:'',
			language:''
		}
	});

});


