import { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { genresService, IGenres } from '../../services/genres'

const Genres = (): React.ReactElement => {
  const [genres, setGenres] = useState<IGenres[]>()

  useEffect(() => {
    genresService.getAll().then((res: AxiosResponse) => {
      setGenres(res.data.genres)
    })
  }, [])

  useEffect(() => {
    console.log(genres)
  }, [genres])

  return (
    <Container>
      Genres
      <Row>
        {genres?.map((genre: IGenres) => (
          <Col key={genre.id} xs={6}>
            <Card>
              <Card.Img></Card.Img>
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Genres
