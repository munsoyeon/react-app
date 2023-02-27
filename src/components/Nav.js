function Nav(props) {
  const list = [];
  for (let i = 0; i < props.topics.length; i++) {
    let topic = props.topics[i];
    list.push(
      <li key={topic.id}>
        <a
          id={topic.id}
          href={"/read/" + topic.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
          }}
        >
          {topic.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{list}</ol>
    </nav>
  );
}

export default Nav;
