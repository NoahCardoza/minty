<script lang="ts">
	import "../public/style.css";
	import Home from "./routes/Home.svelte";
	import Start from "./routes/Start.svelte";
	import Upload from "./routes/Upload.svelte";
	import Router from "svelte-spa-router";

	// import { state } from "./store";

	const routes = {
		"/": Home,
		"/start": Start,
		"/upload": Upload,
	};
</script>

<Router {routes} />
