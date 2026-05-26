const ctx = document.getElementById('salesChart');

if(ctx){

    new Chart(ctx, {

        type: 'bar',

        data: {

            labels: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun'
            ],

            datasets: [{

                label: 'Sales',

                data: [
                    1200,
                    1900,
                    3000,
                    2500,
                    4200,
                    5000
                ],

                backgroundColor: [
                    '#38bdf8',
                    '#0ea5e9',
                    '#0284c7',
                    '#0369a1',
                    '#075985',
                    '#082f49'
                ],

                borderRadius:10

            }]

        },

        options: {

            responsive:true

        }

    });

}