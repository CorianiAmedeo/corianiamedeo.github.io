<script>
    import Icon from "$lib/Icon.svelte";

    let { type = "primary", mode = "light", text = "", icon = "", onclick = "", href = "", target = ""} = $props();
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
        flex-grow: 1;
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
    }

    .secondary-light {
        color: hsla(var(--neutral-dark), 1);
    }

    .primary-dark {
        color: hsla(var(--neutral-dark), 1);
        background-color: hsla(var(--neutral-light), 1);
        box-shadow: 0 3px 0px rgba(255, 255, 255, 0.65);
        transform: translateY(-3px);
    }

    .secondary-dark {
        color: hsla(var(--neutral-light), 1);
        background-color: hsla(var(--neutral-light), .2);
        box-shadow: 0 3px 0px rgba(255, 255, 255, 0.1);
        transform: translateY(-3px);
    }
    
    @media(hover: hover) and (pointer: fine) {
        .primary-dark:hover {
            box-shadow: 0 2px 0px rgba(255, 255, 255, 0.65);
            transform: translateY(-2px);
        }

        .secondary-dark:hover {
            box-shadow: 0 2px 0px rgba(255, 255, 255, 0.1);
            transform: translateY(-2px);
        }
    }

    .primary-dark:active {
        box-shadow: 0 0px 0px rgba(255, 255, 255, 0);
        transform: translateY(0px);
    }

    .secondary-dark:active {
        box-shadow: 0 0px 0px rgba(255, 255, 255, 0);
        transform: translateY(0px);
    }
    
    .primary-dark, .secondary-dark {
        transition: transform 100ms, box-shadow 100ms;
    }
</style>