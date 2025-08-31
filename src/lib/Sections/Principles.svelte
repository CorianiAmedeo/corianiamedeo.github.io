<script>
	import Button from '$lib/Button.svelte';

    let { slideshow_anim = "play" } = $props();


    function stop() {
        if (slideshow_anim == "play") {
		    slideshow_anim = "pause";
        } else {
            slideshow_anim = "play";
        }
	}
</script>

<section class="background-primary">
    <div id="content">
        <div id="title-line">
            <h2 class="text-3xl font-semibold text-dark-primary">Following strong principles</h2>
            <div id="carousel-controls">
                <Button
                    onclick={stop}
                    type={'secondary'}
                    mode={'light'}
                    icon={slideshow_anim == "pause" ? 'Play' : 'Pause'}
                    aria-controls="slideshow-stop-play"
                />
            </div>
        </div>
    </div>
</section>
<section  class="background-light slideshow-container">
    <div id="slideshow-max-width">
        <div class="slideshow slideshow-{slideshow_anim}">   
            <div class="slide-item">
                <div>🚕</div>
                <h3 class="text-dark-primary text-lg font-semibold">Title</h3>
                <p class="text-dark-primary font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>   
            <div class="slide-item">
                <div>🚕</div>
                <h3 class="text-dark-primary text-lg font-semibold">Title</h3>
                <p class="text-dark-primary font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>   
            <div class="slide-item">
                <div>🚕</div>
                <h3 class="text-dark-primary text-lg font-semibold">Title</h3>
                <p class="text-dark-primary font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>   
            <div class="slide-item">
                <div>🚕</div>
                <h3 class="text-dark-primary text-lg font-semibold">Title</h3>
                <p class="text-dark-primary font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>   
            <div class="slide-item">
                <div>🚕</div>
                <h3 class="text-dark-primary text-lg font-semibold">Title</h3>
                <p class="text-dark-primary font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>   
            <div class="slide-item">
                <div>🚕</div>
                <h3 class="text-dark-primary text-lg font-semibold">Title</h3>
                <p class="text-dark-primary font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div aria-hidden="true" class="slideshow slideshow-{slideshow_anim}">   
            <div class="slide-item">
                <div>🚕</div>
                <h3 class="text-dark-primary text-lg font-semibold">Title</h3>
                <p class="text-dark-primary font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>   
            <div class="slide-item">
                <div>🚕</div>
                <h3 class="text-dark-primary text-lg font-semibold">Title</h3>
                <p class="text-dark-primary font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>   
            <div class="slide-item">
                <div>🚕</div>
                <h3 class="text-dark-primary text-lg font-semibold">Title</h3>
                <p class="text-dark-primary font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>   
            <div class="slide-item">
                <div>🚕</div>
                <h3 class="text-dark-primary text-lg font-semibold">Title</h3>
                <p class="text-dark-primary font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>   
            <div class="slide-item">
                <div>🚕</div>
                <h3 class="text-dark-primary text-lg font-semibold">Title</h3>
                <p class="text-dark-primary font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>   
            <div class="slide-item">
                <div>🚕</div>
                <h3 class="text-dark-primary text-lg font-semibold">Title</h3>
                <p class="text-dark-primary font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    </div>
</section>

<style>   
    #content {
        margin-inline: var(--space-6);
        padding-bottom: var(--space-8);
    }

    #title-line {
        max-width: var(--section-md);
        margin-inline: auto;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: var(--space-4);
    }

    #carousel-controls {
        display: flex;
        gap: var(--space-2);
    }

    #slideshow-max-width {
        display: flex;
        flex-direction: row;
        margin: auto;
        overflow-x: hidden;
        
        width: 102.5rem;
        max-width: 100%;
    }

    .slideshow {
        min-height: 12.5rem;
        display: flex;
        flex-direction: row;
        will-change: transform; /* We should be nice to the browser - let it know what we're going to animate. */
        animation: scrolling 40s linear infinite;
    }

    .slideshow-pause {
        animation-play-state: Paused;
    }


    @keyframes scrolling {
        0% {
        transform: translateX(0);
        }
        100% {
        transform: translateX(-100%);
        }
    }

    .slide-item {
        display: flex;
        flex-direction: column;
        gap: var(--space-4);
        
        padding-left: var(--space-4);
        padding-right: var(--space-4);
        padding-top: var(--space-6);
        padding-bottom: var(--space-8);

        width: 18.75rem;
        flex-shrink: 0;
        
        border-right: 1px solid hsla(var(--primary), .5);
    }

    .slide-item > div {
        font-size: var(--font-size-2xl);
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
        #title-line {
            max-width: var(--section-xl);
            margin-inline: auto;
        }
    }

    @media screen and (min-width: 100rem) {
        #slideshow-max-width {
            mask-image: linear-gradient(90deg,transparent 0%, #000 15%, #000 85%, transparent);
        }
    }
</style>