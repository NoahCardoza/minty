<script lang="ts">
	import { state } from "../store";

	let form: HTMLInputElement;
	let value = null;

	const onClick = () => {
		const formData = new FormData();

		formData.append("csv", form.files[0]);
		formData.append("session", JSON.stringify($state.session));

		fetch("http://127.0.0.1:9000/api/import", {
			method: "POST",
			body: formData,
		});
	};
</script>

<main>
	<h1>Preparing the CSV file</h1>
	<ol>
		<li>
			Make sure your CSV file has the headers below. The names and order are
			important. If the columns are out of order, the import will either fail,
			or import erroneous data to your account.
			<br />
			<br />
			<table>
				<thead>
					<tr>
						<th>Transaction Date</th>
						<th>Description</th>
						<th>Category</th>
						<th>Amount</th>
						<th>Check #</th>
						<th>Notes</th>
					</tr>
				</thead>
			</table>
			<br />
			If you don't have a "Check #" or any "Notes" just leave those cells blank.
		</li>
		<li>Make sure the date matches the format "MM/DD/YYYY".</li>
		<li>
			Finally make sure the "Category" cell contains one of the following
			categories:
			<ul style="column-count: 2;">
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
		<!-- <li>
			Finally, select an account to import the transactions to:
			<select bind:value>
				{#each $state.accounts as account}
					<option value={account.value}>{account.name}</option>
				{/each}
			</select>
		</li> -->
		<li>And finally, uplod the cleaned CSV and click "Upload".</li>
	</ol>

	<input bind:this={form} type="file" id="cookies.txt" accept=".txt" />
	<button on:click={onClick}>Submit</button>
</main>

<style>
	tr th {
		border: black 1px solid;
	}
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
