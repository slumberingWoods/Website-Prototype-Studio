<script lang="ts">
    let { title, motto } = $props();
    import { onMount} from 'svelte';
    import { gsap } from 'gsap';
    import { SplitText } from "gsap/all";

    let navbarElement: HTMLElement;
</script>

<div class="hero-content text-neutral-content text-center">
    <div class="max-w-md">
        <p class="text-4xl lg:text-6xl font-bold">
            {title}
        </p>
        <br />
        <p class="">{motto}</p>
    </div>
</div>
