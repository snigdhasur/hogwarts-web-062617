import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const PigDisplayModal = (props) => (
  <Modal trigger={<Button>more details</Button>}>
    <Modal.Header>{props.pig.name}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={props.imgName} />
      <Modal.Description>
        <Header>Highest medal: {props.pig["highest medal achieved"]}</Header>
        <p><strong>Specialty:</strong> {props.pig.specialty} </p>
        <p><strong>Weight:</strong> {props.pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
         <p><strong>Greased?:</strong> {props.pig.greased ? "Yes" : "No"} </p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default PigDisplayModal