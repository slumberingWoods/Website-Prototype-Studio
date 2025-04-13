<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import { enhance, applyAction } from "$app/forms";
</script>

<div class="bg-gray-700">
    <div class="mx-12 flex flex-col items-center bg-slate-400 h-fit">
        <div class="my-12">
            <div class="text-center text-wrap">
                <p class="text-4xl">{m["contact.page.title"]()}</p>
                <br />
                <p class="text-2xl">{m["contact.page.note"]()}</p>
                <br />
                <a class="text-6xl" href="Garbage@ProWebber.ca"
                    >Garbage@ProWebber.ca</a
                >
            </div>
        </div>
        <div class="my-12">
            <div class="text-center">
                <form action="/contact" method="POST">
                    <p class="text-3xl footer-title">
                        {m["contact.page.form.title"]()}
                    </p>
                    <fieldset class="w-80">
                        <div class="join"></div>
                        <p class="text-start">
                            {m["contact.page.form.email"]()}
                        </p>
                        <input
                            type="email"
                            placeholder="username@site.com"
                            class="input input-bordered"
                        />
                        <p class="text-start">
                            {m["contact.page.form.message"]()}
                        </p>
                        <input
                            type="message"
                            placeholder="Type your useless questions here"
                            class="input input-bordered"
                        />
                    </fieldset>
                    <br />
                    <button class="btn" type="submit" aria-label="Submit"
                        >{m["contact.page.form.send"]()}</button
                    >
                    <button
                        class="btn bg-red-600"
                        type="reset"
                        aria-label="Reset"
                        >{m["contact.page.form.reset"]()}</button
                    >
                </form>
            </div>
        </div>
    </div>
</div>
