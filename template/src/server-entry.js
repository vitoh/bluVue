import App from './app.js'

// Return app for server renderer
// The context is passed in by the server
export default function(context) {
	// Create app with context
	let {app, store} = App(context)

	// Set the initial state back to context
	// so the app can hydrate it on the client site
	context.initialState = store.state

	// Return the app for server renderer
	return app
}
