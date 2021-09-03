import { EntryListComponent } from "./journalEntryList.js";
import {getJournalEntries} from "./dataManager.js"



EntryListComponent();

const applicationElement = document.querySelector(".journal");

const allEntries = getJournalEntries()
.then(apiEntries => {
    console.log ("now we can console the entries",apiEntries)
})

applicationElement.addEventListener("click", (event) => {
	
	if (event.target.id.startsWith("edit")){
		console.log("post clicked", event.target.id.split("--"))
		console.log("the id is", event.target.id.split("--")[1])
	}
})

applicationElement.addEventListener("change", event => {
    if (event.target.id === "yearSelection") {
      const yearAsNumber = parseInt(event.target.value)
      console.log(`User wants to see posts since ${yearAsNumber}`)
      //invoke a filter function passing the year as an argument
      showFilteredPosts(yearAsNumber);
    }
  })
  
  const showFilteredPosts = (year) => {
    //get a copy of the post collection
    const epoch = Date.parse(`01/01/${year}`);
    //filter the data
    const filteredData = getJournalEntries().filter(singleEntry => {
      if (singleEntry.timestamp >= epoch) {
        return singleEntry
      }
    })
    const entryElement = document.querySelector(".journalEntry");
    entryElement.innerHTML = getJournalEntries(filteredData);
  }