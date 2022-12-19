import PluginError from 'plugin-error';
import through from 'through2';
import mqpacker from 'css-mqpacker';

function mqpack() {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			this.push(file);
			return cb();
		}

		if (file.isStream()) {
			this.emit('error', new PluginError('mqpack', 'Streaming not supported'));
			return cb();
		}

		try {
      const packed = mqpacker.pack(file.contents.toString(), {
        from: "from.css",
        map: {
          inline: false
        },
        to: "to.css"
      }).css;

			file.contents = new Buffer(packed);
		} catch (err) {
			this.emit('error', new PluginError('mqpack', err));
		}

		this.push(file);
		cb();
	});
}

export default mqpack;
