/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

export const JournalEntryComponent = (entry) => {
    return `
        <section>
        <p id="date" class="entryDate">${entry.timestamp}</p>
        <p id="concept" class="entryConcept">${entry.concept}</p>
        <p id="entry" class="journalEntry">${entry.entry}</p>
         <p id="mood" class="entryMood">${entry.mood}</p>
         <div><button id="edit--${entry.id}">Edit</button></div>
        </section>
    `
}

export const postEntry = () => {
    return `
    <div class="newPost">
        <div>
            <input value=""
                   name="postTitle"
                   class="newPost__input"
                   type="text"
                   placeholder="Title" />
        </div>
        <div>
            <input value=""
                   name="postURL"
                   class="newPost__input"
                   type="text"
                   placeholder="URL of gif" />
        </div>

        <textarea name="postDescription"
            class="newPost__input newPost__description"
            placeholder="Story behind your gif..."></textarea>

        <button id="newPost__submit">Save</button>
        <button id="newPost__cancel">Cancel</button>
    </div>
    `
}