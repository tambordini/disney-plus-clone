import { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { genresService, IGenres } from '../../services/genres'
import TV from '../../assets/images/television.png'
import { moviesService } from '../../services/movies'

const Genres = (): React.ReactElement => {
  const [genres, setGenres] = useState<IGenres[]>()

  useEffect(() => {
    genresService.getAll().then((res: AxiosResponse) => {
      setGenres(res.data.genres)
    })

    moviesService.getTopRated().then((res: AxiosResponse) => console.log(res))
  }, [])

  return (
    <Container>
      <div className="col-xs-12 content-holder">
        <h2>Genres</h2>
        <Row xs={3} sm={3} md={4} lg={5} className="g-4">
          {genres?.map((genre: IGenres) => (
            <Col key={genre.id}>
              <Card>
                <Card.Img src={TV} alt="test"></Card.Img>
                <Card.ImgOverlay
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Card.Title style={{ textTransform: 'uppercase' }}>
                    {genre.name}
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  )
}

export default Genres
