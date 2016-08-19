module.exports = function notesApplication(author) {
		this.author = author;
		if(typeof author === 'undefined'){
			return "Author is not defined";
		}
		this.list = [];

		this.create = createIt;
		this.listNotes = listNotes;
		this.getNote = getNote;
		this.searchIt = search;
		this.deleteIt = deleteIt;
		this.edit = edit;
	}
	function authors(author){
		if(typeof author !== 'string'){
			return undefined;
		}
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

	/*
	* listNotes function
	 */
	function listNotes(){
		for(var i = 0; i < this.list.length; i++) {
			return "Note ID:" + i+
			this.list[i]+
			"By Author "+ this.author;
		}
	}

	/*
	* getNote function
	 */
	function getNote(note_id) {
		return this.list[note_id];
	}

	function search(search_text) {
		console.log("Showing results for " + search_text);

		for(var i = 0; i<=this.list.length; i++) {
			if(this.list[i].search(search_text)) {
				return `Note ID: ${i}
				${this.list[i]}
				By Author ${this.author}`;
			}
		}
	}

	function deleteIt(note_id) {
		if(typeof note_id === 'undefined'){
			return "Unsucessfull";
		}
		var indexCheck = this.list[note_id];
	 	if(indexCheck > -1) {
	 		this.list.splice(indexCheck, 1);
	 		return "Succesfull";
	 	}
	}

	function edit(note_id, note_content) {
		if(note_id < this.list.length) {
	 		this.list[note_id] = new_content;
	 		console.log(this.list[note_id]);
	 		return "Succesfull";
	 	}else{
	 		console.log("This would not work");
	 	}
	}