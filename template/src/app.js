import Vue from 'vue'
import AppComponent from './components/App.vue'
import Store from './store'

export default function(context) {
	// Pass the context data into the store as well
	// because store might use this static data
	const store = Store(context)
	
	// Return a new instance of the app with context as property
	const Instance = new Vue({
		store,
		render: function(createElement) {
			// Create the app
			return createElement(AppComponent, {
				props: context
			})
		}
	})

	return {
		app: Instance,
		store
	}
}
