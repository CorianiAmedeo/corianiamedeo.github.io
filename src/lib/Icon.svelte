<script>
	import ExternalLink from '$lib/Icons/ExternalLink.svelte';
	import HamburgerMenu from '$lib/Icons/HamburgerMenu.svelte';

	let { name = '', mode = 'light', type = 'primary' } = $props();

	const iconComponents = {
		ExternalLink,
		HamburgerMenu
	};

	let CurrentIcon = $derived(iconComponents[name]);
</script>

{#if CurrentIcon}
	<div class="{type}-{mode} icon-wrapper">
		<CurrentIcon />
	</div>
{/if}

<style>
	.icon-wrapper {
		width: 1.5rem;
		height: 1.5rem;
		justify-content: center;
		align-items: center;
	}

	.primary-light {
		color: hsla(var(--neutral-light), 1);
	}

	.secondary-light {
		color: hsla(var(--neutral-dark), 1);
	}

	.primary-dark {
		color: hsla(var(--neutral-dark), 1);
	}

	.secondary-dark {
		color: hsla(var(--neutral-light), 1);
	}
</style>
