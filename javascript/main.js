// Amber's timeline

google.charts.load('current', {'packages':['timeline']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var container = document.getElementById('timeline');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: 'string', id: 'Galvanize' });
  dataTable.addColumn({ type: 'string', id: 'Name' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
    [ 'School', 'Galvanize', new Date(2017, 1, 13), new Date(2017, 6, 28) ],
    [ 'Work', 'Find An Awesome Job', new Date(2017, 7, 1),  new Date(2018, 7, 1) ],
    [ 'Play', 'Enjoy The PNW', new Date(2017, 8, 2),  new Date(2040, 0, 1) ]]);

  chart.draw(dataTable);
}
