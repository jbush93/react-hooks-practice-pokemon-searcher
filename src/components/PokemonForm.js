import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handleNewPoke })
{
  const [name, setName] = useState("")
  const [hp, setHp] = useState(0)
  const [front, setFront] = useState("")
  const [back, setBack] = useState("")

  function handleNameInput(evt)
  {
    setName(evt.target.value)
  }
  function handleHpInput(evt)
  {
    setHp(evt.target.value)
  }
  function handleFrontInput(evt)
  {
    setFront(evt.target.value)
  }
  function handleBackInput(evt)
  {
    setBack(evt.target.value)
  }

  function handleSubmit(evt)
  {
    evt.preventDefault()
    console.log(evt)
    let newPokeFormData = {
      name: name,
      hp: hp,
      sprites: {
        front: front,
        back: back
      }

    }

    console.log(newPokeFormData)

    fetch("http://localhost:3001/pokemon", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokeFormData)
    })
      .then(function (resp)
      {
        return resp.json()
      })
      .then(function (data)
      {
        handleNewPoke(data)
      })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(evt) =>
          handleSubmit(evt)}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={handleNameInput} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={handleHpInput} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={front}
            onChange={handleFrontInput}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={back}
            onChange={handleBackInput}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
