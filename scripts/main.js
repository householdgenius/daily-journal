import { EntryListComponent, entryList } from "./journalEntryList.js";
import {getEntries, createEntry, deleteEntry, getSingleEntry, updateEntry} from "./dataManager.js"
import {entryEdit} from "./entryEdit.js"
EntryListComponent(); 

const showEntryList = () => {
	//Get a reference to the location on the DOM where the list will display
	const entryElement = document.querySelector(".entryList");
	getEntries().then((allEntries) => {
		entryElement.innerHTML = entryList(allEntries);
	})
}

const showEdit = (entryObj) => {
    const entryElement = document.querySelector(".entryList");
    entryElement.innerHTML = entryEdit(entryObj);
  }
//get a reference to a place on the DOM
const applicationElement = document.querySelector(".journal");

applicationElement.addEventListener("click", event => {
	event.preventDefault();
	if (event.target.id === "edit") {
	//collect the input values into an object to entry to the DB
	  const date = document.querySelector("input[name='journalDate']").value
	  const concept = document.querySelector("#conceptsCovered").value
      const entry = document.querySelector("#JournalEntry").value
      const mood = document.querySelector("#MoodForTheDay").value
	  //we can add the current time as well
	  const entryObject = {
		  date: date,
		  concept: concept,
		  entry: entry,
		  mood: mood,
	  }
      createEntry(entryObject)
      .then((dbResponse) => {
          showEntryList()
      });
    }
   
})

applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id.startsWith("updateEntry")) {
      const entryId = event.target.id.split("__")[1];
      //collect all the details into an object
      const date = document.querySelector("input[name='journalDate']").value
	  const concept = document.querySelector("#conceptsCovered").value
      const entry = document.querySelector("#JournalEntry").value
      const mood = document.querySelector("#MoodForTheDay").value
      
      const entryObject = {
        date: date,
        concept: concept,
        entry: entry,
        mood: mood,
        id: parseInt(entryId)
      }
      
      updateEntry(entryObject)
        .then(response => {
          showEntryList();
        })
    }
  })

applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id.startsWith("delete")) {
      const entryId = event.target.id.split("__")[1];
      deleteEntry(entryId)
        .then(response => {
          showEntryList();
        })
    }
  })

  applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id.startsWith("edit")) {
      const entryId = event.target.id.split("__")[1];
      getSingleEntry(entryId)
        .then(response => {
          showEdit(response);
        })
    }
  })


	

const startDailyJournal= () => {
	showEntryList();
}

startDailyJournal();