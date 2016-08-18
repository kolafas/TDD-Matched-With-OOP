module.exports = function notesApplication(author) {
		this.author = author;
		if(typeof author === 'undefined'){
			return "Author is not defined";
		}
		this.list = [];

		this.create = createIt;

	}
	/**
	 * create function
	 * @param note_content
	 */
function createIt(note_content) {
			var myList = this.list;
			if(typeof note_content !== 'string'){
				return "Note content not saved";
			}
				this.list.push(note_content);
				return "Note content successfully saved";
}
