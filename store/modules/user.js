import {
	USER_LOGIN,
} from '../mutation-type.js'
import { apiUser } from '@/config'
const state = {
	token:''
}
const getters = {
	
}
const mutations = {
	[USER_LOGIN](state,o){
		state.token = o.token;
		//存本地token
		console.log('o',o)
		uni.setStorageSync('user_id', o.user_id);
		uni.setStorage({
			key:'token',
			data:o.sess_id,
			success: (res) => {
				uni.reLaunch({ 
					url:'/pages/home/index'
				});
			}
		});
		
	},
}
const actions = {
	userPwdLogin({ commit }, o){
			apiUser.getLogins(o).then(res=>{
				commit(USER_LOGIN,res)
			})
		},
	userRegister({ commit }, o){
		return apiUser.getRegister(o)
	},	
}
export default {
	state,
	getters,
	mutations,
	actions
}