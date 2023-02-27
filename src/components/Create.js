function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onCreate(title, body);
        }}
      >
        <div>
          <input type="text" name="title" placeholder="title" />
        </div>
        <div>
          <textarea name="body" placeholder="body"></textarea>
        </div>
        <div>
          <input type="submit" value="Create"></input>
        </div>
      </form>
    </article>
  );
}

export default Create;
