import React from 'react';
import Header from '../Widgets/Header';
import { connect } from 'react-redux';
import { BarChart, XAxis, YAxis, Cell, Tooltip, CartesianGrid, Bar } from 'recharts';
import { Link } from 'react-router-dom';
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
        if (gotItRight) {
          correct++;
        } else if (!gotItRight && gotItRight !== undefined) {
          incorrect++;
        }
      })
      newData.push({ name: val, correct, incorrect });
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
        <u>
          <p style={{ fontSize: 32, fontWeight: 'bold' }}>Analytics Summary</p>
        </u>
        <div>
          <h5>Card Set Information:</h5>
          <p>You have {Object.keys(cardSets).length} total card sets</p>
          <ul style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'flex-start' }}>
            {Object.keys(cardSets).map(val => (
              <Link to={`/cards?name=${encodeURI(val)}`} style={{color: 'black'}}><li style={{fontSize: 20}}>- <b>{val}</b>: {Object.keys(cardSets[val]).length} total cards </li></Link>
            ))}
          </ul>
        </div>
        {(data && data.length > 0) ?
          <div>
            <h5>Amount of correct and incorrect cards by card set:</h5>
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
          </div> :
          <p>No data found!</p>}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cardSets: state.cardSets
});

export default connect(mapStateToProps, null)(AnalyticsScreen);