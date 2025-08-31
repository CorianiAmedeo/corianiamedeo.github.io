<script>
	import Navbar from "$lib/Navbar.svelte";
	import Hero from "$lib/Sections/Hero.svelte";
	import SectionDivider from "$lib/SectionDivider.svelte";
	import Intro from "$lib/Sections/Intro.svelte";
	import Foundations from "$lib/Sections/Foundations.svelte";
	import Principles from "$lib/Sections/Principles.svelte";
	import Skills from "$lib/Sections/Skills.svelte";
	import MoreSkills from "$lib/Sections/MoreSkills.svelte";
	import Tools from "$lib/Sections/Tools.svelte";
	import More from "$lib/Sections/More.svelte";
	import Footer from "$lib/Footer.svelte";
</script>

<Navbar home={"true"} />
<Hero />
<Intro />
<SectionDivider />
<Foundations />
<Principles />
<Skills />
<MoreSkills />
<Tools />
<SectionDivider />
<More />
<Footer />
