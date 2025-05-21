<script lang="ts">
    const articles = import.meta.glob(`$lib/articles/*.{md,svx,svelte,md}`, {
        eager: true,
    });
    let date_sorted: any[] = [];
    interface Module {
        metadata: {
            title: string;
            description: string;
            img: string;
            category: string;
            date: string;
            author: string;
        };
    }

    for (const [key, value] of Object.entries(articles)) {
        const moduleValue = value as unknown as Module;
        const date = new Date(moduleValue.metadata.date);
        const formattedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        moduleValue.metadata.date = formattedDate;
        date_sorted.push(moduleValue);
    }
    date_sorted.sort((a, b) => {
		return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
	});
    
</script>

<div class="bg-gray-700">
    <div
        class="mx-4 lg:mx-12 flex flex-col justify-center items-center bg-slate-400 h-screen"
    ></div>
</div>
