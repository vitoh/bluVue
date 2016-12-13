import App from './app.js'

// Context for the app
const context = {
	appData: window.appData
}

// Create a App with context
let {app, store} = App(context)
	

// Check if there is any store data
if (context.appData.storeData) {
	for (let key in context.appData.storeData) {
		if (store.state[key]) {
			store.state[key] = context.appData.storeData[key]
		}
	}
}

// Server side rendering will generate an initial state
// hydrate the store if there is initial state
if (window.__INITIAL_STATE__) {
	store.replaceState(window.__INITIAL_STATE__)
}

// Create the app with the context
// and mount it to the dom
app.$mount('#app')
