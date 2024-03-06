import React from 'react'
import './dougnutChart.css'
import {Chart as ChartJs , ArcElement, Tooltip, Legend} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'

ChartJs.register(ArcElement, Tooltip, Legend)
const options = {
    plugins: {
        Legend: {
            labels:{
                color: "#fff",
            }
        }
    }
}
const DougnutChart = ({data , colors}) => {
    const chartData = {
        labels: Object.keys(data),
        datasets: [{
            data: Object.values(data),
            backgroundColor: colors,
            borderColor: '#ffffff',
            borderWidth: 1
        }]
    }
    return (
        <div className='dougnut-chart'>
            <div className='dougnut-chart-box'>
                <Doughnut data={chartData} options={options}/>
            </div>
        </div>
    )
}

export default DougnutChart