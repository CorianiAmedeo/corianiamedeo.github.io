<script>
</script>

<section id="hero" class="background-yellow">
	<h1 class="font-medium text-dark-primary" style="z-index: 1;">
		A product <br /> designer that <br /> speaks dev.
	</h1>
	<canvas id="threeScene"></canvas>
</section>

<style>
	#hero {
		overflow: hidden;
	}

	#hero > h1 {
		text-align: center;
		padding-top: calc(2em + 15vh);
		padding-bottom: calc(1.5em + 15vh);
		font-size: clamp(3rem, 12vw, 6rem);
	}

	#threeScene {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	@media (orientation: landscape) {
		#hero > h1 {
			padding-top: calc(2em);
			padding-bottom: calc(1.5em);
			font-size: clamp(3rem, 12vh, 6rem);
		}
	}
</style>
