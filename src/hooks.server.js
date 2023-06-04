import { redirect } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import { SvelteKitAuth } from "@auth/sveltekit";
import GoogleProvider from "@auth/core/providers/google";

import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "$env/static/private";

async function authorization({ event, resolve }) {
	if (event.url.pathname.startsWith("/album")) {
		const session = await event.locals.getSession();

		if (!session) {
			throw redirect(303, "/");
		}
	}

	return resolve(event);
}

export const handle = sequence(
	SvelteKitAuth({
		providers: [
			GoogleProvider({
				clientId: GOOGLE_CLIENT_ID,
				clientSecret: GOOGLE_CLIENT_SECRET
			})
		],
		pages: {
			signIn: "/"
		}
	}),
	authorization
);
