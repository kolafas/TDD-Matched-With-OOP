module.exports = {
	notesApplication:function(author) {
		this.list = [];
		this.author = author;

		/**
		 * create function
		 * @param note_content
		 */

		this.create = function(note_content){
			this.list.push(note_content);
			return this.list;
		}


	}
};
