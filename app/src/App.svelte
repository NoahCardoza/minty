<script lang="ts">
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import Start from "./routes/Start.svelte";
	import Upload from "./routes/Upload.svelte";

	// export let url: string = location.pathname;
</script>

<Router>
	<!-- <nav>
		<Link to="/">Home</Link>
		<Link to="about">About</Link>
		<Link to="blog">Blog</Link>
	</nav> -->
	<div>
		<Route path="/"><Home /></Route>
		<Route path="/start"><Start /></Route>
		<Route path="/upload"><Upload /></Route>
	</div>
</Router>
