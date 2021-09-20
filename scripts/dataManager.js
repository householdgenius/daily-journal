export const getEntries = () => {

    return fetch("http://localhost:8088/entry")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}

export const createEntry = entry => {
    return fetch("http://localhost:8088/entry", {
        method: "entry",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
  
    })
        .then(response => response.json())
  }
  
  export const deleteEntry = entryId => {
    return fetch(`http://localhost:8088/entry/${entryId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
  
    })
        .then(response => response.json())
        
  }

  export const getSingleEntry = (entryId) => {
    return fetch(`http://localhost:8088/entry/${entryId}`)
      .then(response => response.json())
  }

  export const updateEntry = entryObj => {
    return fetch(`http://localhost:8088/entry/${entryObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObj)
  
    })
        .then(response => response.json())
        
  }