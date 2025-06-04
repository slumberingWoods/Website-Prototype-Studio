<script lang="ts">
    let { title, note, email } = $props();
    
</script>

<article class="text-center text-wrap my-12 w-full">
    <p class="text-4xl">{title}</p>
    <br />
    <p class="text-lg lg:text-2xl">{note}</p>
    <br />
    <a class="text-3xl lg:text-6xl underline" href={email}
        >{email}</a
    >
</article>
