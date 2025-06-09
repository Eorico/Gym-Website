document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('macro-form');
    const caloriesInput = document.getElementById('calories');
    const carbsInput = document.getElementById('carbs');
    const proteinInput = document.getElementById('protein');
    const fatsInput = document.getElementById('fats');
    const ctx = document.getElementById('macro-chart').getContext('2d');
    const resetBtn = document.getElementById('reset-btn');

    let chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Calories', 'Carbs', 'Protein', 'Fats'],
            datasets: [{
                data: [0, 0, 0, 0], 
                backgroundColor: ['#ffcc00', '#66ccff', '#ff6600', '#ff3366'],
                hoverOffset: 4
            }]
        },
        options: {
 responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + 'g';
                        }
                    }
                }
            }
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const calories = Math.max(0, parseInt(caloriesInput.value) || 0);
        const carbs = Math.max(0, parseInt(carbsInput.value) || 0);
        const protein = Math.max(0, parseInt(proteinInput.value) || 0);
        const fats = Math.max(0, parseInt(fatsInput.value) || 0);

        chart.data.datasets[0].data = [calories, carbs, protein, fats];
        chart.update();
    });

    resetBtn.addEventListener('click', function() {
        caloriesInput.value = '';
        carbsInput.value = '';
        proteinInput.value = '';
        fatsInput.value = '';

        chart.data.datasets[0].data = [0, 0, 0, 0];
        chart.update();
    });
});