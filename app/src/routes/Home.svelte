<script lang="ts">
</script>

<main>
	<section class="landing">
		<div class="left">
			<div class="top">
				<h1>Welcome to Minty!</h1>
			</div>
			<div class="bottom">
				<div class="content">
					<p>A free, open-source tool to import CSV files into Mint.</p>
					<p>
						For more information take a look at the <a
							href="https://github.com/NoahCardoza/minty"
							target="_blank">source code</a
						>.
					</p>
				</div>
				<div class="small-image with-image">
					<a href="#/start" class="btn circle">GO</a>
				</div>
				<div class="made-with-love">
					Made with ❤️ by <a
						href="https://github.com/NoahCardoza/"
						target="_blank">Noah Cardoza</a
					>
				</div>
			</div>
		</div>
		<div class="right with-image">
			<a href="#/start" class="btn circle">GO</a>
		</div>
	</section>
</main>

<style>
	main {
		background-color: aliceblue;
	}
	h1 {
		margin-left: 1rem;
		margin-right: 1rem;
	}
	.landing {
		display: flex;
		align-items: center;
		text-align: center;
		height: 100vh;
	}

	.left {
		height: 100%;
		width: 60%;
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
		justify-content: space-between;
	}

	.left .bottom .content {
		padding: 1rem;
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

	.with-image {
		background-image: url("https://thumbnails.production.thenounproject.com/CkamvsO4nEz_j8-0XZDBd0wI1kQ=/fit-in/1000x1000/photos.production.thenounproject.com/photos/00D0F1B0-B634-4ACB-A0D6-75E5B7BAF1E5.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		display: flex;
	}

	.right {
		height: 100%;
		width: 40%;
		align-items: center;
		justify-content: center;
		z-index: 100;
	}
	.small-image {
		display: none;
	}
	@media (max-width: 740px) {
		.left {
			width: 100%;
		}
		.right {
			display: none;
		}
		.small-image {
			display: flex;
			height: 100%;
			width: 100%;
			align-items: center;
			justify-content: center;
		}
	}
</style>
