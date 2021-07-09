import * as localConfig from '../local/config'
import request from '@/common/request.js'

const webUrl = localConfig.websiteUrl
//账号登录
function getbanners(o){
	return new Promise((resolve, reject) => {
		uni.request({
			//url: webUrl + '/index.php?s=/api/user/login',
			url: webUrl + 'ecapi.banner.list',
			method: 'POST',
			data: o,
			header: {
				'Content-Type':'application/json;charset=UTF-8',
				//'Content-Type': 'application/json',
				'token': uni.getStorageSync('token')
			},
			success: (res) => {
				if(res.data.error_code ===0){
					resolve(res.data);
				}else{
					uni.showToast({title:res.data.error_desc,icon:'none'});
				}
				
			}
		})
	})
};
function getHomes(o){
	return new Promise((resolve, reject) => {
		uni.request({
			//url: webUrl + '/index.php?s=/api/user/login',
			//url: webUrl + 'ecapi.home.product.list',
			url: webUrl + 'App.Index.IndexListApi',
			
			method: 'POST',
			data: o,
			header: {
				'Content-Type':'application/json;charset=UTF-8',
				//'Content-Type': 'application/json',
				'token': uni.getStorageSync('token')
			},
			success: (res) => {
				if(res.data.ret ===200){
					resolve(res.data.data);
				}else{
					uni.showToast({title:res.data.error_desc,icon:'none'});
				}
				
			}
		})
	})
}

//账号登录 end
export default{
	getbanners,
	getHomes,
	
}