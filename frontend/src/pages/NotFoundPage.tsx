import { Link } from 'react-router-dom';

function NotFoundPage() {
	return (
		<section>
			<h1>Sayfa bulunamadı</h1>
			<p>
				Ana sayfaya dönmek için <Link to="/">tıklayın</Link>.
			</p>
		</section>
	);
}

export default NotFoundPage;