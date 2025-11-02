<script>
</script>

<div id="hero">
    <h1 class="text-8xl">A product <br> designer</h1>
    <div id="star-container">
        <div class="space"></div>
        <div class="icon-star text-light"></div>
        <div class="space line"></div>
    </div>
    <h1 class="text-8xl right-aligned">that <br> speaks <br> dev.</h1>
</div>
<div id="greeting">
    <div class="space-after line"></div>
    <p class="text-lg">Hi! I'm Amedeo 👋</p>
</div>

<style>
    #hero {
        width: 100%;
        position: relative;
        min-height: calc(100vh - 5.5rem);

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #hero > h1 {
        z-index: 99;
        padding: var(--space-8) var(--space-16) var(--space-8) var(--space-16);
    }

    #star-container {
        width: 100%;
        height: 100%;
        position: absolute;

        display: flex;
        flex-direction: column;
        align-items: center;

        gap: var(--space-2);
    }

    .space {
        flex-grow: 1;
    }

    .space-after {
        height: var(--space-64);
    }

    .line {
        width: 1px;
        background-color: hsla(var(--border-color), var(--border-opacity));
    }

    #greeting {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding-bottom: var(--space-16);
    }
</style>