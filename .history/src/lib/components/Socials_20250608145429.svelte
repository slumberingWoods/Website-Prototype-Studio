<script lang="ts">
    import { socials } from "$lib/data/navigation";
    import IconLink from "./IconLink.svelte";
</script>

<div class="">
    <ul class="menu menu-horizontal bg-slate-800 rounded-box">
        {#each socials.list as social}
            <li>
                <IconLink
                    link={social.link}
                    image={social.image}
                    name={social.name}
                    size={socials.icon_size}
                ></IconLink>
            </li>
        {/each}
    </ul>
</div>
