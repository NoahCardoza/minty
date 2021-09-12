<script lang="ts">
	import { Router, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import Start from "./routes/Start.svelte";
	import Upload from "./routes/Upload.svelte";
	import Redirect from "./components/Redirect.svelte";

	import { state } from "./store";
</script>

<Router>
	<Route path="/"><Home /></Route>
	<Route path="/start"><Start /></Route>
	<Route path="/upload">
		{#if $state == null}
			<Redirect to="/start" />
		{:else}
			<Upload />
		{/if}
	</Route>
</Router>
