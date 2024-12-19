import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import styles from './styles.css';
import FranchiseeLayout from '../../../layouts/FranchiseeLayout';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const ManageSalesPage = () => {
    const location = useLocation();

    // 초기 매출 데이터 설정
    const [sales, setSales] = useState([
        { id: 1, menuName: '치즈 피자', quantity: 2, price: 24000, date: '2024-12-12' },
        { id: 2, menuName: '불고기 피자', quantity: 1, price: 15000, date: '2024-12-13' },
        { id: 3, menuName: '감자튀김', quantity: 3, price: 15000, date: '2024-12-14' },
        { id: 4, menuName: '치킨 버거', quantity: 2, price: 18000, date: '2024-12-15' },
        { id: 5, menuName: '새우 버거', quantity: 1, price: 10000, date: '2024-12-16' },
        { id: 6, menuName: '콜라', quantity: 4, price: 8000, date: '2024-12-17' },
        { id: 7, menuName: '치즈 피자', quantity: 1, price: 12000, date: '2024-12-18' },
        { id: 8, menuName: '불고기 피자', quantity: 2, price: 30000, date: '2024-12-19' },
        { id: 9, menuName: '감자튀김', quantity: 3, price: 15000, date: '2024-12-19' },
    ]);

    // 총 매출 계산
    const totalSales = sales.reduce((total, sale) => total + sale.price, 0);

    // Chart 데이터 준비
    const chartData = {
        labels: sales.map(sale => sale.date),
        datasets: [
            {
                label: '판매 금액',
                data: sales.map(sale => sale.price),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '일별 매출 금액',
            },
        },
    };

    return (
        <FranchiseeLayout>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">매출 관리</h1>
            </div>
            <div className="alert alert-info" role="alert">
                귀하 가맹점의 매출은 아래와 같습니다.
            </div>
            <div className="align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-3 text-gray-800">매출 내역</h1>
                <table className="table table-sm table-bordered text-center">
                    <thead className="thead thead-dark">
                        <tr>
                            <th>메뉴명</th>
                            <th>판매 개수</th>
                            <th>총 가격</th>
                            <th>판매 일자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map((sale) => (
                            <tr key={sale.id}>
                                <td>{sale.menuName}</td>
                                <td>{sale.quantity}</td>
                                <td>{sale.price.toLocaleString()}원</td>
                                <td>{sale.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="my-4">
                <Bar data={chartData} options={chartOptions} />
            </div>
            <div className="alert alert-success" role="alert">
                총 매출: {totalSales.toLocaleString()}원
            </div>
        </FranchiseeLayout>
    );
};

export default ManageSalesPage;
