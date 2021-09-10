<script lang="ts">
	import { Link } from "svelte-routing";
</script>

<main>
	<section class="parallax">
		<div class="content">
			<div class="super-line">
				<h1>Welcom to Minter!</h1>
			</div>
			<div class="sub-line">
				<p>A neat tool to help you import transactions into Mint via CSV.</p>
			</div>
			<Link to="start" class="btn">Get started!</Link>
		</div>

		<img
			src="https://thumbnails.production.thenounproject.com/CkamvsO4nEz_j8-0XZDBd0wI1kQ=/fit-in/1000x1000/photos.production.thenounproject.com/photos/00D0F1B0-B634-4ACB-A0D6-75E5B7BAF1E5.jpg"
		/>
	</section>
</main>

<style>
	.parallax {
		max-width: fit-content;
		position: relative;
		overflow: hidden;
	}

	.parallax .content {
		position: absolute;
		left: 0;
		right: 0;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.parallax .super-line {
		margin-top: 2rem;
		background: #333;
		transform: translateX(1%);
		border-top-left-radius: 1rem;
		border-bottom-left-radius: 1rem;
		box-shadow: 0 0 15px #0008;
	}

	.parallax .super-line p {
		transform: translateX(-1%);
		/* padding: 0.5rem; */
	}

	.parallax .sub-line {
		margin-top: 2rem;
		background: #0ac775;
		transform: translateX(-10%);
		border-top-right-radius: 1rem;
		border-bottom-right-radius: 1rem;
		box-shadow: 0 0 15px #0008;
	}

	.parallax .sub-line p {
		transform: translateX(10%);
		/* padding: 0.5rem; */
	}

	.parallax h1 {
		text-shadow: 0 0 15px black;
	}

	.parallax :global(.btn) {
		/* justify-self: center;
		align-self: center; */
		/* position: absolute; */
		/* width: 10rem;
		height: 3rem; */
		/* left: 50%;
		right: 50%;
		top: 50%;
		bottom: 50%; */
	}
</style>
