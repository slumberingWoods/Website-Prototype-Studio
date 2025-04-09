<script lang="ts">
    import { m } from "$lib/paraglide/messages";
</script>
<div class="bg-gray-700">
    <div class="sm:mx-2 flex flex-col justify-center items-center bg-slate-400 h-screen">
        <div class="content-center grow-7">
            <div class="text-center">
                <p class="text-5xl">Website Prototype</p>
                <br>
                <p class="">{m["home.page.motto"]()}</p>
            </div>
        </div>
        <div class="text-center content-center grow-2">
            <form>
                <p class="footer-title text-base">{m["home.page.newsletter"]()}</p>
                <fieldset class="w-80">
                    <div class="join">
                    <input
                    type="text"
                    placeholder="username@site.com"
                    class="input join-item" />
                    <button class="btn btn-primary join-item bg-slate-600">{m["home.page.subscribe"]()}</button>
                </div>
            </fieldset>
        </form>
        </div>
    </div>
</div>