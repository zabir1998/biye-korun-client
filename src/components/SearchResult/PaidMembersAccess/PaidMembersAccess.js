import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Accordion, Card } from "react-bootstrap";

const PaidMembersAccess = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Access to paid members{" "}
            <FontAwesomeIcon style={{ color: "pink" }} icon={faUnlockAlt} />
          </Accordion.Toggle>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Well Known Colleges
            <FontAwesomeIcon style={{ color: "pink" }} icon={faUnlockAlt} />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Family Based Out of
            <FontAwesomeIcon style={{ color: "pink" }} icon={faUnlockAlt} />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Height{" "}
            <FontAwesomeIcon style={{ color: "pink" }} icon={faUnlockAlt} />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            Income{" "}
            <FontAwesomeIcon style={{ color: "pink" }} icon={faUnlockAlt} />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Education{" "}
            <FontAwesomeIcon style={{ color: "pink" }} icon={faUnlockAlt} />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="5">
            Location{" "}
            <FontAwesomeIcon style={{ color: "pink" }} icon={faUnlockAlt} />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="6">
            Lifestyle{" "}
            <FontAwesomeIcon style={{ color: "pink" }} icon={faUnlockAlt} />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="6">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default PaidMembersAccess;
