<script>
	import { signIn } from "@auth/sveltekit/client";
</script>

<h1>Inicio de sesión</h1>

<p>
	<button on:click={() => signIn("google")}>Iniciar sesión con Google</button>
</p>
