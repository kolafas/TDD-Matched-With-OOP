var notesApplication = require("../notes");
var notes = new notesApplication("Michael");
var expect = require("chai").expect;
var assert = require("chai").assert;

describe("The create function", function(){
	//test for create function
	before(function(){
		notes.author = "keep";
	});
	it("should return fail if it does not create the note_content", function(){
		expect(notes.create(5)).to.equal("Note content not saved");
	});

	before(function(){
		notes.author = "keep";
	});
	it("should return successfull when created", function(){
		expect(notes.create("A soap should keep you clean")).to.equal("Note content successfully saved");
	});
});

describe("The list note function", function() {
	before(function(){
	});
	it("should return no data", function() {
		//expect(notes.listNotes()).to.equal("No data");
		expect(notes.listNotes()).to.equal();
	});
});

describe("The getNote function", function() {
	it("should return note", function() {
		expect(notes.getNote(0)).to.equal(function(){
			notes.create("me and me");
			console.log("me and me");
		});
	});
});

describe("The search funtion", function(){
	it("should return the note content", function(){
		expect(function(){
			notes.create("sure");
			notes.searchIt(0);
		}).to.equal([sure])
	});
});

describe("The delete function", function() {
	it("should return Unsucessful if no note_id specified", function(){
		expect(notes.deleteIt()).to.equal("Unsucessfull");
	});
	before(function(){
		notes.create("sure");
	});
	it("should return sucessfull", function() {
		expect(notes.deleteIt(0)).to.equal("Sucessfull");
	});
});

describe("The edit function", function() {
	it("should return an error", function() {
		expect(function(){
			note.create("sleep");
			note.edit(0, "")
		}).to.equal(function(){
			var someThing = ""; 
			console.log("This would not work");
		});
	});

	it("should return successfull", function() {
		expect(note.edit(0, "keep")).to.equal("Successfull");
	})
})