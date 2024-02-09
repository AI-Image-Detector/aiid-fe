function Introduction(props) {
  console.log("Parameter kiriman: ",props.name)
  return (
    <div >
        <h1>
            Introduction
        </h1>
        <p>Hi, Nama saya adalah: {props.name}</p>
    </div>
  );
}

export default Introduction;
