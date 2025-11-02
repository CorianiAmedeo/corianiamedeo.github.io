<script>
    let {children, style = "float", onclick = "", href} = $props(); 
</script>

<a href={href} {onclick} class={style}>
    {@render children()}
</a>

<style>
    a {
        padding-inline: var(--space-4);
        padding-block: var(--space-2);

        border-radius: 2.5rem;

        width: fit-content;
    }

    .float {
        color: hsl(var(--light-text));
    }

    .float:hover {
        color: hsl(0, 0%, 100%);
    }

    .primary {
        background-color: hsl(var(--btn-primary));
        color: hsl(var(--dark-text));

        font-weight: calc(var(--font-normal) + 50);
    }

    .primary:hover {
        background-color: hsl(0, 0%, 100%);

    }

    .secondary {
        background-color: hsla(var(--btn-primary), 12%);
        color: hsl(var(--light-text));

        font-weight: calc(var(--font-normal) + 50);
    }

    .secondary:hover {
        background-color: hsla(0, 0%, 100%, 12%);
        color: hsl(0, 0%, 100%);
    }
</style>