<script lang="ts">
  let { link, image, name, size } = $props();
</script>

<a href={`${link}`} class={`w-full h-full mx-[40px] hover:scale-110 bg-no-repeat bg-[url(${image})]
backdrop-blur-lg backdrop:saturate-500`}>
  <img src={image} alt={`image_${name}`} width={size} height={size}>
</a>
