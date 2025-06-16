<script>
    import Icon from "$lib/Icon.svelte";

    let { type = "primary", mode = "light", text = "", icon = "", onclick = "", href="", target=""} = $props();
    let withIcon = $state(false), onlyIcon = $state(false);

    if(text == ""){ onlyIcon = true;}
    if(icon != ""){ withIcon = true;}
</script>

<a href={href} target={target}>
    <button onclick={onclick} class="text-base {type}-{mode} {withIcon?"with-icon":"without-icon"}{onlyIcon?"-only":""}">
        {#if !onlyIcon}
            {text}
        {/if}
        
        {#if withIcon}
            <Icon name={icon} type={type} mode={mode} />
        {/if}
    </button>
</a>

<style>
    button, a{
        display: flex;
        justify-content: center;
        flex-shrink: 0;
    }

    button{
        flex-grow: 1;
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
        border: 1px solid hsla(var(--neutral-dark), .4);
    }

    .primary-dark {
        color: hsla(var(--neutral-dark), 1);
        background-color: hsla(var(--neutral-light), 1);
        border: 1px solid hsla(var(--neutral-light), 0);
    }

    .secondary-dark {
        color: hsla(var(--neutral-light), 1);
        border: 1px solid hsla(var(--neutral-light), .4);
    }

</style>