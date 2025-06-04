<script lang="ts">
    let { title, motto } = $props();
</script>

<div class="hero grow-7">
            <div class="hero-content text-neutral-content text-center">
                <div class="max-w-md">
                    <p class="text-4xl lg:text-6xl font-bold">
                        {title}
                    </p>
                    <br />
                    <p class="">{motto}</p>
                </div>
            </div>
        </div>