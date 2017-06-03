import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill'
import {actions} from './actions'
import {mutations} from './mutations'
import home from './modules/home'
import login from './modules/login'
import regist from './modules/regist'
import recharge from './modules/recharge'
import resetpwd from './modules/resetpwd'
import prodetail from './modules/prodetail'
import account from './modules/account'
import publicity from './modules/publicity'


Vue.use(Vuex)
let token = '';
let user = null;
try{
	token = localStorage.getItem('token');
	user = JSON.parse(localStorage.getItem('user'));
}catch(e){
	token = '';
	user = null;
}

const store = new Vuex.Store({
	state: {
		token:token, //user online state
		user: user ? user : {
			name: '音无结弦',
			img: '//i0.hdslb.com/bfs/face/121922b3ec1235997d5611f826e19faf31bd6d40.jpg_52x52.jpg',
		},
		trade: true, //平台是否开启交易
		/*user: {
			name: '音无结弦',
			img: '//i0.hdslb.com/bfs/face/121922b3ec1235997d5611f826e19faf31bd6d40.jpg_52x52.jpg',
		}, */
		capital: {
			balance: 1000
		},
		notice: {
			state: 1,
			type: 0,
			config: null
		},
		noticeClose: {
			state: 1,
			key: ''
		},
		message: {
			state: 1,
			type: 0,
			config: null
		},
		simpleModal: {
			state: 1,
			type: 0,
			config: null
		},
		confirmMoadl: {
			state: 1,
			config: null
		}
	},
	mutations,
	actions,
	modules: {
		home,
		login,
		regist,
		recharge,
		resetpwd,
		prodetail,
		account,
		publicity
	}
})

export default store
