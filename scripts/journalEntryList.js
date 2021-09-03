/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data module component
 */
import { getJournalEntries } from "./journalData.js"
import { JournalEntryComponent } from "./journalEntry.js"
import { journalArray } from "./journalData.js";
// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".entryLog");

export const EntryListComponent = () => {
    // Use the journal entry data from the data module component
    const entries = getJournalEntries()

    let listHTMLrepresentation = "";

    for (const oneEntryObject of entries) {
        listHTMLrepresentation += JournalEntryComponent(oneEntryObject);

    }
    entryLog.innerHTML += listHTMLrepresentation
}
const oneLog = document.querySelector(".entryLog");
export const oneEntryComponent = () => {
    // Use the journal entry data from the data module component
    const entries = JournalEntryComponent(journalArray)
    let listHTMLrepresentation = "";

    for (const oneEntryObject of entries) {
        listHTMLrepresentation += entry(oneEntryObject);

    }
    oneLog.innerHTML += listHTMLrepresentation
}