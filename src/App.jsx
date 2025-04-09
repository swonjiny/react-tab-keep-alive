import { useState, Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loading from './components/Loading';
import './App.css';

const EmployeePage = lazy(() => import('./pages/EmployeePage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const CustomerPage = lazy(() => import('./pages/CustomerPage'));

function MainLayout() {
    const [tabs, setTabs] = useState([]);
    const [activeTab, setActiveTab] = useState(null);
    const routes = router.routes[0].children;

    const getCurrentPath = () => {
        return window.location.pathname.substring(1) || '';
    };

    const addTabFromPath = (path) => {
        const route = routes.find(route => route.path === path);
        if (!route) return;

        const newTab = {
            id: Date.now(),
            path,
            title: `${route.title} ${
                tabs.filter(tab => tab.path === path).length + 1
            }`,
            element: (
                <Suspense fallback={<Loading />}>
                    {route.element}
                </Suspense>
            )
        };

        setTabs(prev => [...prev, newTab]);
        setActiveTab(tabs.length);
    };

    const removeTab = (index, e) => {
        e.stopPropagation();
        const newTabs = [...tabs];
        newTabs.splice(index, 1);
        setTabs(newTabs);

        if (newTabs.length === 0) {
            setActiveTab(null);
        } else if (activeTab === index) {
            setActiveTab(Math.min(index, newTabs.length - 1));
        } else if (activeTab > index) {
            setActiveTab(activeTab - 1);
        }
    };

    return (
        <div className="main-layout">
            <div className="menu-buttons">
                {routes.map(route => (
                    <button
                        key={route.path}
                        onClick={() => window.history.pushState({}, '', route.path)}
                        className="menu-button"
                    >
                        {route.title}
                    </button>
                ))}
            </div>

            <nav className="main-nav">
                <button
                    className="add-tab-button"
                    onClick={() => {
                        const currentPath = getCurrentPath();
                        if (currentPath) {
                            addTabFromPath(currentPath);
                        }
                    }}
                >
                    현재 페이지로 탭 추가 +
                </button>
            </nav>

            {tabs.length > 0 && (
                <div className="tabs-container">
                    <div className="tabs-header">
                        {tabs.map((tab, index) => (
                            <div
                                key={tab.id}
                                className={`tab ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab.title}
                                <button
                                    className="tab-close"
                                    onClick={(e) => removeTab(index, e)}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="tabs-content">
                        {tabs.map((tab, index) => (
                            <div
                                key={tab.id}
                                className={`tab-pane ${activeTab === index ? 'active' : ''}`}
                                style={{ display: activeTab === index ? 'block' : 'none' }}
                            >
                                {tab.element}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "employee",
                element: <EmployeePage />,
                title: "직원 정보"
            },
            {
                path: "project",
                element: <ProjectPage />,
                title: "프로젝트 정보"
            },
            {
                path: "customer",
                element: <CustomerPage />,
                title: "고객 정보"
            }
        ]
    }
]);

export default function App() {
    return <RouterProvider router={router} />;
}
