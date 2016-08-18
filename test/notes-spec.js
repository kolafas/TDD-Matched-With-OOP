var notesApplication = require("../notes");
var notes = new notesApplication("Michael");
var expect = require("chai").expect;

describe("The create function", function(){
	//test for create function
	it("It should return fail if it does not create the note_content", function(){
		expect(notes.create(5)).to.equal("Note content not saved");
	});

	it("It should return successfull when created", function(){
		expect(notes.create("A soap should keep you clean")).to.equal("Note content successfully saved");
	});	


});