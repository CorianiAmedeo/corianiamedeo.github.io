<script>
	import Icon from '$lib/Icon.svelte';

	let {
		type = 'primary',
		mode = 'light',
		status = '',
		text = '',
		icon = '',
		onclick = '',
		href = '',
		target = ''
	} = $props();
	let withIcon = $state(false),
		onlyIcon = $state(false),
		isLink = $state(false);

	if (text == '') {
		onlyIcon = true;
	}
	if (icon != '') {
		withIcon = true;
	}
	if (href != ''  && target != '') {
		isLink = true;
	}
</script>

{#if isLink}
<a {href} {target} class="{status}">
	<button
		{onclick}
		class="text-base font-medium {type}-{mode} {withIcon ? 'with-icon' : 'without-icon'}{onlyIcon
			? '-only'
			: ''}"
	>
		{#if !onlyIcon}
			{text}
		{/if}

		{#if withIcon}
			<Icon name={icon} {type} {mode} />
		{/if}
	</button>
</a>
{:else}
<div id="wrapper" class="{status}">
	<button
		{onclick}
		class="text-base font-medium {type}-{mode} {withIcon ? 'with-icon' : 'without-icon'}{onlyIcon
			? '-only'
			: ''}"
	>
		{#if !onlyIcon}
			{text}
		{/if}

		{#if withIcon}
			<Icon name={icon} {type} {mode} />
		{/if}
	</button>
</div>
{/if}

<style>
	button, a,
	#wrapper {
		display: flex;
		justify-content: center;
		flex-shrink: 0;
		flex-grow: 1;
		white-space: nowrap;
	}

	button {
		gap: var(--space-2);
		border-radius: 1.5rem;
	}

	.with-icon {
		padding: var(--space-3) var(--space-4) var(--space-3) var(--space-6);
	}

	.with-icon-only {
		padding: var(--space-3) var(--space-3) var(--space-3) var(--space-3);
	}

	.without-icon {
		padding: var(--space-3) var(--space-6) var(--space-3) var(--space-6);
	}

	.primary-light {
		color: hsla(var(--neutral-light), 1);
		background-color: hsla(var(--neutral-dark), 1);
	}

	.secondary-light {
		color: hsla(var(--neutral-dark), 1);
		background-color: hsla(var(--neutral-dark), 0.15);
	}

	.primary-dark {
		color: hsla(var(--neutral-dark), 1);
		background-color: hsla(var(--neutral-light), 1);
	}

	.secondary-dark {
		color: hsla(var(--neutral-light), 1);
		background-color: hsla(var(--neutral-light), 0.15);
	}

	.primary-light:hover {
		background-color: hsl(0, 0%, 2%);
	}

	.secondary-light:hover {
		background-color: hsla(var(--neutral-dark), 0.24);
	}

	.primary-dark:hover {
		background-color: hsl(0, 0%, 98%);
	}

	.secondary-dark:hover {
		background-color: hsla(var(--neutral-light), 0.24);
	}

	.disabled {
		pointer-events: none;
		touch-action: none;
		opacity: .4;
	}
</style>
