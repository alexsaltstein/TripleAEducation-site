import React from 'react';
import Header from '../Widgets/Header';
import { connect } from 'react-redux';
import { BarChart, XAxis, YAxis, Cell, Tooltip, CartesianGrid, Bar } from 'recharts';
const AnalyticsScreen = ({ cardSets }) => {
  const [width, setWidth] = React.useState(window.innerWidth * 0.9)
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData([]);
    const newData = [];
    Object.keys(cardSets).forEach(val => {
      let correct = 0;
      let incorrect = 0;
      Object.keys(cardSets[val]).forEach(card => {
        const gotItRight = cardSets[val][card].gotItRight
        if(gotItRight){
          correct++;
        }else if (!gotItRight && gotItRight !== undefined){
          incorrect++;
        }
      })
      newData.push({name:val, correct, incorrect});
    });
    setData(newData);

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
        {(data && data.length > 0) ?
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
          </BarChart> :
          <p>No data found!</p>}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cardSets: state.cardSets
});

export default connect(mapStateToProps, null)(AnalyticsScreen);