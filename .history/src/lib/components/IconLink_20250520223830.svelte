<script lang="ts">
  let { link, image, name, size } = $props();
</script>

<a href={`${link}`} class={`w-full bg-no-repeat bg-[url(${image})]
backdrop-blur-lg backdrop:saturate-500`} aria-label={name}>
  <enhanced:img src={image} alt={`image_${name}`}>
</a>
