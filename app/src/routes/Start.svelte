<script lang="ts">
	import { push } from "svelte-spa-router";
	import { state } from "../store";

	let form: HTMLInputElement;
	let errorMessage: string;

	const onClick = async () => {
		const formData = new FormData();

		formData.append("cookies", form.files[0]);
		const res = await fetch(`${process.env.API_BASE_URL}/api/start`, {
			method: "POST",
			body: formData,
		});

		const data = await res.json();

		if (res.status === 400) {
			errorMessage = data.detail;
			return;
		}

		// (window as any).dataLayer.push({
		// 	event: "stage-started",
		// 	conversionValue: 66,
		// });

		errorMessage = "";

		state.set(data);
		push(`/upload`);
	};
</script>

<main>
	<div>
		<h1>Granting Access</h1>
	</div>
	<p>
		Sadly, Mint does not make it easy to import a CSV into their system. The
		only way this is possible is to employ a couple of tricks. The way websites
		track usually track logged-in users is with cookies. Cookies are small
		pieces of information that identify you to the server so it can "remember"
		you are logged in and all the information associated with your account as
		opposed to all the other users on the app.
	</p>
	<p>
		The way this tool works is you give it your cookies which allow it to make
		requests to Mint on your behalf. Tricking Mint into thinking you are sending
		the requests. As soon as the script is done running, you can log out of Mint
		which will reset your cookies, invalidating the cookies you gave the tool to
		ensure it won't be able to access your account in the future.
	</p>
	<p>How do I find these cookies?</p>
	<ol>
		<li>
			Install the
			<a
				href="https://chrome.google.com/webstore/detail/get-cookiestxt/bgaddhkoddajcdgocldbbfleckgcbcid?hl=en"
				target="_blank">Cookies.txt Chrome Extension</a
			>.
		</li>
		<li>Login to Mint on Chrome.</li>
		<li>
			Click the new Cookies.txt extension in the top left of your browser
			window.
		</li>
		<li>Click the "Export" button in the window that pops up.</li>
		<li>Upload the saved "intuit.com_cookies.txt" file in the field below:</li>
	</ol>
	<div class="file-upload">
		<input bind:this={form} type="file" accept=".txt" />
		<button on:click={onClick} class="btn">Submit</button>
	</div>

	{#if errorMessage}
		<p class="error-message">{errorMessage}</p>
	{/if}
</main>

<style>
	main {
		width: 80%;
		margin: auto;
		background-color: aliceblue;
		min-height: 100%;
		padding: 1rem;
	}
</style>
