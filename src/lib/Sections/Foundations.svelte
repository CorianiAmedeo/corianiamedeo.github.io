<section class="section background-primary">
    <div id="title">
        <h2 class="text-5xl font-semibold text-dark-primary">Starting with <br> the foundamentals</h2>
    </div>
    <div class="content">
        <ul>
            <li id="list-before"><div></div></li>
            <li class="item"></li>
            <li class="item"></li>
            <li class="item"></li>
        </ul>
    </div>
</section>

<style>
    h2 {
        margin-inline: var(--space-4);
        margin-bottom: var(--space-12);
    }
    
    #title {
        max-width: var(--section-md);
        margin-inline: auto;
    }

    .content > ul {
        display: flex;
        flex-direction: row;

        transform: translateX(calc((100vw / 2) - (150px + 118px)));
    }

    .item {
        aspect-ratio: 300/365;
        width: 300px;
        flex-shrink: 0;

        border-radius: 150px;
        background-color: hsla(var(--neutral-light), .2);
    }

    #list-before {
        height: 365px;
        width: 118px;
        flex-shrink: 0;

        overflow: hidden;
    }

    #list-before > div {
        position: relative;
        right: 182px;
        height: 365px;
        width: 300px;

        background-color: hsla(var(--neutral-light), .2);
        border-radius: 0 150px 150px 0;
    }

    @media screen and (min-width: 47.5rem) {
        #title {
            max-width: var(--section-xl);
            margin-inline: auto;
        }

        #list-before {
            display: none;
        }

        .content {
            margin-inline: auto;
            max-width: var(--section-xl);
        }

        .content > ul {
            justify-content: center;
            margin-inline: var(--space-6);

            transform: translateX(0px);
        }

        .item {
            flex-shrink: 1;
        }

    }

    @media screen and (min-width: 37rem) {
        h2 {
            margin-inline: var(--space-6);
        }
    }
</style>