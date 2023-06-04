import { v2 as cloudinary } from "cloudinary";

import {
	CLOUDINARY_CLOUD_NAME,
	CLOUDINARY_API_KEY,
	CLOUDINARY_API_SECRET
} from "$env/static/private";

export async function POST({ request }) {
	cloudinary.config({
		cloud_name: CLOUDINARY_CLOUD_NAME,
		api_key: CLOUDINARY_API_KEY,
		api_secret: CLOUDINARY_API_SECRET
	});

	const res = cloudinary.uploader.upload("");
	console.log(res, request.body);
}
