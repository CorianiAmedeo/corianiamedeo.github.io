<script>
    import Button from "$lib/Button.svelte";
    import { browser } from '$app/environment';
	import { fade } from 'svelte/transition';

    let { home = false, work = false, about = false } = $props();
    let menu = $state(false);

    /* On click open or close the menu*/
    function openMenu(){
        menu = !menu;
    }

    /* Check if windows get larger than 54rem and close the menu */
    function smallScreen(x) {
        if (x.matches) {
            menu = true;
        } else {
            menu = false;
        }
    }

    
    if(browser){
        var  x = window.matchMedia("(max-width: 58rem)");
    
        smallScreen(x);

        x.addEventListener("change", function() {
            smallScreen(x);
        }); 
    }
</script>
 
<header>
    <div id="navbar" class="background-dark prevent-select">
        <a href="/" class="combination-mark">
            <img src="/CombinationMark.svg" alt="Coriani Amedeo Logo"/>
        </a>
        <div id="hamburger-menu">
            <Button onclick={openMenu} type={"primary"} mode={"dark"} icon={"HamburgerMenu"}/>
        </div>
        {#if menu == false}
            <nav fadein={{ duration: 300}}>
                <ul>
                    <li><a href="/" class="text-base {home?"text-light-primary":"text-light-secondary"}">Home</a></li>
                    <li><a href="/work" class="text-base  {work?"text-light-primary":"text-light-secondary"}">Work</a></li>
                    <li><a href="/about" class="text-base  {about?"text-light-primary":"text-light-secondary"}">About</a></li>
                </ul>
            </nav>
            <div class="button-group">
                <Button type={"primary"} mode={"dark"} text={"Contact me"}/>
                <Button type={"secondary"} mode={"dark"} text={"Resume"}
                    icon={"ExternalLink"} href="/CorianiAmedeo_ProductDesigner_Resume.pdf" target="_blank"/>
            </div>
        {/if}
    </div>
</header>



<style>
    header {
        position: fixed;
        width: 100vw;
        padding: var(--space-2);
    }
 
    #navbar {
        max-width: var(--section-xl);
        margin: auto;
        
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;

        border-radius: 2.25rem;
        overflow: hidden;
        
        transition: max-width 300ms cubic-bezier(.4,0,.2,1.2);
        padding: var(--space-3);
    }

    a {
        display: block;
    }

    .combination-mark {
        padding: var(--space-3);
        margin-inline-start: var(--space-1);
        flex-shrink: 0;
    }

    .combination-mark > img{
        width: 10.625rem;
        height: 1.5rem;
    }

    nav > ul, .button-group, .combination-mark {
        display: flex;
        align-items: center;
        gap: var(--space-2);
    }

    nav {
        min-width: 0;
        flex-shrink: 2;
        overflow: hidden;
    }

    .button-group {
        flex-shrink: 0;
    }

    nav > ul > li > a {
        padding: var(--space-3) var(--space-6) var(--space-3) var(--space-6);
    }

    nav > ul > li > a:hover {
        color: hsla(var(--neutral-light), 1);
    }

    #hamburger-menu {
        display: none;
    }

    @media (max-width: 58rem) {
        #navbar {
            max-width: var(--section-md);
            flex-wrap: wrap;
        }

        #hamburger-menu {
            display: block;
        }
    }
</style>    