export const Entry = (entryObject) => {
    return `
    <section>
    <p id="date" class="entryDate">${entryObject.date}</p>
    <p id="concept" class="entryConcept">${entryObject.concept}</p>
    <p id="entry" class="journalEntry">${entryObject.entry}</p>
     <p id="mood" class="entryMood">${entryObject.mood}</p>
     <button id="delete__${entryObject.id}">Delete</button>
     <button id="edit__${entryObject.id}">Edit</button>
    </section>
    `
  }