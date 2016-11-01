import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from './plugins/logger'

// Use store
Vue.use(Vuex)

// Get system debug
var debug = false
if (typeof window.DEBUG != 'undefined' && window.DEBUG) {
	debug = true
}

// Export out the store
export default new Vuex.Store({
	state: {
		test: true // State of your app
	},
	getters: {
		// Getting functions
	},
	mutations: {
		// Mutations
	},
	actions: {
		// Async functions that will lead to mutation
	},
	plugins: debug ? [createLogger()] : []
})
