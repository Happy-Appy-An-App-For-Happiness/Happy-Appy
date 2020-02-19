var week = {
  x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  y: [6,5,5,8,7,8,9],
  type: 'scatter'
};
var year = {
  x: ['January','February','March', 'April', 'May','June', 'July','August',"September", "October", "November",  "December"],
  y: [6,5,5,8,7,8,9,4,8,10,10,9],
  type: 'bar'
};
var month = {
  x: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
  y: [6,5,6,5,4,7,8,6,5,4,8,7,6,7,8,7,8,7,8,6,6,7,8,9,8,9,8,9],
  type: 'scatter'
};

var week_layout = {
  title: 'Week of 2/17',
  xaxis: {
    title: 'Day'
  },
  yaxis: {
    rangemode: 'tozero',
    title: 'Happiness Level'
  }
};
var year_layout = {
  title: 'Happiness avg Per Month',
  xaxis: {
    title: 'Months'
  },
  yaxis: {
    rangemode: 'tozero',
    title: 'Happiness Level'
  }
};
var month_layout = {
  title: 'February',
  xaxis: {
    title: 'Day'
  },
  yaxis: {
    rangemode: 'tozero',
    title: 'Happiness Level'
  }
};

week_data=[week]
month_data = [month]
year_data = [year]
const plot_year = () =>{
  Plotly.newPlot('Graph', year_data, year_layout);
}

const plot_week = () =>{
  Plotly.newPlot('Graph', week_data, week_layout);
}

const plot_month = () =>{
  Plotly.newPlot('Graph', month_data, month_layout);
}
