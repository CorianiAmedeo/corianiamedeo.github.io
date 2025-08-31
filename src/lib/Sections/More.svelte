<script>
	import Button from '$lib/Button.svelte';
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';

	let isSmall = $state(false);

	/* Check if windows get larger than 58rem and close the menu */
	function smallScreen(isSmallScreen) {
		if (isSmallScreen.matches) {
			isSmall = false;
		} else {
			isSmall = true;
		}
	}

    onMount(() => {
		if (browser) {
			var isSmallScreen = window.matchMedia('(max-width: 39.25rem)');

			smallScreen(isSmallScreen);

			isSmallScreen.addEventListener('change', function () {
				smallScreen(isSmallScreen);
			});
		}
	});
</script>

<section class="section background-primary">
    <div id="title">
        <h2 class="text-5xl font-semibold text-dark-primary">Ready to dive deeper?</h2>
    </div>
    <div class="content">
        <ul id="cards-text">
            <li class="card-text">
                <div>
                    <h3 class="text-2xl font-semibold text-dark-primary">
                        What it do
                    </h3>
                    <span class="text-base font-base text-dark-secondary">
                        Discover the projects I’ve been a part of to learn how I’ve tackled real-world design challenges.
                    </span>
                </div>
                <div class="button-container">
					<Button
						type={'secondary'}
						mode={'light'}
						text={'Work'}
						href="/work"
						target="_blank"
					/>
                </div>
            </li>
            <li class="card-text">
                <div>
                    <h3 class="text-2xl font-semibold text-dark-primary">
                        Who i am
                    </h3>
                    <span class="text-base font-base text-dark-secondary">
                        Explore my background, my creative journey, and the experiences that shaped me as a person.
                    </span>
                </div>
                <div class="button-container">
					<Button
						type={'secondary'}
						mode={'light'}
						text={'About'}
						href="/about"
						target="_blank"
					/>
                </div>
            </li>
            <li class="card-text">
                <div>
                    <h3 class="text-2xl font-semibold text-dark-primary">
                        How to reach me
                    </h3>
                    <span class="text-base font-base text-dark-secondary">
                        Reach out if you're curious or have an opportunity in mind. I’d love to hear from you.
                    </span>
                </div>
                <div class="button-container">
					<Button
						type={ isSmall ? 'secondary' : 'primary'}
						mode={'light'}
						text={'Contact me'}
					/>
                </div>
            </li>
        </ul>
    </div>
</section>

<style>
    h2 {
        margin-bottom: var(--space-12);
        margin-inline: auto;
        max-width: var(--section-md);

        text-align: center;
    }
    
    #title, .content {
        margin-inline: var(--space-6);
    }

    #cards-text > li {
        border-left: 1px solid hsla(var(--neutral-dark), .3);
        border-right: 1px solid hsla(var(--neutral-dark), .3);
    }

    #cards-text > li:last-child {
        border-left: 1px solid hsla(var(--neutral-dark), .3);
        border-right: 1px solid hsla(var(--neutral-dark), .3);
    }

    #cards-text {
        margin-bottom: var(--space-12);
        margin-inline: auto;
        max-width: var(--section-md);
        display: flex;
        flex-direction: column;
        margin: auto;
        gap: var(--space-6);
    }

    .card-text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: var(--space-6);
        flex-grow: 1;
        padding-inline: var(--space-8);
    }

    .card-text > div > h3 {
        margin-bottom: var(--space-2);
    }

    .card-text > .button-container {
        width: min-content;
        margin-left: auto;
    }

    @media screen and (min-width: 37rem) {
        h2, #cards-text {
            max-width: var(--section-md);
        }
    }

    @media screen and (min-width: 47.5rem) {
        #title, .content {
            margin-inline: var(--space-6);
        }
        
        h2, #cards-text {
            max-width: var(--section-xl);
        }

        #cards-text > li {
            border-left: 1px solid hsla(var(--neutral-dark), .3);
            border-right: none;
        }

        #cards-text {
            gap: 0px;
            flex-direction: row;
        }
    }
</style>