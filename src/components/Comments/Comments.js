import React from 'react';
import './Comments.scss'
import {Button, Card, Icon, Image, Label} from 'semantic-ui-react'

const Comments = () => (
  <>
    <h1 className="description__heading-2" id="comments">Наши довольные клиенты</h1>
    <div className="row ">
      <div className="col-md-4 comments__container">
        <Card className="comment-card">
          <Card.Content>
            <Image
              floated='right'
              size='tiny'
              src='http://samsungs10.discountsalepro.com/files/galaxy_s10_1/img/rew.jpg'
            />
            <Card.Header>Ирина</Card.Header>
            <Card.Meta>Стилист, Москва</Card.Meta>
            <Card.Description>
              Купила телефон. Обрадовалась акции, вкусная цена очень)
              На радостях, купила 2 телефона))) мне вскоре перезвонили и подтвердили мой заказ.
              Сделали скидочку, потому что сразу два заказала.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button as='div' labelPosition='right'>
              <Button color='red'>
                <Icon name='heart' /> Like
              </Button>
              <Label as='a' basic color='red' pointing='left'>55</Label>
            </Button>
          </Card.Content>
        </Card>
      </div>
      <div className="col-md-4 comments__container">
        <Card className="comment-card">
          <Card.Content>
            <Image
              floated='right'
              size='tiny'
              src='http://samsungs10.discountsalepro.com/files/galaxy_s10_1/img/rew2.jpg'
            />
            <Card.Header>Александр</Card.Header>
            <Card.Meta>Фотограф, Нижний Новгород</Card.Meta>
            <Card.Description>
              Спасибо за отличную работу.
              Заполнил форму, сразу позвонил менеджер,
              все рассказал и ответил на вопросы (Дима, отдельное спасибо!)
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button as='div' labelPosition='right'>
              <Button color='red'>
                <Icon name='heart' /> Like
              </Button>
              <Label as='a' basic color='red' pointing='left'>55</Label>
            </Button>
          </Card.Content>
        </Card>
      </div>
      <div className="col-md-4 comments__container">
        <Card className="comment-card">
          <Card.Content>
            <Image
              floated='right'
              size='tiny'
              src='http://samsungs10.discountsalepro.com/files/galaxy_s10_1/img/rew5.jpg'
            />
            <Card.Header>Юлия</Card.Header>
            <Card.Meta>парикмахер, Уфа</Card.Meta>
            <Card.Description>
              С момента выхода Галакси с9, сразу его захотела приобрести,
              но покупать оригинал за 60 тыс – это бред конечно, да и дорого очень.
              Здесь долго не выбирала, цена сразу меня привлекла, и гарантия, и подарки.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button as='div' labelPosition='right'>
              <Button color='red'>
                <Icon name='heart' /> Like
              </Button>
              <Label as='a' basic color='red' pointing='left'>55</Label>
            </Button>
          </Card.Content>
        </Card>
      </div>
    </div>
  </>
);

export default Comments;
