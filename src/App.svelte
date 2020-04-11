<script>
	import { Router, Route } from "svelte-routing";
	import NavLink from "./components/NavLink.svelte";
	import Home from "./routes/Home.svelte";
	import About from "./routes/About.svelte";
	// Used for SSR. A falsy value is ignored by the Router.
	export let url = "";
</script>

<Router url="{url}">
	<style src="./global.scss"></style>
	<nav>
		<NavLink to="/">~/home</NavLink>
		<NavLink to="about">~/about</NavLink>
	</nav>
	<div>
		<Route path="/" component="{Home}" />
		<Route path="about" component="{About}" />
	</div>
</Router>