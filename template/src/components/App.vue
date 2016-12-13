<template>
	<div id="app">
		<h1>{{ msg }}</h1>
		<h2>{{ storeMessage }}</h2>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'app',
	// Date is the state within this component
	data () {
		return {
			msg: 'Welcome to your project, now make something beautiful'
		}
	},
	// This map the state message in store - global app state
	computed: mapState(['storeMessage'])
}
</script>

<style>
#app {
	font-family: Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

h1, h2 {
	font-weight: normal;
}

</style>
