import React, { useState, useEffect } from 'react';
import { Row, Col, ListGroup, Spinner } from 'react-bootstrap';
import { getAllRecipes } from './RecipesService';

export default function Recipes() {

  const [ recipes, setRecipes ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const fetchRecipes = async ()  => {
    const recipes = await getAllRecipes();
    setRecipes(recipes);
    setLoading(false);
  }

  const isLoading = () => {
    return (
      <div className="row justify-content-center">
        <Spinner animation="grow" variant="info" />
      </div>
    );
  }

  useEffect( () => {
    fetchRecipes();
  }, []);

  const renderRecipesList = Object.values(recipes).map( recipe => {
    console.log(recipe)
    return (
      <ListGroup.Item>
        <p>{ recipe.title }</p>
        <p>{ recipe.author }</p>
      </ListGroup.Item>
    );
  });

  return (
    <>
      <Row>
        <Col sm={4}>
          <h3 style={{ fontFamily: 'Ultra', textAlign: 'center' }}>Recipes</h3>
          <ListGroup variant="flush">
            { (loading) ? isLoading() : renderRecipesList }
          </ListGroup>
        </Col>
      </Row>
    </>
  );

}
