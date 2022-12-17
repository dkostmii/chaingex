import fsp from 'fs/promises';

export const gitignore = async () => {
	let exists = true;

	try {
		await fsp.readFile('./.gitignore');
	} catch (e) {
		exists = false;
	}

	if (!exists) {
		await fsp.writeFile('./.gitignore', '');
		await fsp.appendFile('./.gitignore', 'phpmailer/\r\n');
		await fsp.appendFile('./.gitignore', 'package-lock.json\r\n');
		await fsp.appendFile('./.gitignore', 'flsStartTemplate/\r\n');
		await fsp.appendFile('./.gitignore', 'node_modules/\r\n');
		await fsp.appendFile('./.gitignore', '.gitignore\r\n');
		await fsp.appendFile('./.gitignore', 'dist/\r\n');
		await fsp.appendFile('./.gitignore', 'Source/\r\n');
		await fsp.appendFile('./.gitignore', 'version.json\r\n');
		await fsp.appendFile('./.gitignore', app.path.buildFolder + '\r\n');
		await fsp.appendFile('./.gitignore', '**/*.zip\r\n');
		await fsp.appendFile('./.gitignore', '**/*.rar\r\n');
		await fsp.appendFile('./.gitignore', '*keyframes.s[a|c]ss');
		//if (projectName !== 'flsStart') del('./.git/');
	}

	return app.gulp.src(`${app.path.srcFolder}`);
}