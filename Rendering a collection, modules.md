# Rendering a collection, modules

## Map

```react
const App = (props) => {
    const {notes} = props
    return (
    	<div>
            <h1>Notes</h1>
            <ul>
            	{notes.map(note => 
                          <li>
                           	{note.content}
                           </li>
                          )}
            </ul>
        </div>
    )
}
```

![fullstack content](https://fullstackopen.com/static/fbe2815380db6eb1be707011330d79e1/5a190/1a.png)

Add the keys 

```react
<li key = {note.id}>
	{n}
</li>
```

