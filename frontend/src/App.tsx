import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
	return (
		<div>
			<header style={{ padding: '12px 16px', borderBottom: '1px solid #e5e7eb' }}>
				<nav style={{ display: 'flex', gap: 12 }}>
					<Link to="/">Ana Sayfa</Link>
				</nav>
			</header>
			<main style={{ padding: 16 }}>
				<Suspense fallback={<div>Yükleniyor...</div>}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</Suspense>
			</main>
		</div>
	);
}

export default App;