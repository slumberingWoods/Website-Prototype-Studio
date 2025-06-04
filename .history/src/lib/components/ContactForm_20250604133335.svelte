<script lang="ts">
    let { title, email, message, send, reset } = $props();
    
</script>

<div class="text-center">
    <form action="/contact" method="POST">
        <p class="text-3xl footer-title">
            {title}
        </p>
        <fieldset class="w-80">
            <div class="join"></div>
            <p class="text-start">
                {email}
            </p>
            <input
                type="email"
                placeholder="username@site.com"
                class="input input-bordered"
            />
            <p class="text-start">
                {message}
            </p>
            <input
                type="message"
                placeholder="Type your useless questions here"
                class="input input-bordered"
            />
        </fieldset>
        <br />
        <button class="btn" type="submit" aria-label="Submit"
            >{send}</button
        >
        <button
            class="btn bg-red-600 border-red-500"
            type="reset"
            aria-label="Reset">{reset}</button
        >
    </form>
</div>
