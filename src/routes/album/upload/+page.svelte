<script>
	import Dropzone from "svelte-file-dropzone/Dropzone.svelte";

	let files = {
		accepted: [],
		rejected: []
	};

	function handleFilesSelect(e) {
		const { acceptedFiles, fileRejections } = e.detail;

		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
	}

	function handleRemoveFile(e, index) {
		files.accepted.splice(index, 1);
		files.accepted = [...files.accepted];
	}

	function handleRemoveAll() {
		files.accepted = [];
	}
</script>

<div class="flex flex-col justify-center items-center h-[calc(100vh-72px)]">
	<div class="w-full">
		<Dropzone accept="image/*" on:drop={handleFilesSelect}>
			<p
				class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
			>
				<span class="flex items-center space-x-2">
					<svg
						class="w-6 h-6 text-gray-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
						/>
					</svg>
					<span class="font-medium text-gray-600"> Arrastra tus imagenes para subirlas </span>
				</span>
			</p>
		</Dropzone>
	</div>

	<ol class="h-36">
		{#if files.accepted.length > 0}
			<button on:click={handleRemoveAll}>Deseleccionar todo</button>
		{/if}
		{#each files.accepted as item, index}
			<div>
				<span>{item.name}</span>
				<button on:click={(e) => handleRemoveFile(e, index)}> X </button>
			</div>
		{/each}
	</ol>
</div>
