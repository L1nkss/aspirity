import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';
import { css } from 'glamor';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const containerClass = css({
  width: '100%',
  height: '500px',
});

const sortDataByDate = (data) => {
  return data.sort((a, b) => {
    return new Date(a) - new Date(b);
  });
};

const ActivityChart = (props) => {
  let chartData = [];
  let dateChart = [];
  const {
    className,
    data,
  } = props;

  if (data) {
    chartData = data.map((element) => element.distance);
    dateChart = sortDataByDate(data.map((element) => element.date));
  }

  const options = {
    title: {
      text: 'Activity activity-chart by dates',
    },
    xAxis: {
      categories: dateChart,
    },
    series: [{
      data: chartData,
    }],
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      {props.render(toggle)}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Activity Chart</ModalHeader>
        <ModalBody>
          <div className={`${containerClass}`}>
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
            />
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ActivityChart;
