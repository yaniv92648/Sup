import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import qs from "qs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Match({ match }) {
  //   useEffect(() => {
  //     loadUserById();
  //   }, []);

  //   const [user, setUser] = useState({});

  //   const loadUserById = () => {
  //     axios.get(`/getuser/${match.params.id}`).then((response) => {
  //       let data = response.data;
  //       setStudent(data);
  //     });
  //   };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // const postData = data;
    // console.log(qs.stringify(putData));

    // axios.post("/register", qs.stringify(putData)).then((res) => {
    //   console.log(res);
    // });
  };
  const imageOne = () => {
    const now = new Date();
    console.log("cat", now);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>username</Form.Label>
          <Form.Control name="cat" ref={register} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            ref={register}
          />
          <Button>
            <img
              src={process.env.PUBLIC_URL + "/images/cat.jpg"}
              alt="1"
              width="200px"
              name="cat"
              type="submit"
              onClick={(event) => imageOne(event)}
            />
          </Button>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Age range</Form.Label>
          <Form.Control as="select" name="age-range" ref={register}>
            <option>Under 25</option>
            <option>26-35</option>
            <option>36-45</option>
            <option>46-55</option>
            <option>Over 55</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Languages</Form.Label>
          <Form.Control as="select" multiple name="language" ref={register}>
            <option>English</option>
            <option>Hebrew</option>
            <option>French</option>
            <option>Russian</option>
            <option>Arabic</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Select Interests</Form.Label>
          <Form.Control as="select" multiple name="selections" ref={register}>
            <option>Agriculture/Gardening</option>
            <option>Architecture</option>
            <option>Childcare</option>
            <option>Cooking/Dining</option>
            <option>Crafts</option>
            <option>Current Affairs</option>
            <option>Design/Graphic Arts</option>
            <option>Education/Teaching</option>
            <option>Engineering/Electronics</option>
            <option>Environment/Natural Resources</option>
            <option>Film</option>
            <option>Finance/Investment</option>
            <option>Fine/Visual/Performing Arts</option>
            <option>Gaming</option>
            <option>Government/Policy</option>
            <option>Healthcare/Medicine</option>
            <option>History</option>
            <option>Hospitality/Tourism</option>
            <option>Intelligence/Criminal Justice/Security</option>
            <option>Mindfulness</option>
            <option>Music</option>
            <option>Petcare</option>
            <option>Reading/Books</option>
            <option>Retail/Shopping</option>
            <option>Science</option>
            <option>Sports</option>
            <option>Petcare</option>
            <option>Technology</option>
            <option>Travel</option>
            <option>Volunteering</option>
            <option>Writing/Publishing/Translation</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>More Interests</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            name="interests"
            ref={register}
            placeholder="Interests"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Describe Yourself</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            name="description"
            ref={register}
            placeholder="Describe Yourself"
          />
        </Form.Group>
        <Button className="none_yet" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}
export default Match;
