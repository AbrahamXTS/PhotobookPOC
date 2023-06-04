<script>
	export let data;

	const images = data.images.resources.map(({ asset_id, url }) => ({
		alt: asset_id,
		src: url
	}));
</script>

<div class="gallery">
	{#each images as image}
		<img src={image.src} alt={image.alt} />
	{/each}
</div>

<style>
	.gallery {
		columns: 2 120px;
		column-gap: 5px;
	}

	@media (min-width: 641px) {
		.gallery {
			columns: 4 250px;
			margin-top: 45px;
		}
	}

	@media (min-width: 768px) {
		.gallery {
			margin-top: 65px;
		}
	}

	.gallery > img {
		max-width: 100%;
		margin-bottom: 5px;
	}
</style>
