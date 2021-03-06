exports.up = function(knex, Promise) {
	return knex.schema.createTable('actions', function(tbl) {
		tbl.increments('id').primary(); // primary key

		tbl
			.integer('projectId')
			.notNullable()
			.references('id')
			.inTable('projects');

		tbl.text('description').notNullable();
		tbl.text('notes').notNullable();
		tbl.boolean('completed').defaultTo(false);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('actions');
};
