export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface HttpRequestOptions<TBody = unknown> {
	method?: HttpMethod;
	headers?: Record<string, string>;
	body?: TBody;
}

export async function httpRequest<TResponse, TBody = unknown>(
	url: string,
	{ method = 'GET', headers = {}, body }: HttpRequestOptions<TBody> = {},
): Promise<TResponse> {
	const init: RequestInit = {
		method,
		headers: {
			'Content-Type': 'application/json',
			...headers,
		},
	};
	if (body !== undefined) {
		(init as any).body = JSON.stringify(body);
	}
	const res = await fetch(url, init);
	if (!res.ok) {
		const text = await res.text().catch(() => '');
		throw new Error(`HTTP ${res.status}: ${text || res.statusText}`);
	}
	return (await res.json()) as TResponse;
}