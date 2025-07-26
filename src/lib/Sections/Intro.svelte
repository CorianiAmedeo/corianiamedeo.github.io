<section class="section background-dark">
    <div class="content-padding">
        <div id="content">
            <div id="profile-pic">
                <div class="img-container">
                </div>
                <div class="vertical-divider">
                    <div class="divider-line"></div>
                </div>
            </div>
            <div id="intro" class="text-base font-light text-light-secondary">
                Hi, I’m <span class="text-light-primary font-normal">Amedeo</span>, as a designer I navigate cross-functional 
                teams to <span class="text-light-primary font-normal">translate ideas into production</span>.
                <br />
                <br />
                Currently working on automotive interfaces @<span class="text-light-primary font-normal">Italdesign</span>, 
                Turin (a <span class="text-light-primary font-normal">Volkswagen Group company</span>).
            </div>
    </div>
    </div>
</section>

<style>
    .content-padding {
        padding-inline: var(--space-6);
    }

    #content {
        max-width: var(--section-xsm);
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        gap: var(--space-6);
        transform: translateX(16px);
    }

    #profile-pic {
        display: flex;
        flex-direction: row;
        flex: 1;
    }
    
    #intro {
        flex: 1;
    }

    #intro::selection, #intro > *::selection {
        color: hsl(var(--neutral-dark));
        background: hsl(var(--neutral-light));
    }

    .img-container {
        flex: 1;
        aspect-ratio: 1;
        height: 100%;

        background-image: url("/ProfilePic.png");
        background-size: contain;
    }

    .vertical-divider {    
        flex: 1;
        display: flex;
        justify-content: center;
    }

    .divider-line {
        width: 1px;
        height: 100%;
        background-color: hsla(var(--detail), .6);
    }

    @media screen and (min-width: 37rem) {
        #content {
            max-width: var(--section-md);
            flex-direction: row;
            gap: 0;
        }
        
        .content-padding {
            padding-inline: var(--space-4);
        }
    }
</style>