import * as sharp from 'sharp';

async function main(src: string) {
	const s = await sharp(src);

	console.log('metadata', await s.metadata());

	const dst = await s
		.resize(200, 200, {
			fit: 'inside',
			withoutEnlargement: true,
		})
		.rotate()
		.jpeg({
			quality: 85,
			progressive: true,
		})
		.toBuffer();
}

const args = process.argv.slice(2);

main(args[0]).then(() => {
	console.log('Done');
});
