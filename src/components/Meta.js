import Head from 'next/head'
const Meta = ({ title, desc }) => {
	title = title ?? 'Hyperscale - Fast Funding'
	desc =
		desc ??
		'Fast funding for early crypto projects. Receive $200k for 5% by filling out a simple application. You’ll recieve a decision within 1 week.'
	return (
		<Head>
			<title>{title}</title>
			<meta name="title" content={title} />
			<meta name="description" content={desc} />
			<link rel="icon" href="logo.svg" />

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://hyperscale-production.up.railway.app" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={desc} />
			<meta property="og:image" content="https://hyperscale-production.up.railway.app/og-image.png" />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://hyperscale-production.up.railway.app" />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={desc} />
			<meta property="twitter:image" content="https://hyperscale-production.up.railway.app/og-image.png" />
		</Head>
	)
}

export default Meta
