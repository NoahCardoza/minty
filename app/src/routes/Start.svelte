<script lang="ts">
	import { navigate } from "svelte-routing";
	import { state } from "../store";

	let form: HTMLInputElement;

	const onClick = async () => {
		const formData = new FormData();

		formData.append("cookies", form.files[0]);
		const res = await fetch("http://127.0.0.1:9000/api/start", {
			method: "POST",
			body: formData,
		});
		const data = await res.json();
		state.set(data);
		navigate("/upload");
	};
</script>

<main>
	<h1>Granting temporary access to Mint</h1>
	<ol>
		<li>
			First, you'll need to install the
			<a
				href="https://chrome.google.com/webstore/detail/get-cookiestxt/bgaddhkoddajcdgocldbbfleckgcbcid?hl=en"
				target="_blank">Cookies.txt</a
			> Chrome extension.
		</li>
		<li>
			Next, you'll need to login to Mint on Chrome and click the new Cookies
			extension in top left of your browser window.
		</li>
		<li>Click the "Export" button.</li>
		<li>And finally, upload the file below:</li>
	</ol>

	<input bind:this={form} type="file" id="cookies.txt" accept=".txt" />
	<button on:click={onClick}>Submit</button>
</main>

<style>
	h1 {
		color: #06b6c9;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
