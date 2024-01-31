import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

const Home = () => {
  const context = useContext(myContext);

  console.log(context);
  const { state, color } = context;

  const { name, rollno } = state;

  return (
    <Layout>
      <h1>Name:{name}</h1>
      <h1>Roll Number:{rollno}</h1>
      <h1>My Color:{color}</h1>
    </Layout>
  );
};

export default Home;
