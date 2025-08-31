<section class="section background-dark">
    <div class="content-padding">
        <div id="content">
            <div id="title-line">
                <h2 class="text-5xl font-base text-light-primary">Hi, i'm <br>Amedeo</h2>
            </div>
            <div id="intro-text">
                <div id="card-text-1" class="text-base font-light text-light-secondary">
                    <span>
                        As a designer I navigate cross‑functional 
                        teams to <span class="text-light-primary font-normal">translate ideas into production</span>.
                    </span>
                </div>
                <div id="card-text-2" class="text-base font-light text-light-secondary">
                    <span>
                        Currently working on automotive interfaces @<span class="text-light-primary font-normal">Italdesign</span>, 
                        Turin (a <span class="text-light-primary font-normal">Volkswagen Group company</span>).
                    </span>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .content-padding {
        padding-inline: var(--space-6);;
        margin-inline: auto;
    }

    #content {
        max-width: var(--section-md);
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        gap: var(--space-6);
    }

    #intro-text {
        display: flex;
        flex-direction: column;
        gap: var(--space-6);
    }

    #card-text-1 {
        padding-right: var(--space-8);
        padding-left: var(--space-8);
        border-left: 1px solid hsla(var(--detail), .5);
        border-right: 1px solid hsla(var(--detail), .5);
    }

    #card-text-2 {
        padding-right: var(--space-8);
        padding-left: var(--space-8);
        border-left: 1px solid hsla(var(--detail), .5);
        border-right: 1px solid hsla(var(--detail), .5);
    }

    #card-text-1, #card-text-2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    @media screen and (min-width: 37rem) {
        #intro-text {
            flex-direction: row;
            gap: 0rem;
        }

        #card-text-1 {
            padding-right: var(--space-4);
            padding-left: var(--space-8);
            border-left: 1px solid hsla(var(--detail), .5);
            border-right: 0px;
        }

        #card-text-2 {
            padding-right: var(--space-8);
            padding-left: var(--space-4);
            border-left: 0px;
            border-right: 1px solid hsla(var(--detail), .5);
        }
    }

    @media screen and (min-width: 47.5rem) {
        #content {
            max-width: var(--section-xl);
            flex-direction: row;
            gap: 0px;
        }

        #title-line {
            flex-basis: 33%;
        }
        
        #intro-text {
            flex-basis: 67%;
        }

        #intro-text > * {
            flex-basis: 50%;
        }
    }
</style>