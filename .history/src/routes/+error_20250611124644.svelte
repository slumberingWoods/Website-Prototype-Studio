<script lang="ts">
    import { page } from "$app/state";
</script>

<div class="bg-gray-700">
    <div
        class="mx-4 sm:mx-12 flex flex-col justify-center items-center bg-slate-400 min-h-screen"
    >
        <div class="hero">
            <div class="hero-content text-center">
                <p class="text-4xl font-bold">{page.error?.code}</p>
                <p class="text-3xl font-bold">{page.error?.message}</p>
            </div>
        </div>
    </div>
</div>
