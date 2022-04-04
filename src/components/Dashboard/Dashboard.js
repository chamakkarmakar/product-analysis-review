import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Pie, PieChart, Tooltip, AreaChart, Area, CartesianGrid, BarChart, Legend, Bar } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    const [chart, setChart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChart(data))
    }, [])
    return (
        <div className='charts'>

            <div className="chart">
                <h5>Monthly Sell</h5>
                <LineChart width={450} height={300} data={chart}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" strokeWidth={2} />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </div>

            <div className="chart">
                <h5>Invesment VS Revenue</h5>
                <AreaChart width={450} height={300} data={chart}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </div>

            <div className="chart">
            <h5>Invesment VS Revenue</h5>
                <BarChart width={450} height={300} data={chart}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>

            <div className="chart">
            <h5>Invesment VS Revenue</h5>
                <PieChart width={730} height={300}>
                    <Tooltip />
                    <Pie data={chart} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={chart} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>
            </div>
        </div >
    );
};

export default Dashboard;