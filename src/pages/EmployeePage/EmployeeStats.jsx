import styles from './EmployeeStats.module.css';
import {useMemo} from "react";

export default function EmployeeStats({ employees }) {
    const stats = useMemo(() => {
        return {
            totalEmployees: employees.length,
            averageSalary: employees.length
                ? employees.reduce((sum, emp) => sum + Number(emp.salary), 0) / employees.length
                : 0,
            departmentCounts: employees.reduce((acc, emp) => {
                acc[emp.department] = (acc[emp.department] || 0) + 1;
                return acc;
            }, {})
        };
    }, [employees]);

    return (
        <div className={styles.statsContainer}>
            <h3>통계</h3>
            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <h4>전체 직원 수</h4>
                    <p>{stats.totalEmployees}명</p>
                </div>
                <div className={styles.statCard}>
                    <h4>평균 급여</h4>
                    <p>{stats.averageSalary.toLocaleString()}원</p>
                </div>
                <div className={styles.statCard}>
                    <h4>부서별 인원</h4>
                    <ul>
                        {Object.entries(stats.departmentCounts).map(([dept, count]) => (
                            <li key={dept}>{dept}: {count}명</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
