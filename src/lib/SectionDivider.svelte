<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	let canvasElement;
	let sandbox;

	onMount(async () => {
		if (browser) {
			const GlslCanvas = (await import('glslCanvas')).default;

			const fragmentUrl = canvasElement.dataset.fragmentUrl;
			if (fragmentUrl) {
				try {
					const response = await fetch(fragmentUrl);
					if (!response.ok) {
						throw new Error(`Failed to load fragment shader: ${response.statusText}`);
					}
					const fragmentString = await response.text();

					requestAnimationFrame(() => {
						if (canvasElement) {
							const rect = canvasElement.getBoundingClientRect();

							canvasElement.width = Math.floor(rect.width * window.devicePixelRatio);
							canvasElement.height = Math.floor(rect.height * window.devicePixelRatio);

							sandbox = new GlslCanvas(canvasElement, { fragmentString });
							sandbox.resize();
						}
					});
				} catch (error) {
					console.error('Error loading or initializing GLSL Canvas:', error);
				}
			} else {
				console.warn('Canvas element is missing data-fragment-url attribute.');
			}
		}
	});

	onDestroy(() => {
		if (sandbox) {
			sandbox.destroy();
		}
	});
</script>

<canvas
	bind:this={canvasElement}
	class="glslCanvas"
	id="sectionDivider"
	data-fragment-url="/SectionDividerShader.frag"
></canvas>

<style>
	#sectionDivider {
		width: 100%;
		height: 6rem;

		background-color: var(--neutral-dark);
	}
</style>
