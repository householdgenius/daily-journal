/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

export const JournalEntryComponent = (entry) => {
    return `
        <section>
        <p id="date" class="entryDate">${entry.date}</p>
        <p id="concept" class="entryConcept">${entry.concept}</p>
        <p id="entry" class="journalEntry">${entry.entry}</p>
         <p id="mood" class="entryMood">${entry.mood}</p>
        </section>
    `
}
