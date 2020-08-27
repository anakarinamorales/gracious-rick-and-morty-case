const listCharactersFrom = (props) => {
  let charList = [];

  if(props.selectionType === 'dimension') {
    charList = props.chars.filter(char => char.location.dimension === props.dimension);

    return (
      <>
        {charList.map(character => {
          return <p>{character.name}</p>
        })}
      </>
    );
  }

  if (props.selectionType === 'location') {
    charList = props.chars.filter((char) => char.location.id === props.locationId);
    return (
      <>
        {charList.map(character => {
          return <p>{character.name}</p>;
        })}
      </>
    );
  }
};

export default listCharactersFrom;
