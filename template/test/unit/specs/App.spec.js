import Vue from 'vue'
import App from 'src/components/App.vue'
import Store from 'src/store/index.js'

// Create an store instance
const context = {}
const store = Store(context)

// Test the app
describe('App.vue', () => {
	const vm = new Vue({
		el: document.createElement('div'),
		store,
		render: (h) => h(App)
	})

	  it('should default message', () => {
	    expect(vm.$el.querySelector('#app h1').textContent)
	      .to.equal('Welcome to your project, now make something beautiful')
	  })
})
