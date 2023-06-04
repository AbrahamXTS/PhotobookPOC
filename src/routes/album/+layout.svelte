<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
</script>

<svelte:head>
	<title>Photobook</title>
</svelte:head>

<Navbar class="shadow-sm" let:hidden let:toggle>
	<NavBrand href="/album">
		<img src="/images/logo.png" class="mr-3 h-6 sm:h-9" alt="Photobook Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			Photobook
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl class="bg-white border-0" {hidden}>
		<NavLi href="/album">Inicio</NavLi>
		<NavLi href="/album/upload">Subir nuevas fotos</NavLi>
	</NavUl>
</Navbar>

<div class="mx-auto container">
	<slot />
</div>
