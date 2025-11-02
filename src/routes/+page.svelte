<script>
    import Header from '$lib/components/Header.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import Intro from '$lib/components/Intro.svelte';
</script>

<Header/>
<div id="page-main">
    <section>
        <Hero />
        <Intro />     
    </section>
    <section>
        <div id="Intro"></div>   
        Hero
    </section>
</div>

<style>
    #page-main {
        width: 100%;
    }

    section {
        margin-bottom: var(--space-24);

        overflow: hidden;

        background-color: hsl(var(--surface));
        border-block: 1px solid hsla(var(--border-color), var(--border-opacity));
    }
    
    @media only screen and (min-width: 46rem) {
        #page-main {
            padding-inline: max(var(--space-4), calc((100vw - var(--section-xl)) / 2));
        }

        section {
            background-color: hsl(var(--surface));
            border: 1px solid hsla(var(--border-color), var(--border-opacity));
            border-radius: var(--radius);
        }
    }
</style>