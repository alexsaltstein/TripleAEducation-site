import React from 'react';
import Header from '../Widgets/Header';
import { BarChart, XAxis, YAxis, Cell, Tooltip, CartesianGrid, Bar } from 'recharts';
const AnalyticsScreen = () => {
  const [width, setWidth] = React.useState(window.innerWidth * 0.9)
  const data = [
    { name: 'MA-225', correct: 25, incorrect: 10 },
    { name: 'HHS-274', correct: 22, incorrect: 5 },
    { name: 'CS-413', correct: 12, incorrect: 1 },
    { name: 'SSW-565', correct: 10, incorrect: 2 },
    { name: 'BIO-281', correct: 30, incorrect: 0 },
  ];

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth * 0.9 !== width)
        setWidth(window.innerWidth * 0.9);
    }

    window.addEventListener('resize', handleResize)
  }, []);

  return (
    <div>
      <Header></Header>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <p>Analytics Screen</p>
        <BarChart width={width} height={400} data={data}>
          <XAxis dataKey="name" />
          <YAxis yAxisId="a" orientation="right" />
          <YAxis yAxisId="b" />
          <Tooltip />
          <CartesianGrid vertical={false} />
          <Bar yAxisId="b" dataKey="correct" label>
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={'green'} />
              ))
            }
          </Bar>
          <Bar yAxisId="b" dataKey="incorrect" label>
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={'red'} />
              ))
            }
          </Bar>
        </BarChart>
      </div>
    </div>
  )
}

export default AnalyticsScreen;