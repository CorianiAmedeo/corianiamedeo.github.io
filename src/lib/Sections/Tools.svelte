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
<section class="section">
    <section class="background-dark">
        <div id="content">
            <div id="title-line">
                <h2 class="text-3xl font-base text-light-primary">Jumping between tools</h2>
                <div id="carousel-controls">
                    <Button
                        onclick={stop}
                        type={'secondary'}
                        mode={'dark'}
                        icon={slideshow_anim == "pause" ? 'Play' : 'Pause'}
                        aria-controls="slideshow-stop-play"
                    />
                </div>
            </div>
        </div>
    </section>
    <section  class="background-dark slideshow-container">
        <div class="slideshow slideshow-{slideshow_anim}">   
                <div class="slide-item">
                    <div class="tool-logo"></div>
                    <div class="slide-text">
                        <h3 class="text-light-primary text-base font-base">Software name</h3>
                        <p class="text-light-secondary font-light">Lorem ipsum.</p>
                    </div>
                </div>   
                <div class="slide-item">
                    <div class="tool-logo"></div>
                    <div class="slide-text">
                        <h3 class="text-light-primary text-base font-base">Software name</h3>
                        <p class="text-light-secondary font-light">Lorem ipsum.</p>
                    </div>
                </div>   
                <div class="slide-item">
                    <div class="tool-logo"></div>
                    <div class="slide-text">
                        <h3 class="text-light-primary text-base font-base">Software name</h3>
                        <p class="text-light-secondary font-light">Lorem ipsum.</p>
                    </div>
                </div>   
                <div class="slide-item">
                    <div class="tool-logo"></div>
                    <div class="slide-text">
                        <h3 class="text-light-primary text-base font-base">Software name</h3>
                        <p class="text-light-secondary font-light">Lorem ipsum.</p>
                    </div>
                </div>   
                <div class="slide-item">
                    <div class="tool-logo"></div>
                    <div class="slide-text">
                        <h3 class="text-light-primary text-base font-base">Software name</h3>
                        <p class="text-light-secondary font-light">Lorem ipsum.</p>
                    </div>
                </div>
            </div>
            <div aria-hidden="true" class="slideshow slideshow-{slideshow_anim}">    
                <div class="slide-item">
                    <div class="tool-logo"></div>
                    <div class="slide-text">
                        <h3 class="text-light-primary text-base font-base">Software name</h3>
                        <p class="text-light-secondary font-light">Lorem ipsum.</p>
                    </div>
                </div>   
                <div class="slide-item">
                    <div class="tool-logo"></div>
                    <div class="slide-text">
                        <h3 class="text-light-primary text-base font-base">Software name</h3>
                        <p class="text-light-secondary font-light">Lorem ipsum.</p>
                    </div>
                </div>   
                <div class="slide-item">
                    <div class="tool-logo"></div>
                    <div class="slide-text">
                        <h3 class="text-light-primary text-base font-base">Software name</h3>
                        <p class="text-light-secondary font-light">Lorem ipsum.</p>
                    </div>
                </div>   
                <div class="slide-item">
                    <div class="tool-logo"></div>
                    <div class="slide-text">
                        <h3 class="text-light-primary text-base font-base">Software name</h3>
                        <p class="text-light-secondary font-light">Lorem ipsum.</p>
                    </div>
                </div>   
                <div class="slide-item">
                    <div class="tool-logo"></div>
                    <div class="slide-text">
                        <h3 class="text-light-primary text-base font-base">Software name</h3>
                        <p class="text-light-secondary font-light">Lorem ipsum.</p>
                    </div>
                </div>
            </div>
            <div aria-hidden="true" class="slideshow slideshow-{slideshow_anim}">    
                <div class="slide-item">
                    <div class="tool-logo"></div>
                    <div class="slide-text">
                        <h3 class="text-light-primary text-base font-base">Software name</h3>
                        <p class="text-light-secondary font-light">Lorem ipsum.</p>
                    </div>
                </div>   
                <div class="slide-item">
                    <div class="tool-logo"></div>
                    <div class="slide-text">
                        <h3 class="text-light-primary text-base font-base">Software name</h3>
                        <p class="text-light-secondary font-light">Lorem ipsum.</p>
                    </div>
                </div>   
                <div class="slide-item">
                    <div class="tool-logo"></div>
                    <div class="slide-text">
                        <h3 class="text-light-primary text-base font-base">Software name</h3>
                        <p class="text-light-secondary font-light">Lorem ipsum.</p>
                    </div>
                </div>   
                <div class="slide-item">
                    <div class="tool-logo"></div>
                    <div class="slide-text">
                        <h3 class="text-light-primary text-base font-base">Software name</h3>
                        <p class="text-light-secondary font-light">Lorem ipsum.</p>
                    </div>
                </div>   
                <div class="slide-item">
                    <div class="tool-logo"></div>
                    <div class="slide-text">
                        <h3 class="text-light-primary text-base font-base">Software name</h3>
                        <p class="text-light-secondary font-light">Lorem ipsum.</p>
                    </div>
                </div>
        </div>
    </section>
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

    .slideshow-container {
        display: flex;
        flex-direction: row;
        margin: auto;
        
        width: 102.5rem;
        max-width: 100%;
    }

    .slideshow {
        display: flex;
        flex-direction: row;
        gap: var(--space-12);
        padding-inline: var(--space-6);
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
        flex-direction: row;
        gap: var(--space-4);
        width: 14rem;

        flex-shrink: 0;
    }

    .tool-logo {
        height: 3rem;
        width: 3rem;
        background-color: hsla(var(--neutral-light), .2);
        border-radius: 0.75rem;
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
        .slideshow-container {
            mask-image: linear-gradient(90deg,transparent 0%, #000 15%, #000 85%, transparent);
        }
    }
</style>