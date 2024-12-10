import React from "react";
import { Link } from "react-router-dom";
import Card from "../component/shared/card";

function AboutPage() {
  return <Card>
    <div className="about">
        <h1>About Us</h1>
        <p>A tutorial project for a react js service and brand</p>
        <p>Version: 18.6</p>

        <p>
            <Link to='/'>Back Home</Link>
        </p>
    </div>
  </Card>;
}

export default AboutPage;
