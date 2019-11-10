var ctx = document.getElementById("myChart");
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ["Ammo", "Range", "Weight"],
        datasets: [
            {
            data: [1,10,50]
            }
        ],
    }}
    );