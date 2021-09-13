<script lang="ts">
	import "../public/style.css";
	import Home from "./routes/Home.svelte";
	import Start from "./routes/Start.svelte";
	import Upload from "./routes/Upload.svelte";
	import Router from "svelte-spa-router";

	// import { state } from "./store";

	// ping heroku to get the instance started ASAP
	fetch(`${process.env.API_BASE_URL}/ping`);

	const routes = {
		"/": Home,
		"/start": Start,
		"/upload": Upload,
	};
</script>

<Router {routes} />
