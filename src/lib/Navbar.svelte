<script>
	import Button from '$lib/Button.svelte';
	import { browser } from '$app/environment';
	import { slide } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';

	let { home = false, work = false, about = false } = $props();
	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	/* Check if windows get larger than 58rem and close the menu */
	function smallScreen(isSmallScreen) {
		if (isSmallScreen.matches) {
			isMenuOpen = false;
		} else {
			isMenuOpen = true;
		}
	}

	onMount(() => {
		if (browser) {
			var isSmallScreen = window.matchMedia('(max-width: 58rem)');

			smallScreen(isSmallScreen);

			isSmallScreen.addEventListener('change', function () {
				smallScreen(isSmallScreen);
			});
		}
	});
</script>

<header>
	<div id="navbar" class="prevent-select">
		<div class="row-1">
			<a href="/" class="combination-mark">
				<img src="/CombinationMark.svg" alt="Coriani Amedeo Logo" />
			</a>
			<div class="cta">
				<Button type={'primary'} mode={'dark'} text={'Contact me'} />
			</div>
			<div class="hamburger">
				<Button
					onclick={toggleMenu}
					type={'secondary'}
					mode={'dark'}
					icon={'HamburgerMenu'}
					aria-expanded={isMenuOpen}
					aria-controls="mobile-nav"
				/>
			</div>
		</div>
		{#if isMenuOpen == true}
			<nav class="row-2">
				<ul>
					<li>
						<a href="/" class="text-base {home ? 'text-light-primary' : 'text-light-secondary'}"
							>Home</a
						>
					</li>
					<li in:slide={{ duration: 150 }}>
						<a href="/work" class="text-base {work ? 'text-light-primary' : 'text-light-secondary'}"
							>Work</a
						>
					</li>
					<li in:slide={{ duration: 150 }}>
						<a
							href="/about"
							class="text-base {about ? 'text-light-primary' : 'text-light-secondary'}">About</a
						>
					</li>
				</ul>
			</nav>
			<div class="row-3">
				<div class="cta">
					<Button type={'primary'} mode={'dark'} text={'Contact me'} />
				</div>
				<div class="resume">
					<Button
						type={'secondary'}
						mode={'dark'}
						text={'Resume'}
						icon={'ExternalLink'}
						href="/CorianiAmedeo_ProductDesigner_Resume.pdf"
						target="_blank"
					/>
				</div>
			</div>
		{/if}
	</div>
</header>

<style>
	header {
		position: fixed;
		width: 100vw;
		padding: var(--space-2);

		z-index: 999;
	}

	#navbar {
		max-width: var(--section-xl);
		margin: auto;

		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		overflow: hidden;

		transition: max-width 300ms cubic-bezier(0.4, 0, 0.2, 1.2);
	}

	a {
		display: block;
	}

	.combination-mark {
		padding: var(--space-3);
		margin-inline-start: var(--space-2);
		flex-shrink: 0;
	}

	.combination-mark > img {
		width: 10.625rem;
		height: 1.5rem;
	}

	#navbar,
	.row-1 {
		background-color: hsl(var(--neutral-dark));
		border-radius: 2rem;
	}

	.row-1 {
		display: block;
		flex-shrink: 0;
	}

	.row-2 > ul,
	.row-3 {
		display: flex;
		justify-content: center;
		gap: var(--space-2);
	}

	.row-1,
	.row-2 > ul,
	.row-3 {
		padding: var(--space-2);
	}

	.row-2 {
		flex-shrink: 1;
		min-width: 0;
	}

	.row-2 * {
		overflow: hidden;
		flex-shrink: 1;
	}

	.row-2 > ul > li > a {
		padding: var(--space-3) var(--space-6) var(--space-3) var(--space-6);
		text-align: center;
	}

	.row-2 > ul > li > a:hover {
		color: hsla(var(--neutral-light), 1);
	}

	.row-2,
	.row-3 {
		background-color: hsl(var(--neutral-dark));
	}

	.row-2 {
		border-top-left-radius: 2rem;
		border-top-right-radius: 2rem;
	}

	.row-3 {
		flex-shrink: 0;
	}

	.row-1 > .cta,
	.row-1 > .hamburger {
		display: none;
	}

	@media (max-width: 58rem) {
		#navbar {
			max-width: var(--section-md);
			flex-direction: column;

			background-color: transparent;
		}

		.row-1 {
			display: flex;
			justify-content: center;
			gap: var(--space-2);
		}

		.row-1 > .cta {
			margin-inline-start: auto;
		}

		.row-1 > .cta,
		.row-1 > .hamburger {
			display: block;
		}

		.row-2 {
			margin-top: var(--space-1);
		}

		.row-2 > ul {
			flex-direction: column;
			padding: 0;
			gap: 0;
		}

		.row-2 > ul > li {
			padding: var(--space-2);
		}

		.row-2 > ul > li > a {
			padding: var(--space-4) var(--space-6) var(--space-4) var(--space-6);
			text-align: start;

			font-size: var(--font-size-lg);
			line-height: var(--line-height-lg);
			letter-spacing: var(--letter-spacing-lg);
		}

		.row-3 > .cta {
			display: none;
		}

		.row-3 > .resume {
			flex-grow: 1;
		}
	}

	@media (max-width: 39.25rem) {
		#navbar {
			max-width: var(--section-sm);
		}

		.combination-mark {
			flex-shrink: 1;
		}

		.row-1 > .cta {
			display: none;
		}

		.row-1 > .hamburger {
			margin-inline-start: auto;
		}

		.row-2 > ul > li,
		.row-2 > ul > li > a {
			flex-grow: 1;
		}

		.row-3 > .cta,
		.row-3 > .resume {
			display: block;
			flex-grow: 1;
		}

		.row-3 {
			flex-wrap: wrap;
		}
	}
</style>
