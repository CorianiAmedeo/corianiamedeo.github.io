<script>
</script>

<section class="background-dark">
    <div id="content">
        <div id="title-line">
            <h2 class="text-5xl font-base text-light-primary">Making work <br>stands out</h2>
        </div>
    </div>
</section>

<style>
    h2 {
        margin-bottom: var(--space-12);
    }  

    #content {
        margin-inline: var(--space-4);
        padding-bottom: var(--space-8);
    }

    #title-line {
        max-width: var(--section-md);
        margin-inline: auto;

        disPlay: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: var(--space-4);
    }

        @media screen and (min-width: 37rem) {
        #title-line {
            margin-inline: auto;
        }

        #content {
            margin-inline: var(--space-6);
        }
    }

    @media screen and (min-width: 47.5rem) {
        #title-line{
            max-width: var(--section-xl);
            margin-inline: auto;
        }
    }
</style>