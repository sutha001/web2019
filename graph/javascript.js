var ctx = document.getElementById("myChart");
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ["Ammo", "Range", "power(*100 FPS)"],
        datasets: [
            {
            label:'ปืนสั้นอัดแก๊ส',
            data: [1,10,4.3],
            backgroundColor:'rgba(255, 0, 0, 0.1)',
            borderColor:'rgba(255, 165, 0, 0.5)',
            borderJoinStyle:'round'
            },{
            label:'ปืนสั้นมาตรฐาน',
            data: [5,25,10],
            backgroundColor:'rgba(0, 255, 0, 0.1)',
            borderColor:'rgba(50, 205, 50, 0.5)',
            borderJoinStyle:'round'
            },

        ],
    }}
    );