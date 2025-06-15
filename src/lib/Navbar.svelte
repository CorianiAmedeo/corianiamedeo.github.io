<script>
    import Button from "$lib/Button.svelte";
    import { browser } from '$app/environment';

    let { home = false, work = false, about = false } = $props();
    let menu = $state(false);

    /* On click open or close the menu*/
    function openMenu(){
        menu = !menu;
    }

    /* Check if windows get larger than 54rem and close the menu */
    function smallScreen(x) {
        if (!x.matches) {
            menu = false;
        }
    }
    
    if(browser){
        var  x = window.matchMedia("(max-width: 54rem)");
    
        smallScreen(x);

        x.addEventListener("change", function() {
            smallScreen(x);
        }); 
    } 
</script>

<header>
    <div id="navbar" class="background-dark prevent-select">
        <div id="logo-row">
            <a href="/" class="combination-mark">
                <img src="/CombinationMark.svg" alt="Coriani Amedeo Logo"/>
            </a>
            <div id="hamburger-menu">
                <Button onclick={openMenu} type={"primary"} mode={"dark"} icon={"HamburgerMenu"}/>
            </div>
        </div>
        <nav class={menu?"open":"closed"}>
            <ul>
                <li><a href="/" class="text-base {home?"text-light-primary":"text-light-secondary"}">Home</a></li>
                <li><a href="/work" class="text-base  {work?"text-light-primary":"text-light-secondary"}">Work</a></li>
                <li><a href="/about" class="text-base  {about?"text-light-primary":"text-light-secondary"}">About</a></li>
            </ul>
        </nav>
        <div class="button-group {menu?"open":"closed"}">
            <Button type={"primary"} mode={"dark"} text={"Contact me"}/>
            <Button type={"secondary"} mode={"dark"} text={"Resume"}
                icon={"ExternalLink"} href="/CorianiAmedeo_ProductDesigner_Resume.pdf" target="_blank"/>
        </div>
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
        justify-content: space-between;

        border-radius: 2.25rem;
    }

    #navbar > * {
        padding: var(--space-3);
    }

    a {
        display: block;
    }

    .combination-mark {
        padding: calc(var(--space-3) + 0.125rem) 0 var(--space-3) calc(var(--space-3) - 0.125rem);
        margin-left: var(--space-3);
    }

    .combination-mark > img{
        width: 10.625rem;
        height: 1rem;
    }

    nav > ul, .button-group {
        display: flex;
        gap: var(--space-2);
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

    @media (max-width: 54rem) {
        #navbar {
            flex-direction: column;
            max-width: var(--section-md);
        }

        #logo-row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        nav > ul, .button-group {
            flex-direction: column;
            text-align: center;
        }

        #hamburger-menu {
            display: block;
        }

        .open {
            display: flex;
        }

        .closed {
            display: none;
        }
    }
</style>    