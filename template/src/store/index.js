import Vue from 'vue'
import Vuex from 'vuex'

// Use store
Vue.use(Vuex)

// Export out the store
export default function(context) {
	// Use the context - this is the static data that might require by the store
	// Its useful if your gettings, mutations and actions need it
	// e.g mutations in another file
	
	return new Vuex.Store({
		state: {
			storeMessage: 'Hello world' // State of your app
		},
		getters: {
			// Getting functions
		},
		mutations: {
			// Mutations
		},
		actions: {
			// Async functions that will lead to mutation
		}
	})
}
