<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import { enhance, applyAction } from "$app/forms";
    import { contact, form } from "$lib/data/contacts";
    import ContactsMessage from "$lib/components/ContactsMessage.svelte";
    import ContactForm from "$lib/components/ContactForm.svelte";
</script>

<div class="bg-gray-700">
    <div class="mx-4 lg:mx-12 flex flex-col items-center bg-slate-400 mt-20 h-fit">
        <ContactsMessage title={contact.title} note={contact.note} email={contact.email}></ContactsMessage>
        <div class="my-12">
            <ContactForm title={form.title} email={form.email} message={form.message} send={form.send} reset={form.reset}></ContactForm>
        </div>
    </div>
</div>
