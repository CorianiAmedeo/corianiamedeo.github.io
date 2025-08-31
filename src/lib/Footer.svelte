<script>
	import Button from '$lib/Button.svelte';

    function backUp() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })    
    }
</script>

<section class="footer-section background-dark">
    <div class="content">
        <div id="text-button">
            <ul id="cards-text">
                <li class="card-text">
                    <a href="/" class="combination-mark">
                        <img src="/CombinationMark.svg" alt="Coriani Amedeo Logo" />
                    </a>
                    <span class="text-base font-light text-light-secondary">
                        Portfolio 2025
                    </span>
                    <span class="text-base font-light">
                        <span class="text-light-secondary">Made with </span>
                        ☕
                        <span class="text-light-secondary"> and </span>
                        🩷
                        <span class="text-light-secondary">.</span>
                    </span>
                </li>
                <li class="card-text">
                    <span class="text-base font-light text-light-secondary">
                        amedeocoriani@gmail.com
                    </span>
                    <span class="text-base font-light text-light-secondary">
                        +39 348 68 70 813
                    </span>
                    <span class="text-base font-light text-light-secondary">
                        amedeo-coriani
                    </span>
                </li>
            </ul>
            <div id="button-container">
                <Button
                    onclick={backUp}
                    type={'secondary'}
                    mode={'dark'}
                    text={'Back up'}
                    icon={'BackUp'}
                />
            </div>
        </div>
    </div>
</section>

<style>
    .content {
        margin-inline: var(--space-4);
    }

    .footer-section {
        padding-top: var(--space-24);
        padding-bottom: var(--space-24);
    }

    #text-button {
        max-width: var(--section-md);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin: auto;
        gap: var(--space-12);
    }

    #cards-text > li {
        border-left: 1px solid hsla(var(--detail), .5);
        border-right: 1px solid hsla(var(--detail), .5);
    }

    #cards-text {
        display: flex;
        flex-direction: column;
        gap: var(--space-6);
        flex-grow: 1;
    }

    .card-text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: var(--space-6);
        padding-inline: var(--space-8);
        flex-grow: 1;
    }

    #button-container {
        width: min-content;
        margin-left: auto;
    }

    a {
		display: block;
	}

	.combination-mark {
		flex-shrink: 0;
	}

	.combination-mark > img {
		width: 10.625rem;
		height: 1.5rem;
	}
    
    @media screen and (min-width: 31rem) {
        #cards-text > li {
            border-left: 1px solid hsla(var(--detail), .5);
            border-right: none;
        }

        #text-button {
            flex-direction: row;
        }

        .card-text {
            max-width: var(--section-xsm);
        }
    }

    @media screen and (min-width: 37rem) {
        #text-button {
            max-width: var(--section-md);
            flex-direction: row;
        }
    }

    @media screen and (min-width: 47.5rem) {
        .content {
            margin-inline: var(--space-6);
        }
        
        #text-button {
            max-width: var(--section-xl);
            gap: 0px;
        }

        #cards-text {
            flex-direction: row;
            gap: 0px;
        }
    }
</style>