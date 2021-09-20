export const entryEdit = (entryObj) => {
	return `
	<div class="newEntry">
	<h3>Edit This entry</h3>
		<div>
			<input value="${entryObj.date}"
				   name="entryDate"
				   class="newentry__input"
				   type="date"
				   placeholder="date" />
		</div>
		<div>
			<input value="${entryObj.concept}"
				   name="entryConcept"
				   class="newentry__input"
				   type="text"
				   placeholder="concept" />
		</div>

    	<textarea name="entry"
    	class="newentry__input newentry__entry"
    	placeholder="newEntry">${entryObj.entry}</textarea>
		
		<input type="hidden" value="${entryObj.id}" name="entryId">
		<input type="hidden" value="${entryObj.timestamp}" name="entryTime">	
		<button id="updateEntry__${entryObj.id}">Update</button>
		<button id="newEntry__cancel">Cancel</button>
	</div>
	`
}