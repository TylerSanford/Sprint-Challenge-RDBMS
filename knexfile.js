// Update with your config settings.

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './database/projectTracker.sqlite3'
		},
		useNullAsDefault: true,
		migrations: {
			tableName: 'dbmigrations'
		},
		seeds: {
			directory: './database/seeds'
		}
	}

	// production: {
	//     client: 'mysql',
	//     connection: {
	//         database: 'blogdb',
	//         user: 'luis',
	//         password: 'pass',
	//     },
	//     pool: {
	//         min: 2,
	//         max: 10,
	//     },
	//     migrations: {
	//         tableName: 'dbmigrations',
	//     },
	//     seeds: {
	//         directory: './database/seeds',
	//     },
	// },
};
