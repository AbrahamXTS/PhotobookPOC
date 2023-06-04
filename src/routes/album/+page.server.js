import axios from "axios";
import {
	CLOUDINARY_CLOUD_NAME,
	CLOUDINARY_API_KEY,
	CLOUDINARY_API_SECRET
} from "$env/static/private";

export async function load() {
	const { data } = await axios.get(
		`https://${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/resources/image?max_results=500`
	);

	return {
		images: data
	};
}
