<script lang="ts">
    import { m } from "$lib/paraglide/messages";
</script>

<div class="bg-gray-700">
    <div
        class="mx-4 sm:mx-12 flex flex-col justify-center items-center bg-slate-400 min-h-screen"
    >
        <div class="content-center grow-7">
            <div class="text-center">
                <p class="text-4xl lg:text-4xl">Website Prototype</p>
                <br />
                <p class="">{m["home.page.motto"]()}</p>
            </div>
        </div>
        <div class="text-center content-center grow-2">
            <form>
                <p class="text-2xl">{m["home.page.newsletter"]()}</p>
                <div class="join">
                    <div>
                        <label class="input validator join-item">
                            <svg
                                class="h-[1em] opacity-50"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                ><g
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke-width="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                    ><rect
                                        width="20"
                                        height="16"
                                        x="2"
                                        y="4"
                                        rx="2"
                                    ></rect><path
                                        d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                                    ></path></g
                                ></svg
                            >
                            <input
                                type="email"
                                placeholder="mail@site.com"
                                required
                            />
                        </label>
                        <div class="validator-hint hidden">
                            Enter valid email address
                        </div>
                    </div>
                    <button class="btn btn-neutral join-item">Join</button>
                </div>
            </form>
        </div>
    </div>
</div>
