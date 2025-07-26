<script>
	import Button from '$lib/Button.svelte';
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';

	let { activeItem = 0, carousel = false, carouselX = 0 } = $props();

	function smallScreen(isSmallScreen) {
		if (isSmallScreen.matches) {
            carousel = true;
		} else {
            carousel = false;
            activeItem = 0;
		}
	}

	onMount(() => {
		if (browser) {
			var isSmallScreen = window.matchMedia('(max-width: 47.5rem)');

			smallScreen(isSmallScreen);

			isSmallScreen.addEventListener('change', function () {
				smallScreen(isSmallScreen);
			});
		}
	});

    function goForward() {
        if (activeItem < 2) {
		    activeItem++;
        }
	}

    function goBack() {
		if (activeItem > 0) {
		    activeItem--;
        }
	}
</script>

<section class="section background-primary">
    <div id="title">
        <h2 class="text-5xl font-semibold text-dark-primary">Starting from <br>the basics</h2>
    </div>
    <div class="content">
        <ul id="cards"  class="activeItem-{activeItem}">
            <li id="list-before"><div></div></li>
            <li class="card"></li>
            <li class="card"></li>
            <li class="card"></li>
            <li id="list-after"><div></div></li>
        </ul>
        <ul id="cards-text">
            {#if carousel == false || activeItem == 0}
                <li class="card-text">
                    <h3 class="text-2xl font-semibold text-dark-primary">
                        Design Thinking
                    </h3>
                    <span class="text-base font-base text-dark-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                </li>
            {/if}
            {#if carousel == false || activeItem == 1}
                <li class="card-text">
                    <h3 class="text-2xl font-semibold text-dark-primary">
                        Visual Design
                    </h3>
                    <span class="text-base font-base text-dark-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                </li>
            {/if}
            {#if carousel == false || activeItem == 2}
                <li class="card-text">
                    <h3 class="text-2xl font-semibold text-dark-primary">
                        Design Systems
                    </h3>
                    <span class="text-base font-base text-dark-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                </li>
            {/if}
        </ul>
        {#if carousel == true}
            <div id="carousel-controls">
                <Button
					onclick={goBack}
					type={'secondary'}
					mode={'light'}
                    status = {activeItem == 0 ? 'disabled' : ''}
					icon={'BackArrow'}
					aria-controls="carousel-controls-back"
				/>
                <ul id="carousel-pagination">
                    <li class="current-{activeItem}"></li>
                    <li class="default"></li>
                    <li class="default"></li>
                    <li class="default"></li>
                </ul>
                <Button
					onclick={goForward}
					type={'secondary'}
					mode={'light'}
                    status = {activeItem == 2 ? 'disabled' : ''}
					icon={'ForwardArrow'}
					aria-controls="carousel-controls-forward"
				/>
            </div>
        {/if}
    </div>
</section>

<style>
    h2 {
        margin-bottom: var(--space-12);
        margin-inline: auto;
        max-width: var(--section-md);
    }
    
    #title {
        margin-inline: var(--space-4);
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: var(--space-6);
        margin-inline: var(--space-4);
    }

    #cards {
        display: flex;
        flex-direction: row;

        width: var(--section-xsm);
        margin: auto;
    }

    .activeItem-0 {
        transform: translateX(0px);
        transition: transform 1.0s;
    }

    .activeItem-1 {
        transform: translateX(-300px);
        transition: transform 1.0s;
    }

    .activeItem-2 {
        transform: translateX(-600px);
        transition: transform 1.0s;
    }

    .card {
        aspect-ratio: 300/365;
        width: var(--section-xsm);
        flex-shrink: 0;

        border-radius: 150px;
        background-color: hsla(var(--neutral-light), .2);
    }

    #list-before, #list-after {
        position: absolute;
        height: 365px;
        width: 150px;
        flex-shrink: 0;

        overflow: hidden;
    }

    #list-before {
        right: 100%;
    } 
    
    #list-after {
        left: 300%;
    }
    
    #list-before > div{
        position: relative;
        right: 150px;
        height: 365px;
        width: var(--section-xsm);

        background-color: hsla(var(--neutral-light), .2);
        border-radius: 0 150px 150px 0;
    }

    #list-after > div {
        position: relative;
        height: 365px;
        width: var(--section-xsm);

        background-color: hsla(var(--neutral-light), .2);
        border-radius: 150px 0 0 150px;
    }

    #cards-text {
        display: flex;
        flex-direction: row;
        margin: auto;
    }

    #cards-text > li {
        border-left: 1px solid hsla(var(--neutral-dark), .3);
        border-right: 1px solid hsla(var(--neutral-dark), .3);
    }

    .card-text {
        padding-inline: var(--space-8);
        flex-direction: column;
        max-width: var(--section-xsm);
    }

    .card-text > h3 {
        margin-bottom: var(--space-2);
    }

    #carousel-controls {
        display: flex;
        width: 184px;
        justify-content: space-between;
        margin-inline: auto;
    }

    #carousel-pagination {
        margin-inline: var(--space-6);
        display: flex;
        gap: var(--space-2);
        align-items: center;
    }

    #carousel-pagination > li {
        width: .5rem;
        height: .5rem;
        border-radius: .25rem;
    }

    #carousel-pagination > .current-0 {
        position: absolute;
        background-color: hsla(var(--neutral-dark), .6);
        transform: translateX(0px);
        transition: transform .3s;
    }

    #carousel-pagination > .current-1 {
        position: absolute;
        background-color: hsla(var(--neutral-dark), .6);
        transform: translateX(calc(var(--space-2) * 2));
        transition: transform .3s;
    }
    
    #carousel-pagination > .current-2 {
        position: absolute;
        background-color: hsla(var(--neutral-dark), .6);
        transform: translateX(calc(var(--space-2) * 4));
        transition: transform .3s;
    }

    #carousel-pagination > .default {
        background-color: hsla(var(--neutral-dark), .3);
    }

    @media screen and (min-width: 37rem) {
        h2 {
            max-width: var(--section-md);
        }
    }

    @media screen and (min-width: 47.5rem) {
        #title {
            margin-inline: var(--space-6);
        }
        
        h2 {
            max-width: var(--section-xl);
        }

        .content {
            margin-inline: var(--space-6);
        }

        #cards {
            width: 100%;
        }

        #cards, #cards-text {
            justify-content: center;
            max-width: var(--section-xl);
        }

        .card {
            flex-shrink: 1;
        }

        #list-before, #list-after {
            display: none;
        }

        #cards-text > li {
            border-left: 1px solid hsla(var(--neutral-dark), .3);
            border-right: none;
        }

        #cards-text:last-child {
            border-right: 1px solid hsla(var(--neutral-dark), .3);
        }
    }
</style>