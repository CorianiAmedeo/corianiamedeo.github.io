<script>
	import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import Link from '$lib/components/Link.svelte';
    import Button from '$lib/components/Button.svelte';

    let scroll = $state(0);
    let isScrolled = $derived.by(() => {
        if(scroll <= 1) {
            return false;
        }
        return true;
    });
    let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

    /* Check if windows get larger than 58rem and close the menu */
	function smallScreen(isSmallScreen) {
		if (!isSmallScreen.matches) {
			isMenuOpen = false;
		}
	}

    onMount(() => {
        scroll = window.scrollY;

        window.addEventListener('scroll', () => {
            scroll = window.scrollY;
        }, false);

        if (browser) {
			var isSmallScreen = window.matchMedia('(max-width: 46rem)');

			smallScreen(isSmallScreen);

			isSmallScreen.addEventListener('change', function () {
				smallScreen(isSmallScreen);
			});
		}
    });
</script>

<div id="header" class="header-{isScrolled ? 'scrolled' : 'not-scrolled'}">
    <div id="navigation" class="nav-{isScrolled ? 'scrolled' : 'not-scrolled'}">
        <Link href="/">
            <div class="combinationmark text-light"></div>
        </Link>
        
        <nav>
            <Link href="/">Work</Link>
            <Link href="/">Stack</Link>
            <Link href="/">About</Link>
            <Link href="/" style="primary">Resume</Link>
        </nav>

        <div id="hamburger-menu">
            <Button onclick={toggleMenu}>
                <div class="icon-burgermenu text-light"></div>
            </Button>
        </div>
    </div>
    <div id="mobile-navigation" class="{isMenuOpen ? 'mobile-open' : 'mobile-closed'}">
        <nav>
            <Link href="/" onclick={toggleMenu}>Work</Link>
            <Link href="/" onclick={toggleMenu}>Stack</Link>
            <Link href="/" onclick={toggleMenu}>About</Link>
            <Link href="/" style="primary" onclick={toggleMenu}>Resume</Link>
        </nav>
    </div>
</div>

<style>
    #header {
        width: 100%;
        position: sticky;
        top: 0;

        z-index: 999;

        padding-inline: max(var(--space-4), calc((100vw - var(--section-xl)) / 2));

        background-color: hsl(var(--background));
    }

    .header-not-scrolled {
        border-bottom: 1px solid hsla(var(--border-color), 0%);
    }

    .header-scrolled {
        border-bottom: 1px solid hsla(var(--border-color), calc(var(--border-opacity) * 1.5));
    }

    #navigation {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        transition: 
            padding-block .3s;
    }

    #navigation > nav  {
        display: flex;
        flex-direction: row;
        gap: var(--space-4);

        padding-right: var(--space-4);
    }

    .nav-not-scrolled {
        padding-block: var(--space-6);
    }

    .nav-scrolled {
        padding-block: var(--space-4);
    }

    #mobile-navigation {
        height: 100%;
    }

    .mobile-closed {
        display: none;
    }

    .mobile-open {
        display: block;
    }

    #mobile-navigation > nav {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: var(--space-12);
        padding-block: var(--space-12);
    }

    #hamburger-menu {
        display: none;
    }

    @media only screen and (max-width: 46rem) {
        #header {
            padding-inline: var(--space-2);
        }
        
        #navigation > nav {
            display: none;
        }
            
        #hamburger-menu {
            display: block;
        }
    }
</style>