<script lang="ts">
</script>

<main>
	<section class="landing">
		<div class="left">
			<div class="top">
				<h1>Welcom to Minty!</h1>
			</div>
			<div class="bottom">
				<p>A neat tool to help you import transactions into Mint via CSV.</p>
				<div class="made-with-love">
					Made with ❤️ by <a
						href="https://github.com/NoahCardoza/"
						target="_blank">Noah Cardoza</a
					>
				</div>
			</div>
		</div>
		<div class="right">
			<a href="#/start" class="btn circle">GO</a>
		</div>
	</section>
</main>

<style>
	.landing {
		display: flex;
		align-items: center;
		text-align: center;
		height: 100vh;
	}

	.left {
		height: 100%;
		width: 60%;
		min-width: 500px;
		z-index: 0;
	}

	.left .top {
		height: 50%;
		background-color: #333;
		display: flex;
		align-items: flex-end;
		justify-content: center;

		box-shadow: 8px 2px 9px 5px #0000004f;
	}

	.left .bottom {
		height: 50%;
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	.left .bottom p {
		flex-grow: 1;
	}

	.left .bottom .made-with-love {
		padding: 21px;
		justify-self: flex-end;
		color: #00ce8b;
		background-color: #333;
	}

	.right {
		height: 100%;
		width: 40%;
		background-image: url("https://thumbnails.production.thenounproject.com/CkamvsO4nEz_j8-0XZDBd0wI1kQ=/fit-in/1000x1000/photos.production.thenounproject.com/photos/00D0F1B0-B634-4ACB-A0D6-75E5B7BAF1E5.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
	}
</style>
