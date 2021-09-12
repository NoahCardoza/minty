<script lang="ts">
	import { tweened } from "svelte/motion";
	import { cubicOut } from "svelte/easing";

	export let value: number = 0;

	const percentage = tweened(value, {
		duration: 1000,
		easing: cubicOut,
	});

	$: percentage.set(value);
</script>

<div class="progress">
	<div class="bar" style="width: {$percentage}%">
		<div class="text">{Math.round($percentage)}%</div>
	</div>
</div>

<style>
	.text {
		padding: 0 0.5rem;
		font-size: small;
		font-weight: 300;
	}

	.bar {
		background-color: #00ce8b;
		height: 1rem;
		line-height: 1rem;
		text-align: center;
	}

	.progress {
		width: 100%;
		height: 1rem;
		box-shadow: inset 0 0 10px 1px #3333;
		overflow: hidden;
		border-radius: 0.3rem;
	}
</style>
