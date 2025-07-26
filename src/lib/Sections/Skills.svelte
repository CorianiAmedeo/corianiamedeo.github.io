<script>
	import Button from '$lib/Button.svelte';

    let category = $state(0);

    function categoryChange(x) {
        category = x;
	}
</script>

<section class="section background-dark">
    <div id="content">
        <div id="title-line">
            <h2 class="text-5xl font-base text-light-primary">Adding life <br>to designs</h2>
        </div>
        <div id="categories">
            <div class="category-text">
                {#if category == 0}
                    <h3 class="text-2xl font-base text-light-primary">
                        Prototyping
                    </h3>
                    <span class="text-base font-light text-light-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                {:else if category == 1}
                    <h3 class="text-2xl font-base text-light-primary">
                        Motion
                    </h3>
                    <span class="text-base font-light text-light-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                {:else if category == 2}
                    <h3 class="text-2xl font-base text-light-primary">
                        Interaction
                    </h3>
                    <span class="text-base font-light text-light-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                {:else if category == 3}
                    <h3 class="text-2xl font-base text-light-primary">
                        3D
                    </h3>
                    <span class="text-base font-light text-light-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                {/if}
            </div>
            <div id="categories-buttons">
                <div>
                    <div>
					<Button
                        onclick={() => categoryChange(0)}
						type={category == 0 ? 'primary' : 'secondary'}
						mode={'dark'}
						text={'Prototyping'}
					/>
                    </div>
                    <div>
                    <Button
                        onclick={() => categoryChange(1)}
						type={category == 1 ? 'primary' : 'secondary'}
						mode={'dark'}
						text={'Motion'}
					/>
                    </div>
                </div>
                <div>
                    <div>
                    <Button
                        onclick={() => categoryChange(2)}
						type={category == 2 ? 'primary' : 'secondary'}
						mode={'dark'}
						text={'Interaction'}
					/>
                    </div>
                    <div>
                    <Button
                        onclick={() => categoryChange(3)}
						type={category == 3 ? 'primary' : 'secondary'}
						mode={'dark'}
						text={'3D'}
					/>
                    </div>
                </div>
            </div>
        </div>
        <video autoplay muted loop controls playsinline class="bg-video">
            <source src="/DividerAnimation.webm" type="video/webm">
            <source src="/DividerAnimation.mp4" type="video/mp4">
        </video>
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

    #categories {
        max-width: var(--section-md);
        margin-inline: auto;

        disPlay: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        gap: var(--space-6);
    }

    .category-text {
        padding-left: var(--space-8);
        flex-direction: column;
        gap: var(--space-2);
        max-width: var(--section-xsm);
        flex-shrink: 1;
        border-left: 1px solid hsla(var(--detail), .6);
    }

    .category-text > h3 {
        margin-bottom: var(--space-2);
    }

    #categories-buttons {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: var(--space-2);
        flex-shrink: 1;
        margin: auto;
        justify-content: end;
    }

    #categories-buttons > div {
        display: flex;
        flex-direction: row;
        justify-content: end;
        gap: var(--space-2);
        flex-shrink: 1;
        margin: none;
    }

    video {
        margin-top: var(--space-6);
        margin-inline: auto;
        background-color: yellow;
        width: 100%;
        max-width: var(--section-md);
        aspect-ratio: 3/4;
    }

    @media screen and (min-width: 37rem) {
        #title-line, #categories {
            margin-inline: auto;
        }

        #categories {
            flex-wrap: nowrap;
        }

        #categories-buttons, #categories-buttons > div {
            max-width: var(--section-xsm);
            margin-left: auto;
        }
  
        #content {
            margin-inline: var(--space-6);
        }
    }

    @media screen and (min-width: 47.5rem) {
        #title-line, #categories {
            max-width: var(--section-xl);
            margin-inline: auto;
        }

        #categories-buttons {
            margin-left: auto;
            margin-right: 0;
        }

        video {
            max-width: var(--section-xl);
            aspect-ratio: 16/9;
        }
    }
</style>