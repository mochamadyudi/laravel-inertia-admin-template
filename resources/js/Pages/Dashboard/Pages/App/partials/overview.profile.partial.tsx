import React from 'react';
import {Avatar, Card, Col, Image, Row, Typography} from "antd";

type experienceProps = {
  title: string;
  from: string;
  to: string;
  summary: string;
  logo?: string;
};
const OverviewProfilePartial: React.FC = () => {
  const experience: Array<experienceProps> = [
    {
      title: 'Frontend Developer, Google Inc',
      from: 'Juni 2020',
      to: 'Now',
      summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      logo: '/assets/img/logo/google.png'
    },
    {
      title: 'Frontend Developer, Microsoft Inc',
      from: 'Feb 2018',
      to: 'Jun 2022',
      summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      logo: '/assets/img/logo/microsoft.png'
    },
    {
      title: 'Software Engineer, Twitter Inc',
      from: 'Feb 2015',
      to: 'Jun 2018',
      summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      logo: '/assets/img/logo/twitter.png'
    },
  ]
  return (
    <div className="space-y-7">
      <section>
        <Typography.Title level={2}>About me</Typography.Title>
        <Typography.Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Typography.Paragraph>
      </section>

      <section className="space-y-6" id="experiences">
        <Typography.Title level={3}>Experience</Typography.Title>
        <div className="grid grid-cols-2 gap-4">
          {experience.map((item: experienceProps)=> {
            return (
              <div className="col-span-1">
                <div className="flex items-start gap-4 p-4 border border-slate-200 rounded-2xl dark:border-slate-600 bg-white dark:bg-transparent overflow-hidden">
                  <div className="min-w-[50px] w-[50px] overflow-hidden rounded-lg">
                    <img
                      src={item.logo}
                      alt={item.logo}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-full space-y-2 overflow-hidden">
                    <div>
                      <Typography className="!text-lg">{item.title}</Typography>
                      <Typography className="!text-xs">{[item.from, item.to].join(' - ')}</Typography>
                    </div>
                    <Typography.Text ellipsis className="!text-base">{item.summary}</Typography.Text>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <Card title={'Interested'} id="interested">
        <Row gutter={24}>
          <Col xs={24} lg={12}>
            <div className="space-y-6">
              <div>
                <Typography.Title level={4}>Movies</Typography.Title>
                <Typography.Paragraph className="!text-sm">Inception, The Matrix, Mad Max: Fury Road, Her, Eternal Sunshine of the Spotless
                  Mind, The Dark Knight, Arrival, Moonlight</Typography.Paragraph>
              </div>
              <div>
                <Typography.Title level={4}>Books</Typography.Title>
                <Typography.Paragraph className="!text-sm">Sapiens: A Brief History of Humankind, Atomic Habits, The Subtle Art of Not Giving a F*ck, Quiet: The Power of Introverts, Educated, Deep Work, Man’s Search for Meaning</Typography.Paragraph>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className="space-y-6">
              <div>
                <Typography.Title level={4}>Games</Typography.Title>
                <Typography.Paragraph className="!text-sm">The Witcher 3: Wild Hunt, Hades, Hollow Knight, The Legend of Zelda: Breath of the Wild, Celeste</Typography.Paragraph>
              </div>
              <div>
                <Typography.Title level={4}>Hobbies</Typography.Title>
                <Typography.Paragraph className="!text-sm">Photography, Gardening, Yoga, Calligraphy, Cycling, 3D Printing, Cooking gourmet meals</Typography.Paragraph>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default OverviewProfilePartial;
