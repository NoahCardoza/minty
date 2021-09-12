<script lang="ts">
	import { state } from "../store";

	import Progress from "../components/Progress.svelte";

	let form: HTMLInputElement;
	let errorMessage: string;
	let isProcessing: boolean = false;
	let totalRecordsToImport: number;
	let totalRecordsProcessed: number = 0;
	let processProgress: number = 0;

	const onClick = async () => {
		isProcessing = false;
		totalRecordsToImport = null;
		totalRecordsProcessed = 0;
		processProgress = 0;

		const formData = new FormData();

		formData.append("csv", form.files[0]);
		formData.append("session", JSON.stringify($state.session));

		const res = await fetch("http://127.0.0.1:9000/api/import", {
			method: "POST",
			body: formData,
		});

		if (res.status === 400) {
			const data = await res.json();
			errorMessage = data.detail;
			isProcessing = false;
			return;
		}

		errorMessage = "";
		isProcessing = true;

		const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();

		totalRecordsToImport = Number((await reader.read()).value);
		while (true) {
			const { value, done } = await reader.read();
			if (done) break;
			totalRecordsProcessed += Number(value);
			processProgress =
				totalRecordsProcessed &&
				(totalRecordsProcessed / totalRecordsToImport) * 100;
		}

		isProcessing = false;
	};
</script>

<main>
	<h1>Preparing the CSV file</h1>
	<p>
		Before we can continue, we need to do something called data normalization.
		Mint is configured with certian categories so when we upload the CSV we must
		stick to these categories. If we were to try and use a catergory that
		doesn't exist in Mint, Mint won't know how to handle this transation and the
		import will fail. Click <a href="#mint-categories">here</a> to see a list of
		your avalible categories.
	</p>
	<p>
		Before we get into the meat of it, we'll first need to make sure we have the
		necessary columns. Make sure the top of your CSV looks like the table below:
	</p>
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Description</th>
				<th>Category</th>
				<th>Amount</th>
				<th>Notes</th>
			</tr>
		</thead>
	</table>
	<p>
		<small>If you don't have any "Notes" just leave those cells blank.</small>
	</p>
	<p>Below is an example of what your CSV should look like:</p>
	<table class="table table-bordered table-hover table-condensed">
		<thead
			><tr
				><th>Date</th>
				<th>Description</th>
				<th>Category</th>
				<th>Amount</th>
				<th>Notes</th>
			</tr></thead
		>
		<tbody>
			<tr>
				<td>4/29/21</td>
				<td>Trader Joes</td>
				<td>Groceries</td>
				<td align="right">-99.95</td>
				<td />
			</tr>
			<tr>
				<td>3/1/21</td>
				<td>Amazon.com</td>
				<td>Home Improvement</td>
				<td align="right">-262.54</td>
				<td />
			</tr>
			<tr>
				<td>2/15/21</td>
				<td>Costco</td>
				<td>Groceries</td>
				<td align="right">-69.97</td>
				<td />
			</tr>
			<tr>
				<td>2/15/21</td>
				<td>Wal-mart</td>
				<td>Home Supplies</td>
				<td align="right">-18.96</td>
				<td />
			</tr>
			<tr>
				<td>7/20/20</td>
				<td>Amazon.com</td>
				<td>Home Supplies</td>
				<td align="right">-75.18</td>
				<td />
			</tr>
			<tr>
				<td>7/15/20</td>
				<td>Amazon.com</td>
				<td>Lawn & Garden</td>
				<td align="right">-77.34</td>
				<td />
			</tr>
		</tbody>
	</table>
	<p>
		<small
			>Note: it's suggusted that you remove any creditcard payments from these
			imports. One of the limitations of Mint is they don't allow any manually
			imported transations into any other account except your cash account.
		</small>
	</p>
	<p>One final sanity check:</p>
	<ol>
		<li>
			Make sure <b>ALL</b> the "Date" cells match the format "MM/DD/YYYY" or "M/D/YY".
		</li>
		<li>
			Make sure all the "Category" cells exist in Mint. To make this easier I've
			compiled a list below of all the availible categories:
			<ul style="column-count: 2;" id="mint-categories">
				{#each $state.categories as group (group.name)}
					<li>
						{group.name}
						<ul style="column-count: 2;">
							{#each group.children as child (child)}
								<li>{child}</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ul>
		</li>
		<li>Select the normalized CSV and click "Upload".</li>
	</ol>
	<div class="file-upload">
		<input bind:this={form} type="file" id="cookies.txt" accept=".txt" />
		{#if isProcessing}
			<div style="padding: 1rem;width:100%;">
				<Progress value={processProgress} />
			</div>
		{/if}
		<button class="btn" on:click={onClick}>Submit</button>
	</div>
	{#if errorMessage}
		<p class="error-message">{errorMessage}</p>
	{/if}
	<p>
		If you need any help or find any bugs feel free to open an issue on GitHub.
	</p>
</main>

<style>
	main {
		width: 80%;
		margin: auto;
		background-color: aliceblue;
		min-height: 100%;
		padding: 1rem;
	}

	tr th,
	tr td {
		border: black 1px solid;
		padding: 0.5rem;
	}

	ul,
	ol {
		margin-top: 0.5rem;
	}

	ul,
	ol,
	li {
		margin-bottom: 0.5rem;
	}
</style>
